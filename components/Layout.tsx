
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 品牌 Logo 圖片連結 (從 Google Drive 轉換為直接顯示連結)
  const LOGO_URL = "https://lh3.googleusercontent.com/d/1abmGIkf8hvGR3ioFlZX0hBUvyvB57BTU";
  // LINE 聯絡連結
  const LINE_URL = "https://line.me/ti/p/w26fyc_u5a";
  // FB 連結 (廖媽媽香腸 官方社團)
  const FB_URL = "https://www.facebook.com/groups/599447773459974";
  // 電話 (僅作顯示用)
  const PHONE_NUMBER = "0922256125";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 當路徑改變時自動關閉選單
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm lg:bg-transparent lg:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="group-hover:rotate-12 transition-transform w-12 h-12 flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt="廖媽媽香腸 Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif-tc font-extrabold text-red-900 tracking-tighter">廖媽媽香腸</span>
                <span className="text-[10px] text-stone-500 tracking-[0.3em] font-medium -mt-1 hidden sm:block uppercase">Liao Ma Handmade</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-widest transition-all relative py-2 ${
                    location.pathname === link.path 
                      ? 'text-red-800' 
                      : 'text-stone-600 hover:text-red-800'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-800 rounded-full"></span>
                  )}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-red-800 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-red-900 transition-colors"
              >
                我要訂購
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none transition-colors text-stone-900 hover:text-red-800"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white fixed inset-0 z-[60] animate-fade-in flex flex-col p-8 pt-24 h-screen overflow-y-auto">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-4 p-3 text-stone-900 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-4 px-6 py-5 rounded-[2rem] text-2xl font-serif-tc font-bold transition-all ${
                    location.pathname === link.path 
                      ? 'bg-red-50 text-red-800 shadow-sm' 
                      : 'text-stone-900 active:bg-stone-50'
                  }`}
                >
                  <span className={location.pathname === link.path ? 'text-red-800' : 'text-stone-300'}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-stone-100 space-y-6 text-center">
              <div className="space-y-2">
                <p className="text-stone-400 text-xs tracking-widest uppercase font-bold text-center">手作溫度 ・ 傳承美味</p>
                <div className="flex justify-center space-x-4 pt-4">
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-stone-900 text-white flex items-center justify-center font-bold text-sm shadow-md transition-transform active:scale-95">FB</a>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-[#06C755] text-white flex items-center justify-center font-bold text-sm shadow-md transition-transform active:scale-95">LINE</a>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="w-full bg-red-800 text-white py-5 rounded-[2rem] text-center font-bold text-lg shadow-xl block"
              >
                立即填寫預約單
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                  <img src={LOGO_URL} alt="廖媽媽香腸 Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-serif-tc font-bold tracking-wider">廖媽媽香腸</span>
              </Link>
              <p className="text-sm leading-relaxed text-stone-500">
                堅持手工，是對美味的尊重。<br/>
                每一條香腸都蘊含著母親守護家人的心。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">品牌資訊</h4>
              <ul className="space-y-3 text-sm">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-red-500 transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">聯絡專區</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>客服 LINE ID：<span className="text-stone-300">{PHONE_NUMBER}</span> (電話搜尋)</li>
                <li>聯繫電話：<span className="font-bold text-stone-300">{PHONE_NUMBER}</span></li>
                <li>自取地點：台中市北屯區熱河路（詳細地址接單後通知）</li>
                <li>營業時間：依預約排單製作</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">關注我們</h4>
              <div className="flex space-x-4">
                 <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-red-800 hover:border-red-800 transition-all shadow-sm text-xs font-bold">FB</a>
                 <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-green-700 hover:border-green-700 transition-all shadow-sm text-xs font-bold">LINE</a>
              </div>
              <p className="mt-6 text-[11px] text-stone-600">
                * 本網站僅供訂單預約使用，正式訂單以 LINE 確認為準。
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-stone-900 flex flex-col sm:flex-row justify-between items-center text-[11px] opacity-40">
            <p>&copy; {new Date().getFullYear()} 廖媽媽香腸 LIAO MA SAUSAGE. All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0 font-serif-tc">職人手作 ・ 溫暖傳承</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
