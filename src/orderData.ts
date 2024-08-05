import { getDatabase, ref, set, push } from 'firebase/database';
import { app } from './firebaseConfig';

interface UserInfo {
  name: string;
  surname: string;
  address: string;
  phone: string;
}

interface Order {
  user: UserInfo;
  items: any[];
  currency: string;
}

const storeOrderData = async (order: Order) => {
  try {
    const db = getDatabase(app);
    const ordersRef = ref(db, 'orders');
    const newOrderRef = push(ordersRef);
    await set(newOrderRef, order);
    console.log('Order data stored in Firebase Realtime Database with ID: ', newOrderRef.key);
  } catch (error) {
    console.error('Error storing order data: ', error);
  }
};

export { storeOrderData };