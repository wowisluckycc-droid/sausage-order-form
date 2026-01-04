
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, Star, Sparkles, Loader2, X, ChefHat, Leaf } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const fetchAiSuggestion = async (product: typeof PRODUCTS[0]) => {
    setIsLoadingAi(true);
    setAiSuggestion('');
    setSelectedProduct(product);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // 針對特定產品增加過濾與引導指令
      let specificInstructions = "";
      
      if (product.name.includes('鑫鑫腸')) {
        specificInstructions = "特別注意：關於鑫鑫腸的吃法，請絕對「不要」推薦『便當小章魚』。請推薦如『酥皮起司捲』或『滑蛋炒鑫鑫腸』。";
      } else if (product.name.includes('肋排')) {
        specificInstructions = "特別注意：關於肋排的吃法，因為這款產品是「帶骨」的，請絕對「不要」推薦『菜包肉』或『生菜包裹』等不便食用的方式。請推薦如『蜜汁氣炸』、『椒鹽香酥』或『蒜香慢燉』等能發揮帶骨肉香的溫馨家常吃法。";
      } else if (product.name.includes('筋骨肉')) {
        specificInstructions = "特別注意：關於筋骨肉的吃法，這款部位富含膠質與咬勁，請務必優先推薦『煲湯』相關建議，例如『大骨燉湯』、『藥膳筋骨肉』，強調湯頭的鮮美與肉質的Q彈口感。";
      } else if (product.name.includes('肉粽')) {
        specificInstructions = "特別注意：關於肉粽的吃法，請絕對「不要」推薦『微波加熱』（米粒會變硬）、『切片』或『直接沾甜辣醬』。請推薦如『酥香金黃粽巴』（將肉粽拆封後整顆放入平底鍋，用鍋鏟輕輕壓平慢煎，直到兩面呈現如鍋巴般的酥脆焦香）、『廖媽媽私房粽粥』（將肉粽拆開加入高湯煮成濃郁米粥）或『古法大火炊蒸』，強調米粒的Q彈與食材交織的氣氣。";
      } else if (product.id === 'giftBox') {
        specificInstructions = "特別注意：這是一個『肉品保冷禮盒』。請推薦三種肉品熱門送禮組合，強調搭配專屬提袋送禮很大方且可以自由組合。組合一：招牌雙享（高粱+原味）；組合二：豐富饗宴（香腸+鹹肉+腿排）；組合三：頂級酒香（專攻酒香鹹肉）。";
      } else if (product.id.includes('teaSet')) {
        specificInstructions = "特別注意：這是一個『高品質茶葉禮盒（15包入）』。請推薦三種適合『送禮給重要對象』的理由。強調15包的份量適合每日一茶的健康儀式、送長輩大方體面、以及茶葉能如何完美解掉年節肉品的油膩。強調這是選用食品級天然環保玉米纖維茶包。";
      } else if (product.id.includes('teaBag')) {
        specificInstructions = "特別注意：這是一款高品質茶飲單包裝。請推薦三種適合與廖媽媽肉品搭配的喝法：第一種『冷泡解膩法』（香腸佐茶）；第二種『熱泡暖胃法』（鹹肉點心）；第三種『茶湯入菜法』（例如茶香滷味）。強調採用食品級環保玉米纖維茶包(PLA)，耐熱安全。";
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你現在是台灣手工肉品職人「廖媽媽」。請針對「${product.name}」這項產品提供三種富含溫度的家庭料理建議、吃法或送禮組合建議。
${specificInstructions}
請用溫暖、親切、像媽媽一樣的口吻，每種建議不超過60字。
產品描述：${product.description}`,
      });
      setAiSuggestion(response.text || '哎呀，廖媽媽現在忙著灌香腸，稍後再試試看喔！');
    } catch (error) {
      console.error('AI Error:', error);
      setAiSuggestion('廖媽媽正在廚房忙碌中，建議您簡單乾煎最能吃到原味喔！');
    } finally {
      setIsLoadingAi(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Header Section */}
      <div className="bg-stone-100 py-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <img src="https://www.transparenttextures.com/patterns/p6.png" className="w-full h-full object-repeat" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-serif-tc font-bold text-stone-900 mb-6 tracking-tight">職人選品</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            我們堅持不開發過多繁雜的口味，專注於把每一道經典研發到極致。<br/>
            新鮮採購、當日調味，是我們五十年來不變的律法。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-red-900 uppercase tracking-widest shadow-lg flex items-center gap-2">
                    {(product.id.includes('tea')) ? <Leaf size={12} className="text-green-600" /> : <Star size={12} fill="currentColor" />}
                    {(product.id.includes('tea')) ? '玉米纖維茶包' : 'Handmade'}
                  </div>
                  {['kaoliang', 'original'].includes(product.id) && (
                    <div className="bg-red-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      人氣熱銷
                    </div>
                  )}
                  {(product.id.includes('teaSet') || product.id === 'giftBox') && (
                    <div className="bg-stone-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      送禮首選
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-serif-tc font-bold text-stone-900 group-hover:text-red-800 transition-colors">{product.name}</h3>
                    <div className="text-right">
                      <p className="text-red-800 font-serif-tc font-bold text-2xl">${product.price}</p>
                      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mt-1">/{product.unit}</p>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 h-15">{product.description}</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, fidx) => (
                      <span key={fidx} className="bg-stone-50 text-stone-600 text-[11px] px-3 py-1 rounded-lg border border-stone-100 font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl">
                    <Info className="text-stone-400 shrink-0" size={14} />
                    <span>{product.storage}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => fetchAiSuggestion(product)}
                    className="w-full group/ai flex items-center justify-center gap-2 bg-orange-50 text-red-800 py-3 rounded-xl text-sm font-bold border border-orange-100 hover:bg-red-800 hover:text-white transition-all active:scale-95"
                  >
                    <Sparkles size={16} className="group-hover/ai:animate-pulse" />
                    {(product.id.includes('tea') || product.id === 'giftBox') ? '廖媽媽 AI 建議搭配' : '廖媽媽 AI 建議吃法'}
                  </button>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-stone-900 text-white text-center py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg active:scale-95"
                  >
                    {product.id === 'special' ? '洽詢當週口味' : '立即預約訂購'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestion Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 animate-fade-up max-h-[90vh] flex flex-col">
            <div className="p-8 sm:p-12 overflow-y-auto">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-800 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20 shrink-0">
                  <ChefHat size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                    {(selectedProduct.id.includes('tea') || selectedProduct.id === 'giftBox') ? '廖媽媽私房搭配' : '廖媽媽私房建議'}
                  </h4>
                  <p className="text-xl sm:text-2xl font-serif-tc font-bold text-stone-900">{selectedProduct.name}</p>
                </div>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 min-h-[200px] overflow-y-auto max-h-[400px]">
                {isLoadingAi ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
                    <Loader2 className="animate-spin text-red-800" size={32} />
                    <p className="text-stone-500 text-sm font-medium animate-pulse">廖媽媽正在為您想建議...</p>
                  </div>
                ) : (
                  <div className="prose prose-stone pt-8 pb-4">
                    <p className="text-stone-700 leading-relaxed whitespace-pre-line font-serif-tc text-sm sm:text-base italic">
                      「{aiSuggestion}」
                    </p>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-full mt-8 bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-red-800 transition-all shadow-lg active:scale-95"
              >
                我知道了，謝謝廖媽媽！
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
