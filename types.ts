
export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  storage: string;
  tip?: string;
  image: string;
  unit: string;
  price: number; // 新增價格欄位
}

export interface OrderFormData {
  name: string;
  fbName: string;
  phone: string;
  lineId: string;
  deliveryMethod: 'pickup' | 'shipping' | 'cvs';
  address: string;
  pickupTime: string;
  receiverName: string;
  receiverPhone: string;
  deliveryDate: string;
  deliveryTimeSlot: string;
  cvsBrand: '7-11' | 'FamilyMart' | '';
  storeName: string;
  products: Record<string, number>;
  specialNote: string;
  note: string;
}
