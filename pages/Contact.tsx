
import React, { useState, useMemo } from 'react';
import { Send, CheckCircle, MapPin, Truck, Loader2, AlertTriangle, Store, ShoppingBag, ShieldCheck, Package, UtensilsCrossed, Gift, Star, Flame, Info, Coffee, Leaf } from 'lucide-react';
import { PRODUCTS } from '../constants';

/**
 * 🔗 Google Sheet 串接設定：
 * 已填入用戶提供的正式部署網址。
 */
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwPv6zcS3qOM59QYxRXx6ShIGUDcyQ6iEGlR1lvM0Se__WuC9MIPoBScnc_yTG-Xs7Z/exec"; 

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SPECIAL_IDS = [
    'special', 'leanOriginal', 'originalCocktail', 'leanKaoliang', 
    'sugarFreeLeanKaoliang', 'fattyKaoliang', 'sugarFreeSpicy', 'garlicCocktailNoCinnamon'
  ];

  const groups = [
    { name: '經典手工香腸', icon: <UtensilsCrossed size={18} />, ids: ['kaoliang', 'original', 'spicy', 'garlic'] },
    { name: '隱藏版私房特製', icon: <Star size={18} />, ids: ['leanOriginal', 'originalCocktail', 'leanKaoliang', 'sugarFreeLeanKaoliang', 'fattyKaoliang', 'sugarFreeSpicy', 'garlicCocktailNoCinnamon', 'special'] },
    { name: '精選家長肉品', icon: <Package size={18} />, ids: ['saltedPorkBelly', 'saltedPorkCollar', 'chickenThigh', 'marinatedSlice', 'lessMeatRibs', 'moreMeatRibs', 'tendonMeat'] },
    { name: '職人手作醬料', icon: <Flame size={18} />, ids: ['fragrantChili'] },
    { name: '節慶限定與禮品', icon: <Gift size={18} />, ids: ['zongzi', 'giftBox'] },
    { 
      name: '良心合作 × 安心選物', 
      icon: <Leaf size={18} />, 
      ids: ['teaBagRed', 'teaBagPuerh', 'teaSetRed', 'teaSetPuerh'],
      note: '常溫商品滿600元免運，未滿600元/酌收運費130元'
    }
  ];

  const initialProductCounts = PRODUCTS.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {} as Record<string, number>);

  const [formData, setFormData] = useState({
    name: '',
    fbName: '',
    phone: '',
    lineName: '',
    deliveryMethod: 'pickup',
    address: '',
    pickupTime: '',
    receiverName: '',
    receiverPhone: '',
    shipDate: '', // 預計寄出日期
    deliveryTimeSlot: '', // 希望送達時段 (上午/下午)
    cvsStoreName: '', // 取件門市
    cvsBrandInfo: '', // 超商名稱/代碼
    products: initialProductCounts,
    specialNote: '',
    chiliSpicyLevel: '',
    note: ''
  });

  const totalPrice = useMemo(() => {
    return Object.entries(formData.products).reduce((total: number, [id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      return total + ((product?.price || 0) * (qty as number));
    }, 0);
  }, [formData.products]);

  const handleProductChange = (id: string, delta: number) => {
    setFormData(prev => {
      const currentQty = prev.products[id];
      let newQty = currentQty + delta;
      
      // 香腸類有特殊的起訂量邏輯
      if (SPECIAL_IDS.includes(id)) {
        if (delta > 0) newQty = currentQty === 0 ? 10 : currentQty + 5;
        else if (delta < 0) newQty = currentQty <= 10 ? 0 : currentQty - 5;
      }
      // 辣椒類
      else if (id === 'fragrantChili') {
        if (delta > 0) newQty = currentQty === 0 ? 12 : currentQty + 1;
        else if (delta < 0) newQty = currentQty <= 12 ? 0 : currentQty - 1;
      }
      // 其他類別（包含茶飲）採一般增減
      
      return { ...prev, products: { ...prev.products, [id]: Math.max(0, newQty) } };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const totalQty = Object.values(formData.products).reduce((a: number, b) => a + (b as number), 0);
    if (totalQty === 0) {
      setError("哎呀，廖媽媽提醒您：請至少選擇一項產品喔！");
      return;
    }

    if ((formData.deliveryMethod === 'shipping' || formData.deliveryMethod === 'cvs') && (!formData.shipDate || !formData.deliveryTimeSlot)) {
      setError("請選擇預計寄出日期與希望送達時段。");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderSummary = PRODUCTS
        .filter(p => formData.products[p.id] > 0)
        .map(p => {
          let t = `${p.name} x ${formData.products[p.id]} ${p.unit}`;
          if (p.id === 'special' && formData.specialNote) t += ` (特製需求: ${formData.specialNote})`;
          if (p.id === 'fragrantChili' && formData.chiliSpicyLevel) t += ` (辣度: ${formData.chiliSpicyLevel})`;
          return t;
        }).join('\n');

      // 根據交貨方式整理地址/資訊欄位
      let deliveryDetail = '';
      if (formData.deliveryMethod === 'pickup') {
        deliveryDetail = `自取時間: ${formData.pickupTime}`;
      } else if (formData.deliveryMethod === 'shipping') {
        deliveryDetail = `收件人: ${formData.receiverName}\n電話: ${formData.receiverPhone}\n寄出日: ${formData.shipDate}\n希望時段: ${formData.deliveryTimeSlot}\n地址: ${formData.address}`;
      } else if (formData.deliveryMethod === 'cvs') {
        deliveryDetail = `取件人: ${formData.receiverName}\n手機: ${formData.receiverPhone}\n寄出日: ${formData.shipDate}\n希望時段: ${formData.deliveryTimeSlot}\n門市: ${formData.cvsStoreName}\n超商代碼: ${formData.cvsBrandInfo}`;
      }

      const payload = {
        timestamp: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        name: formData.name,
        phone: formData.phone,
        fbName: formData.fbName || '無',
        lineName: formData.lineName || '無',
        deliveryMethod: formData.deliveryMethod,
        orderDetail: orderSummary,
        totalPrice: totalPrice,
        deliveryFullInfo: deliveryDetail, // 整合詳細資訊
        note: formData.note || '無'
      };

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      await new Promise(r => setTimeout(r, 2000));
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError("資料傳送失敗，請直接透過 LINE 聯繫廖媽媽訂購！");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center animate-fade-up">
        <div className="bg-white rounded-[3rem] p-12 sm:p-20 shadow-2xl border border-stone-100 flex flex-col items-center space-y-8">
          <div className="bg-green-100 p-8 rounded-full text-green-600"><CheckCircle size={80} /></div>
          <div className="space-y-4">
            <h1 className="text-4xl font-serif-tc font-bold text-stone-900">預約成功！</h1>
            <p className="text-stone-500 text-lg leading-relaxed max-w-md mx-auto font-light">
              資料已加密傳送。廖媽媽會儘速確認訂單，請留意通訊軟體訊息。
            </p>
          </div>
          <button onClick={() => setSubmitted(false)} className="text-stone-400 hover:text-red-800 text-sm font-medium underline underline-offset-8 transition-all">← 建立下一筆預約</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="bg-stone-50 border-b border-stone-200 py-20 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif-tc font-bold text-stone-900 mb-6 tracking-tight">訂購預約</h1>
          <p className="text-stone-500 text-lg font-light">廖媽媽堅持接單生產，守護家人的餐桌品質。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-[2rem] flex items-center gap-4 text-red-800 animate-fade-up">
            <AlertTriangle className="shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
          <div className="p-8 sm:p-16 space-y-16">
            
            {/* Step 1: 聯絡資訊 */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-900 text-white rounded-xl flex items-center justify-center font-bold">01</div>
                <h2 className="text-2xl font-serif-tc font-bold text-stone-900">基本聯絡資料</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">訂購人姓名 *</label>
                  <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-stone-50 border-none focus:ring-2 focus:ring-red-200 outline-none transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">聯絡電話 *</label>
                  <input required type="tel" disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-stone-50 border-none focus:ring-2 focus:ring-red-200 outline-none transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">FB 名稱 (選填)</label>
                  <input disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-stone-50 border-none focus:ring-2 focus:ring-red-200 outline-none transition-all" value={formData.fbName} onChange={e => setFormData({...formData, fbName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Line 名稱 (選填)</label>
                  <input disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-stone-50 border-none focus:ring-2 focus:ring-red-200 outline-none transition-all" value={formData.lineName} onChange={e => setFormData({...formData, lineName: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Step 2: 選擇品項 */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-900 text-white rounded-xl flex items-center justify-center font-bold">02</div>
                <h2 className="text-2xl font-serif-tc font-bold text-stone-900">選擇品項</h2>
              </div>
              <div className="space-y-12">
                {groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-red-900">
                        <div className="p-2 bg-red-50 rounded-lg">{group.icon}</div>
                        <h3 className="font-bold tracking-widest text-sm uppercase">{group.name}</h3>
                      </div>
                      {group.note && (
                        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-red-800 bg-red-50 px-3 py-1 rounded-full animate-fade-in">
                          <Info size={12} />
                          {group.note}
                        </div>
                      )}
                    </div>
                    {group.note && (
                      <div className="sm:hidden flex items-center gap-1.5 text-[10px] font-bold text-red-800 bg-red-50 px-3 py-2 rounded-xl mb-4">
                        <Info size={12} />
                        {group.note}
                      </div>
                    )}
                    <div className="grid grid-cols-1 gap-3">
                      {group.ids.map(id => {
                        const product = PRODUCTS.find(p => p.id === id);
                        if (!product) return null;
                        const isSelected = formData.products[id] > 0;
                        return (
                          <div key={id} className={`flex flex-col p-5 rounded-2xl transition-all border ${isSelected ? 'bg-orange-50 border-orange-200' : 'bg-stone-50/50 border-transparent'}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <img src={product.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
                                <div>
                                  <p className="font-bold text-stone-900 text-sm">{product.name}</p>
                                  <p className="text-[10px] text-stone-400 mt-0.5">${product.price} / {product.unit}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-end gap-3">
                                <button type="button" disabled={isSubmitting} onClick={() => handleProductChange(id, -1)} className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center"> - </button>
                                <div className="flex items-baseline justify-center gap-1 min-w-[70px]">
                                  <span className="text-lg font-serif-tc font-bold">{formData.products[id]}</span>
                                  <span className="text-[10px] text-stone-500">{product.unit}</span>
                                </div>
                                <button type="button" disabled={isSubmitting} onClick={() => handleProductChange(id, 1)} className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center"> + </button>
                              </div>
                            </div>
                            {id === 'special' && isSelected && (
                              <div className="mt-4 pt-4 border-t border-orange-200 animate-fade-up">
                                <input required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl bg-white border border-orange-100 text-sm" placeholder="請描述您的特製需求..." value={formData.specialNote} onChange={e => setFormData({...formData, specialNote: e.target.value})} />
                              </div>
                            )}
                            {id === 'fragrantChili' && isSelected && (
                              <div className="mt-4 pt-4 border-t border-orange-200 flex gap-2">
                                {['小辣', '大辣', '特辣'].map(lvl => (
                                  <button key={lvl} type="button" onClick={() => setFormData({...formData, chiliSpicyLevel: lvl})} className={`flex-1 py-2 rounded-xl text-xs font-bold ${formData.chiliSpicyLevel === lvl ? 'bg-red-800 text-white' : 'bg-white border border-stone-100'}`}>{lvl}</button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: 交貨與支付細節 */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-900 text-white rounded-xl flex items-center justify-center font-bold">03</div>
                <h2 className="text-2xl font-serif-tc font-bold text-stone-900">交貨詳細資訊</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'pickup', name: '現場自取', sub: '台中北屯熱河路', icon: <MapPin size={24} /> },
                  { id: 'shipping', name: '宅配', sub: '黑貓配送', icon: <Truck size={24} /> },
                  { id: 'cvs', name: '超取', sub: '7-11/全家', icon: <Store size={24} /> }
                ].map(method => (
                  <div key={method.id} onClick={() => !isSubmitting && setFormData({...formData, deliveryMethod: method.id as any})} className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all flex flex-col items-center gap-2 ${formData.deliveryMethod === method.id ? 'bg-orange-50 border-red-800' : 'bg-stone-50 border-transparent hover:border-stone-200'}`}>
                    <div className={formData.deliveryMethod === method.id ? 'text-red-800' : 'text-stone-300'}>{method.icon}</div>
                    <div className="text-center">
                      <p className="font-bold text-stone-900">{method.name}</p>
                      <p className="text-[10px] text-stone-400 mt-0.5">{method.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 space-y-8 animate-fade-in">
                {formData.deliveryMethod === 'pickup' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">預計取貨日期時間 *</label>
                      <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">1/28 起可取</span>
                    </div>
                    <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-red-200 outline-none" placeholder="例如: 1/28 下午 2 點" value={formData.pickupTime} onChange={e => setFormData({...formData, pickupTime: e.target.value})} />
                    <p className="text-[11px] text-stone-500 ml-1 flex items-center gap-1"><MapPin size={12} /> 地點：台中市北屯區熱河路 (詳細地址於下單後 LINE 告知)</p>
                  </div>
                )}

                {formData.deliveryMethod === 'shipping' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">收件人姓名 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" value={formData.receiverName} onChange={e => setFormData({...formData, receiverName: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">收件人電話 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" value={formData.receiverPhone} onChange={e => setFormData({...formData, receiverPhone: e.target.value})} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">預計寄出日期 *</label>
                        <span className="bg-red-700 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">※預計1/31、2/7日寄出</span>
                      </div>
                      <div className="flex gap-4">
                        {['1/31', '2/7'].map(date => (
                          <button key={date} type="button" onClick={() => setFormData({...formData, shipDate: date})} className={`flex-1 py-4 rounded-xl font-bold transition-all ${formData.shipDate === date ? 'bg-red-800 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-100'}`}>
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">希望送達時段 *</label>
                      <div className="flex gap-4">
                        {['上午', '下午'].map(slot => (
                          <button key={slot} type="button" onClick={() => setFormData({...formData, deliveryTimeSlot: slot})} className={`flex-1 py-4 rounded-xl font-bold transition-all ${formData.deliveryTimeSlot === slot ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-100'}`}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">收件地址 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" placeholder="請填寫完整地址" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                    </div>
                  </div>
                )}

                {formData.deliveryMethod === 'cvs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">取件人姓名 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" value={formData.receiverName} onChange={e => setFormData({...formData, receiverName: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">取件人手機 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" value={formData.receiverPhone} onChange={e => setFormData({...formData, receiverPhone: e.target.value})} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">預計寄出日期 *</label>
                        <span className="bg-red-700 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">※預計1/31、2/7日寄出</span>
                      </div>
                      <div className="flex gap-4">
                        {['1/31', '2/7'].map(date => (
                          <button key={date} type="button" onClick={() => setFormData({...formData, shipDate: date})} className={`flex-1 py-4 rounded-xl font-bold transition-all ${formData.shipDate === date ? 'bg-red-800 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-100'}`}>
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">希望送達時段 *</label>
                      <div className="flex gap-4">
                        {['上午', '下午'].map(slot => (
                          <button key={slot} type="button" onClick={() => setFormData({...formData, deliveryTimeSlot: slot})} className={`flex-1 py-4 rounded-xl font-bold transition-all ${formData.deliveryTimeSlot === slot ? 'bg-stone-900 text-white shadow-lg' : 'bg-white text-stone-600 border border-stone-100'}`}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">取件門市名稱 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" placeholder="例如: 鑫熱河門市" value={formData.cvsStoreName} onChange={e => setFormData({...formData, cvsStoreName: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">超商名稱/代碼 *</label>
                      <input required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white border-none shadow-sm" placeholder="例如: 7-11 / 188888" value={formData.cvsBrandInfo} onChange={e => setFormData({...formData, cvsBrandInfo: e.target.value})} />
                    </div>
                  </div>
                )}

                {/* 僅在宅配 (shipping) 顯示年節提醒 */}
                {formData.deliveryMethod === 'shipping' && (
                  <div className="pt-6 border-t border-stone-200">
                    <div className="flex gap-3 bg-red-50 p-6 rounded-2xl border border-red-100">
                      <Info size={20} className="text-red-800 shrink-0 mt-1" />
                      <p className="text-sm text-red-900 leading-relaxed font-bold">
                        ※ 由於年節數量多，未能保證期限內送達，請務必確保有人收貨，以維持食品新鮮。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 結算金額摘要 */}
            {totalPrice > 0 && (
              <div className="bg-red-800/5 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-red-800/10">
                <div className="flex items-center gap-4">
                  <div className="bg-red-800 text-white p-4 rounded-2xl shadow-lg shadow-red-800/20"><ShoppingBag size={24} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-400">預估訂購總額</h4>
                    <p className="text-[10px] text-stone-500">( 未含運費，最終依 LINE 確認為準 )</p>
                  </div>
                </div>
                <div className="text-4xl font-serif-tc font-bold text-red-800">NT$ {totalPrice.toLocaleString()}</div>
              </div>
            )}

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">備註需求</label>
              <textarea disabled={isSubmitting} className="w-full px-5 py-4 rounded-2xl bg-stone-50 border-none h-32 resize-none transition-all focus:ring-2 focus:ring-red-200" placeholder="還有什麼想告訴廖媽媽的嗎？" value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})}></textarea>
            </div>
          </div>

          {/* Footer & Submit */}
          <div className="bg-stone-950 p-10 sm:p-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-5">
               <div className="bg-white/5 p-4 rounded-2xl border border-white/10"><ShieldCheck size={28} className="text-green-500" /></div>
               <div className="space-y-1">
                  <p className="font-bold text-sm tracking-wider">個資加密保護</p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest">Secure Data Link Activated</p>
               </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="group bg-red-800 hover:bg-red-700 text-white px-16 py-6 rounded-full font-bold text-xl transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(153,27,27,0.5)] active:scale-95 disabled:opacity-50">
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={24} /> 傳輸中...</>
              ) : (
                <>送出加密預約 <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
