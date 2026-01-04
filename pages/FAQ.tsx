
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-red-700 transition-colors focus:outline-none"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        {isOpen ? <Minus size={20} className="flex-shrink-0" /> : <Plus size={20} className="flex-shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-stone-600 leading-relaxed bg-orange-50/50 p-4 rounded-xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const LINE_URL = "https://line.me/ti/p/w26fyc_u5a";
  
  const faqs = [
    {
      question: "香腸是現貨嗎？",
      answer: "不是喔，我們為了保證新鮮，所有香腸都是「接單後才排單製作」，所以沒有現貨囤放。廖媽媽產量有限，還請耐心等候。"
    },
    {
      question: "下單後大約多久可以拿到？",
      answer: "出貨時間會依當時的訂單量而定。通常在確認訂單後，我們會在確認回覆中告訴您預計的製作與寄送日期。"
    },
    {
      question: "可以客製化口味嗎？（例如不加糖或增加辣度）",
      answer: "由於我們的調味比例是廖媽媽多年研發的最佳口味，少量訂購通常維持固定比例以維持品質。但若是大量訂單 or 特定熟客批次，部分口味可以微調，請先聯絡我們洽詢。"
    },
    {
      question: "宅配費用如何計算？",
      answer: "我們統一使用黑貓冷凍宅配，運費依箱子尺寸實支實付（通常為 165~295 元）。目前單筆訂購金額超過 5000 元即享免運優惠，詳情請看確認回覆。"
    },
    {
      question: "保存期限多久？",
      answer: "因為沒有添加防腐劑，建議收到後立即存入冷凍。冷凍可保存長達 6 個月，但為了確保最佳風味與肉質口感，廖媽媽強烈建議在 3 個月內食用完畢（嚐鮮期）喔！"
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-stone-50 border-b border-stone-200 py-20 mb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif-tc font-bold text-stone-900 mb-4">常見問題</h1>
          <p className="text-stone-600">整理了一些大家常問的問題，希望能幫您更了解廖媽媽香腸。</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 bg-red-50 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-red-900 mb-2">還有其他疑問嗎？</h3>
          <p className="text-red-700/80 mb-6">歡迎直接在訂購表單中備註詢問，或透過 LINE 與我們聯繫。</p>
          <div className="flex justify-center">
            <a 
              href={LINE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#06C755] text-white px-12 py-4 rounded-xl hover:bg-[#05b14c] transition-colors shadow-lg active:scale-95 font-bold flex items-center justify-center gap-2"
            >
              立即聯絡 LINE 專人
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
