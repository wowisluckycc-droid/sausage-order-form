
import React from 'react';
import { ClipboardList, MessageCircle, Wallet, ChefHat, Truck, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ordering: React.FC = () => {
  const steps = [
    { 
      icon: <ClipboardList size={32} />, 
      title: '填寫線上表單', 
      desc: '瀏覽產品目錄後，點選「我要訂購」填寫品項、數量與基本聯絡資料。',
      tip: '廖媽媽小提醒：產品皆為手工現做，建議提早預約喔！'
    },
    { 
      icon: <MessageCircle size={32} />, 
      title: '專人聯繫確認', 
      desc: '廖媽媽收到表單後，會透過 LINE 或 FB 私訊您，確認品項與預計排單日期。',
      tip: '通常於 24 小時內會完成確認。'
    },
    { 
      icon: <ChefHat size={32} />, 
      title: '接單新鮮製作', 
      desc: '訂單確認後，我們會依序安排製作。我們堅持「不囤貨」，只在出貨前新鮮灌製。',
      tip: '這就是廖媽媽香腸美味的關鍵！'
    },
    { 
      icon: <Wallet size={32} />, 
      title: '完成付款', 
      desc: '宅配訂單請先完成匯款；自取訂單可選擇預先匯款或現場面交付現。',
      tip: '匯款帳號將於 LINE 確認訂單時提供。'
    },
    { 
      icon: <Truck size={32} />, 
      title: '出貨與送達', 
      desc: '製作完成後將立即通知。您可以選擇到北屯取貨，或由黑貓冷凍宅配到府。',
      tip: '冷凍宅配通常於寄出後隔日送達。'
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-stone-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://www.transparenttextures.com/patterns/p6.png" className="w-full h-full object-repeat" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="text-5xl font-serif-tc font-bold mb-6 tracking-tight">訂購流程</h1>
          <p className="text-stone-400 text-lg font-light leading-relaxed">
            簡單五個步驟，將傳承五十年的手作溫度分享給您。<br/>
            我們用心準備，只為讓您與家人吃得安心。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row items-center md:items-stretch gap-0 bg-white rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-full md:w-48 bg-stone-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-stone-100 transition-colors group-hover:bg-orange-50">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-800 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-[10px] font-black text-stone-300 uppercase tracking-[0.3em]">Step 0{idx + 1}</span>
              </div>
              <div className="flex-grow p-8 sm:p-12">
                <h3 className="text-2xl font-serif-tc font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">{step.desc}</p>
                <div className="inline-flex items-start gap-2 bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
                  <div className="p-1"><Info size={14} className="text-red-800 shrink-0 mt-0.5" /></div>
                  <p className="text-xs text-stone-500 font-medium">{step.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping & Payment Details */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-800 text-white rounded-2xl shadow-lg">
                <Wallet size={24} />
              </div>
              <h2 className="text-2xl font-serif-tc font-bold text-stone-900">支付細節</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-stone-800">轉帳匯款</p>
                  <p className="text-sm text-stone-500 mt-1">確認訂單後提供銀行帳號，請於製作前完成匯款。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-stone-800">自取面交</p>
                  <p className="text-sm text-stone-500 mt-1">預約自取之客戶，可選擇預先轉帳或當面支付現金。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-stone-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-800 text-white rounded-2xl shadow-lg">
                <Truck size={24} />
              </div>
              <h2 className="text-2xl font-serif-tc font-bold text-stone-900">取貨與運送</h2>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-stone-800">黑貓冷凍宅配</p>
                  <p className="text-sm text-stone-500 mt-1">全程低溫配送，運費依黑貓官方定價實支實付。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-stone-800">冷凍店到店 (超商取貨)</p>
                  <p className="text-sm text-stone-500 mt-1">提供 7-11、全家冷凍超取服務。運費依超商規範收取。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-stone-800">台中現場自取</p>
                  <p className="text-sm text-stone-500 mt-1">地點：台中市北屯區熱河路。詳細地址於確認訂單後提供。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-stone-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif-tc font-bold mb-6">準備好品嚐這份經典了嗎？</h2>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-red-800 hover:bg-red-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                立即填寫預約表單
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
