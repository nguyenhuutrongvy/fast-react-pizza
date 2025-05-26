import { CartItemType } from "./CartItem";

export type OrderType = {
  id?: string;
  status?: string;
  customer?: string;
  phone?: string;
  address?: string;
  priority: boolean;
  estimatedDelivery?: string;
  cart: CartItemType[];
  position?: string;
  orderPrice?: number;
  priorityPrice?: number;
};
