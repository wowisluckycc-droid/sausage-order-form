
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ChefHat, Timer, HandMetal, Users, Star, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK_DC68Z_WJg07Hk25PbSusxiPAnhIwkvIes-Ns4rhsfPc-1ajxy3zmWosOxTM4Np7T_TEbLmMOk3OI86mvK-LJUkxMoCbrnTJtMd48xSgNeaXsuaX4DyTtzcKXhNI9Vo?key=Ljype5S2ZmW1BFYiil11PQ" 
            alt="廖媽媽招牌手工香腸"
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
        
        {/* 文字容器位置微調：維持中間偏下位置 */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-up mt-12 sm:mt-16">
          <div className="mb-6 inline-block bg-red-700 text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full tracking-widest uppercase shadow-xl ring-1 ring-white/30">
            手工製作 ・ 接單生產 ・ 無亞硝酸 ・ 無防腐劑
          </div>
          <h1 className="text-white font-serif-tc text-5xl sm:text-8xl font-bold mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            廖媽媽香腸
          </h1>
          <p className="text-white text-xl sm:text-2xl font-light mb-12 drop-shadow-lg max-w-2xl mx-auto opacity-95 tracking-[0.2em] font-serif-tc">
            敢給家人吃的好味道
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-red-700 hover:bg-red-800 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(185,28,28,0.5)] inline-flex items-center justify-center group"
            >
              立即預約訂購
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/products" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white px-12 py-5 rounded-full text-lg font-medium transition-all"
            >
              瀏覽產品目錄
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 mb-16 lg:mb-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1544333346-64741744d03d?q=80&w=800&auto=format&fit=crop" 
              alt="新鮮肉品處理"
              className="relative rounded-[2.5rem] shadow-2xl z-10"
            />
            {/* 鄰里口碑 No.1 Badge */}
            <div className="absolute -bottom-16 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-orange-50 hover-lift">
               <div className="flex items-center gap-3 text-red-800 mb-1">
                 <Star size={18} fill="currentColor" />
                 <Star size={18} fill="currentColor" />
                 <Star size={18} fill="currentColor" />
                 <Star size={18} fill="currentColor" />
                 <Star size={18} fill="currentColor" />
               </div>
               <p className="text-stone-900 font-serif-tc font-bold">鄰里口碑 No.1</p>
               <p className="text-stone-500 text-xs mt-1">「最推薦的高粱香腸！」</p>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-red-700 font-bold tracking-widest text-sm uppercase">
              <span className="w-8 h-px bg-red-700"></span>
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-tc font-bold text-stone-900 leading-snug">
              我們不只是做香腸<br/>是在傳遞一份<span className="text-red-800">家的溫度</span>
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                「廖媽媽香腸」源於自家餐桌。為了讓孩子吃到最健康、最美味的香腸，我們在廚房裡反覆測試肉質比例與調味。
              </p>
              <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl border-l-4 border-red-700">
                <Quote className="text-red-200 shrink-0" size={32} />
                <p className="italic text-stone-700">
                  「堅持選用合格溫體豬後腿肉，接單後才開始揉捏、灌製，確保每一口送到您嘴裡的都是最巔峰的新鮮狀態。」
                </p>
              </div>
              <p>
                不添加化學防腐劑、不使用廉價肉源。這是我們對每一位顧客的承諾。
              </p>
            </div>
            <div className="pt-4">
              <Link to="/story" className="inline-flex items-center text-red-800 font-bold hover:underline underline-offset-8 transition-all">
                了解完整的廖媽媽故事 <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif-tc font-bold text-stone-900 mb-4">職人的四大堅持</h2>
            <p className="text-stone-500">從選材到包裝，每一道工序都由廖媽媽親自把關</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '接單生產', desc: '絕不囤貨，確保每一份產品都維持最高鮮度。', icon: <Timer className="text-red-700" size={32} /> },
              { title: '黃金肉質', desc: '僅選用台灣溫體豬後腿肉，口感紮實且富有彈性。', icon: <ChefHat className="text-red-700" size={32} /> },
              { title: '古法手作', desc: '廖媽媽獨門比例調味，不假手機器的大量生產。', icon: <HandMetal className="text-red-700" size={32} /> },
              { title: '純粹安心', desc: '堅持無添加防腐劑，給家人吃什麼就賣什麼。', icon: <CheckCircle2 className="text-red-700" size={32} /> },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover-lift border border-stone-100 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-red-900 py-20 px-8 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20">
             <img src="https://www.transparenttextures.com/patterns/p6.png" className="w-full h-full object-repeat" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif-tc font-bold mb-8">今天就預約那份經典滋味</h2>
            <p className="text-red-100 text-lg sm:text-xl mb-12 opacity-80 leading-relaxed font-light">
              由於堅持手工製作，訂單將依填寫順序排單生產。<br/>
              立即發送出預約表格，訂購成功我們將使用LINE與FB回覆您。
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-red-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-orange-50 transition-all shadow-2xl inline-block hover:scale-105"
            >
              前往訂購表單
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
