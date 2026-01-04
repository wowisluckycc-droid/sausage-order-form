
import React from 'react';
import { Home, BookOpen, Utensils, ClipboardList, HelpCircle, MessageSquare } from 'lucide-react';
import { Product } from './types';

export const NAV_LINKS = [
  { name: '首頁', path: '/', icon: <Home size={20} /> },
  { name: '品牌故事', path: '/story', icon: <BookOpen size={20} /> },
  { name: '產品介紹', path: '/products', icon: <Utensils size={20} /> },
  { name: '如何訂購', path: '/ordering', icon: <ClipboardList size={20} /> },
  { name: '常見問題', path: '/faq', icon: <HelpCircle size={20} /> },
  { name: '我要訂購', path: '/contact', icon: <MessageSquare size={20} /> },
];

export const PRODUCTS: Product[] = [
  {
    id: 'kaoliang',
    name: '高粱手工香腸',
    unit: '斤',
    price: 290,
    description: '選用優質高粱酒入味，酒香清雅不刺鼻，經過低溫熟成後，肉質更顯甘甜醇厚，是廖媽媽最受歡迎的招牌口味。',
    features: ['特級高粱入味', '酒香層次豐富', '老饕口碑推薦'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK_DC68Z_WJg07Hk25PbSusxiPAnhIwkvIes-Ns4rhsfPc-1ajxy3zmWosOxTM4Np7T_TEbLmMOk3OI86mvK-LJUkxMoCbrnTJtMd48xSgNeaXsuaX4DyTtzcKXhNI9Vo?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'original',
    name: '原味手工香腸',
    unit: '斤',
    price: 270,
    description: '經典口味，肥瘦比例平衡，鎖住肉汁原始甘甜。每一口都能感受到豬肉的鮮甜與淡淡的中藥清香。',
    features: ['經典金牌比例', '台灣在地溫體豬', '適合烤、煎、氣炸'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    tip: '食用提醒：請完全加熱，建議搭配生大蒜風味更佳',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'spicy',
    name: '辣味手工香腸',
    unit: '斤',
    price: 290,
    description: '特別加入特選大紅袍花椒與秘製香料低溫醃漬，不同於嗆辣的刺激感，這款口味屬於溫和的小辣。淡淡的麻香完美誘發肉質鮮甜，讓不敢吃大辣的朋友也能享受微麻帶勁的層次滋味。',
    features: ['大紅袍花椒', '細膩小辣', '微麻香氣'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'garlic',
    name: '蒜味手工香腸',
    unit: '斤',
    price: 300,
    description: '加入大量新鮮手切大蒜，每一口都充滿濃郁辛香。大蒜與豬肉的黃金組合，是台灣最道地的家鄉味。',
    features: ['大量鮮切大蒜', '濃郁辛香', '經典台式風味'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCeMJLKfobYGcjmeSf_8q0x_tJiKNuSLS_oYBORIPu9ByFh0_HrpaiPTmazKIrhX1R7Wo-NJv0Sc11Z6W7qMeW-0HEF8v7A4aVxTvlRC6cPvPU9WVTO6h5YDKsVOiRRkk?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'leanOriginal',
    name: '瘦原味手工香腸',
    unit: '斤',
    price: 280,
    description: '針對不喜肥肉的客人研發，大幅降低肥脂比例，選用極品後腿瘦肉，口感紮實且富有嚼勁，肉香濃育。',
    features: ['極高瘦肉比例', '紮實不油膩', '低負擔首選'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'originalCocktail',
    name: '原味鑫鑫腸',
    unit: '斤',
    price: 320,
    description: '一口一個的小巧設計，孩子們的最愛。保留原味手工香腸的鮮甜，大小剛好適合便當或派對小點。',
    features: ['一口尺寸', 'Q彈多汁', '小孩餐桌必備'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'leanKaoliang',
    name: '瘦高粱手工香腸',
    unit: '斤',
    price: 300,
    description: '優質高粱酒香結合特選瘦肉，去除了肥肉的油潤，更加突顯酒香與肉質纖維的甘甜質感。',
    features: ['高粱香氣十足', '乾爽紮實', '低脂健康'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK_DC68Z_WJg07Hk25PbSusxiPAnhIwkvIes-Ns4rhsfPc-1ajxy3zmWosOxTM4Np7T_TEbLmMOk3OI86mvK-LJUkxMoCbrnTJtMd48xSgNeaXsuaX4DyTtzcKXhNI9Vo?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'sugarFreeLeanKaoliang',
    name: '無糖瘦高粱手工香腸',
    unit: '斤',
    price: 300,
    description: '專為生酮 or 控糖人士設計，無額外添加糖份，保留高粱酒的原味辛香與鮮肉鮮度，最純粹的肉食享受。',
    features: ['無糖添加', '高純瘦肉', '飲食管控友善'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK_DC68Z_WJg07Hk25PbSusxiPAnhIwkvIes-Ns4rhsfPc-1ajxy3zmWosOxTM4Np7T_TEbLmMOk3OI86mvK-LJUkxMoCbrnTJtMd48xSgNeaXsuaX4DyTtzcKXhNI9Vo?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'fattyKaoliang',
    name: '肥高粱手工香腸',
    unit: '斤',
    price: 300,
    description: '老饕最愛的油潤比例，肥肉分佈均勻，煎烤後脂香四溢，與高粱酒交織出令人難忘的滑順口感。',
    features: ['脂香滿溢', '口感滑潤', '配酒神器'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK_DC68Z_WJg07Hk25PbSusxiPAnhIwkvIes-Ns4rhsfPc-1ajxy3zmWosOxTM4Np7T_TEbLmMOk3OI86mvK-LJUkxMoCbrnTJtMd48xSgNeaXsuaX4DyTtzcKXhNI9Vo?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'sugarFreeSpicy',
    name: '無糖辣味手工香腸',
    unit: '斤',
    price: 300,
    description: '僅以鮮肉、花椒與特製辛香料調味，不添加糖份。這款無糖版本更能突顯花椒的細膩麻香與肉質原味，適合生酮 or 不喜甜味的朋友享受的小辣微麻風味。',
    features: ['無糖微麻', '花椒層次', '辛香小辣'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'garlicCocktailNoCinnamon',
    name: '無肉桂蒜味鑫鑫腸',
    unit: '斤',
    price: 350,
    description: '特殊去除肉桂配方，保留濃郁大蒜香氣，製成好入口的鑫鑫腸大小，是口感與香氣的完美結合。',
    features: ['無肉桂配方', '蒜香濃厚', '一口驚艷'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCeMJLKfobYGcjmeSf_8q0x_tJiKNuSLS_oYBORIPu9ByFh0_HrpaiPTmazKIrhX1R7Wo-NJv0Sc11Z6W7qMeW-0HEF8v7A4aVxTvlRC6cPvPU9WVTO6h5YDKsVOiRRkk?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'special',
    name: '隱藏版特製香腸 (其他要求)',
    unit: '斤',
    price: 300, // 基準特製價
    description: '依照熟客特定需求研發的限量美味。如果您有任何其他特殊比例 or 口味想法，請在此告知。',
    features: ['量身定做', '不同比例美味', '洽詢當週品項'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4-cB49h2Lrw9DJcxle2rVsR2yMhWfbrGEr83fICFDTEZO9xWM-ADK-_NYjMfoZ-tCOTy37UHkB_VbQOaFUS6wHTM_6AFAeVOAsfLEAJxjfOIr1ebceoaaKzt-sfYw71M?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'saltedPorkBelly',
    name: '酒香鹹肉 (三層)',
    unit: '半斤',
    price: 200,
    description: '精選三層五花肉，重本使用兩種高成本優質酒類與特製香料長達48小時醃漬，肥瘦相間層次分明，煎至酥脆後酒香層次更顯迷人。',
    features: ['特選三層肉', '雙酒黃金比例醃漬', '肥而不膩'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSGvXrtauRUcVwYcESlLT6iHoqop1ZMDQsaiIJ7Tx7YcRIcsCKULGPU-ESjhqsi-HmMh5kSYQYU-OWV0YrzgGlC1CY0dROYMh-_LHdztvP9tQVU8WgWMlifewrT1SvT5U?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'saltedPorkCollar',
    name: '酒香鹹肉 (梅花)',
    unit: '半斤',
    price: 200,
    description: '梅花肉質Ｑ彈不油膩，重本使用兩種高成本優質酒類與秘製香料入木三分。適合不愛肥肉的朋友，不論是下酒或是切片冷盤都極為合適。',
    features: ['Ｑ彈梅花肉', '雙酒熟成入味', '酒香回甘'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdetz0yd48_uG8gF-456TRmBdFMQx1Y9wlqJNUEDCEllektoI18fdlmmxRd98GJapIY7tss-zrboPx45QR877hV_2-g7cg9DIi9B6YgwRc3p_IqC0NLMMSr5lppHKzAR6I?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'chickenThigh',
    name: '四蔬雞腿排',
    unit: '包',
    price: 140,
    description: '嚴選去骨雞腿排，搭配西芹、甜椒、香菜、蒜頭等四種鮮蔬精華液醃漬，健康無添加，肉質極度鮮嫩。',
    features: ['純蔬果醃漬', '去骨便利食用', '低脂健康選擇'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeY5dYgQzHeVJxW_BEjqeFX8vVhILwPdCUkPyh-wsbTjB-cI7AICO07x8v3hpF8ZbjItIwVLQ4dAeSc31pnSxF2cwlL-uXsBX1nWBxLvctP_v07NozDsvnzsMfVwq6lixk?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'marinatedSlice',
    name: '醃肉片',
    unit: '斤',
    price: 260,
    description: '廖媽媽獨家配方醃漬，厚度適中，煎烤皆宜。完全吸附醬汁精華，是中秋烤肉或家庭便當的最佳主角。',
    features: ['萬用醃漬配方', '煎煮炒炸皆宜', '便當菜首選'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdi6hBNyOaUbTbALZ9tiRZppbrIlbwH406W2LDMvTUFSe-7zTKcciHLnLGgJcxp6CAq-us6NuoqjEZYttqJ3PU2Bo25B1tJ6Ubg-MrvZNt7_7UyXlMSqZ3sCgHQOySRRz4?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'lessMeatRibs',
    name: '少肉肋排',
    unit: '斤',
    price: 260,
    description: '肉質軟嫩帶骨香，經特製香料醃漬入味。骨邊肉質最為香甜，適合氣炸後金黃焦脆，口感清爽不油膩。',
    features: ['清爽帶骨香', '氣炸美味', '適合煮湯'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeV7xRQZqD18n7THDmnsVcRVFUMxxRjbb7lLSy2VYukZ35lwKsV-hr0axyrhFreTav9g85tZW8g5DQFh8916bD9wgAYuYuH8AjCnwCsHZgCHA-qAcvIlvRy-994f3Qxhg4?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'moreMeatRibs',
    name: '多肉肋排',
    unit: '斤',
    price: 350,
    description: '飽滿紮實的厚實肉層，醃漬入味。每一口都能大快朵頤，非常適合紅燒、慢燉 or 中秋大口吃肉的場合。',
    features: ['飽滿厚實肉層', '紮實口感', '老饕最愛'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeV7xRQZqD18n7THDmnsVcRVFUMxxRjbb7lLSy2VYukZ35lwKsV-hr0axyrhFreTav9g85tZW8g5DQFh8916bD9wgAYuYuH8AjCnwCsHZgCHA-qAcvIlvRy-994f3Qxhg4?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'tendonMeat',
    name: '筋骨肉',
    unit: '斤',
    price: 180,
    description: '珍稀部位，口感獨特Ｑ彈帶筋，富含天然膠質。最適合慢火長時煲湯，能燉出濃郁鮮甜且帶有膠感的好湯頭。',
    features: ['Ｑ彈帶筋', '膠質精華', '煲湯首選'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjOnW4kofQhtOHz6XvNvpeKsr1r6S4MDdak6bN0yQcuAb7r11bmpeuoQVmISVOJLUXK1-guVDKGBDcwlT_JADArP709o9UPH5ZBVWXnaYYSn10WIdzg6h8ZT_cuDCAWgzHQNyPDA?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'zongzi',
    name: '飄香肉粽',
    unit: '顆',
    price: 80,
    description: '節慶限定美味。嚴選在地長糯米與廖媽媽特製滷肉，米粒晶瑩Ｑ彈，散發濃郁粽葉香氣。',
    features: ['節慶限量', '純手工包製', '古法傳承'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcqUNt5AM9Bg7inyOIcZbZm71_XMp3MK1dIYMn4Ov-GnZYYRgljN10vUjZpuDqvc8iMXsWPAv2rto4nqY_mrjo0CRi80YgFDSdNQRn5-IJcagyVMACH7agj3Xvl7MfuRIY?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'fragrantChili',
    name: '飄香辣椒',
    unit: '罐',
    price: 130,
    description: '廖媽媽私房秘製辣椒醬 (150ML)。選用新鮮朝天椒與蒜頭，搭配純胡麻油慢火熬製，香辣層次分明，不論拌麵、沾肉或是炒菜都是絕佳靈魂伴侶。',
    features: ['純手工慢火熬製', '無添加防腐劑', '香辣帶勁不燥'],
    storage: '冷藏保存 (約 3 個月)，冷凍保存可達 1 年',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcj6I4NFWgQmzkFvDzkfl7WuSjN8LvQaS5Bu3-208vwMyS1KblL--0YUcoBFQG6XeMPeeIxymZ5O5aR5tbk3kYLGXsZ1iMDht1slDWnlvhO3T5PiT3plBuUPH5e_td0LpE?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  {
    id: 'giftBox',
    name: '精選保冷禮盒',
    unit: '盒',
    price: 45,
    description: '逢年過節送禮首選，可自由搭配您喜愛的各式手工香腸與精選肉品，搭配質感提袋，傳遞最誠摯的手作溫度。',
    features: ['大器送禮', '自由搭配', '精美包裝'],
    storage: '冷凍保存 6 個月 (建議嚐鮮期 3 個月)',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-_LCgaYmutpJRtdI1vk7SF8i7HkldjRPn0wbt8jiGziHdYrO3gFk6NJ_rg49yZLPNgFM5BZdrTBOIBFXVSlfs-WmTs3u-whGz5vKzCbKFR112KWDISbEWs7JNl4DdUPQ?key=Ljype5S2ZmW1BFYiil11PQ'
  },
  // 良心合作 × 安心選物 (常溫商品)
  {
    id: 'teaBagRed',
    name: '紅茶茶包',
    unit: '包',
    price: 12,
    description: '選用食用級天然環保玉米纖維茶包(PLA)，耐熱性佳且高品質。產地合作優質紅茶，口感溫潤回甘，是搭配香腸的最佳解膩良伴。',
    features: ['玉米纖維茶包', '食用級高品質', '溫潤回甘'],
    storage: '常溫保存於陰涼乾燥處',
    image: 'https://lh3.googleusercontent.com/d/1NW_Nr2JzvNLyqfUzYqRcW1A9Dnxcm7C6'
  },
  {
    id: 'teaBagPuerh',
    name: '紫芽普洱茶包',
    unit: '包',
    price: 12,
    description: '選用食用級天然環保玉米纖維茶包(PLA)，安心耐熱。珍稀紫芽普洱，含有豐富花青素，茶香濃育持久，入口生津。',
    features: ['天然環保材質', '豐富花青素', '珍稀紫芽'],
    storage: '常溫保存於陰涼乾燥處',
    image: 'https://lh3.googleusercontent.com/d/16I5fU-XuY1o-VobB4J5XeucnMNqXqWLY'
  },
  {
    id: 'teaSetRed',
    name: '紅茶禮盒組',
    unit: '盒',
    price: 200,
    description: '質感禮盒包裝，內含15包高品質玉米纖維茶包。設計大方得體，搭配環保耐熱材質，讓收禮者喝得安心又健康。',
    features: ['精緻禮盒', '環保玉米茶包', '送禮大方'],
    storage: '常溫保存於陰涼乾燥處',
    image: 'https://lh3.googleusercontent.com/d/1lV-dDM6eYHb4ar2O1-guzDrcN-uwmHgk'
  },
  {
    id: 'teaSetPuerh',
    name: '紫芽普洱禮盒組',
    unit: '盒',
    price: 200,
    description: '珍稀紫芽普洱禮盒組。內含15包耐熱環保玉米纖維茶包封存茶香，精美包裝襯托出普洱的不凡價值。',
    features: ['珍稀限定', '耐熱玉米茶包', '高品質選物'],
    storage: '常溫保存於陰涼乾燥處',
    image: 'https://lh3.googleusercontent.com/d/1lV-dDM6eYHb4ar2O1-guzDrcN-uwmHgk'
  }
];
