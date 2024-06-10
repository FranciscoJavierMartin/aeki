export type CustomerRow = {
  dni: string;
  email: string;
  firstName: string;
  lastName: string;
};

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dni: string;
  budgets: Budget[];
}

export interface Budget {
  id: string;
  totalPrice: number;
  discountAppliedPercentage: number;
  dueDate: string;
  customerId: string;
  products: Product[];
}

export interface Product {
  productId: string;
  budgetId: string;
  quantity: number;
  pricePerUnit: number;
}
