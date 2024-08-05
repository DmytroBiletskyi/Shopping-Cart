export interface CartIconProps {
    isCart: boolean;
}

export interface HeaderProps {
    onIsCartChange: () => void;
    onIsOrderListChange: () => void;
    isCart: boolean;
    isOrderList: boolean;
}

export interface UserInfo {
    name: string;
    surname: string;
    address: string;
    phone: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    total: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface OrderData {
    user: UserInfo;
    items: CartItem[];
    currency: string;
    total: string;
}
