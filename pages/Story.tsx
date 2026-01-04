
import React from 'react';
import { Quote, Heart, ShieldCheck, ThumbsUp } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="relative h-[50vh] min-h-[400px] mb-20">
        <img 
          src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeY5dYgQzHeVJxW_BEjqeFX8vVhILwPdCUkPyh-wsbTjB-cI7AICO07x8v3hpF8ZbjItIwVLQ4dAeSc31pnSxF2cwlL-uXsBX1nWBxLvctP_v07NozDsvnzsMfVwq6lixk?key=Ljype5S2ZmW1BFYiil11PQ" 
          alt="職人精神"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px] flex items-center justify-center">
          <div className="text-center animate-fade-up">
            <h1 className="text-white text-5xl sm:text-7xl font-serif-tc font-bold mb-4 drop-shadow-lg">品牌故事</h1>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
            <p className="text-white/90 mt-6 tracking-[0.3em] font-light uppercase text-sm">Our Journey & Philosophy</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-serif-tc font-bold text-red-900 leading-tight mb-8">
              「我們不只是賣香腸，<br/>是在守住一個味道。」
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed italic border-l-4 border-red-100 pl-6">
              這一切，都始於廖媽媽那張飄香五十年的家常餐桌。
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-lg leading-loose">
            <p>
              一開始只是做給家人吃，我們家的小孩、親戚總是喜歡那種在自家餐桌上冒著熱氣、咬開後鮮嫩多汁的滋味。
              那是市售大量生產的香腸無法取代的，因為每一條裡頭，都藏著媽媽對家人的細膩心思。
            </p>
            <p>
              而後親戚朋友們主動提議訂購且漸漸推廣開來。
              這份「廖媽媽香腸」也就這樣在口碑相傳之下，慢慢地誕生了。
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-orange-50/50 p-10 rounded-[2rem] text-center space-y-4 hover:bg-orange-50 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-red-700">
              <Heart fill="currentColor" />
            </div>
            <h3 className="font-bold text-xl text-stone-900">初心</h3>
            <p className="text-stone-500 text-sm">把每一位客人都當作家人對待，只給最好的。</p>
          </div>
          <div className="bg-orange-50/50 p-10 rounded-[2rem] text-center space-y-4 hover:bg-orange-50 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-red-700">
              <ShieldCheck fill="currentColor" />
            </div>
            <h3 className="font-bold text-xl text-stone-900">品質</h3>
            <p className="text-stone-500 text-sm">嚴選溫體豬與天然腸衣，絕不妥協。</p>
          </div>
          <div className="bg-orange-50/50 p-10 rounded-[2rem] text-center space-y-4 hover:bg-orange-50 transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-red-700">
              <ThumbsUp fill="currentColor" />
            </div>
            <h3 className="font-bold text-xl text-stone-900">承諾</h3>
            <p className="text-stone-500 text-sm">接單生產，保證送到您手中是最鮮的滋味。</p>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="relative bg-red-900 rounded-[3rem] p-12 sm:p-20 text-center text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Quote size={300} className="absolute -top-20 -left-20" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <p className="text-2xl sm:text-3xl font-serif-tc leading-relaxed">
              「我們不願意為了增加產量而改用廉價原料，也不願意為了拼現貨而降低熟成的耐心。」
            </p>
            <div className="w-12 h-px bg-white/30 mx-auto"></div>
            <p className="font-bold tracking-widest text-lg">
              寧願少接單，也不隨便做。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;