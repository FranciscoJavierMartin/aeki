export type BudgetRow = {
  id: string;
  totalPrice: number;
  discountAppliedPercentage: number;
  dueDate: string;
  customerId: string;
  customerName: string;
};

export interface BudgetResponse {
  budget: Budget;
  products: Product[];
  customer: Customer;
}

export interface Budget {
  discountAppliedPercentage: number;
  dueDate: string;
  totalPrice: number;
  id: string;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dni: string;
}

export interface Product {
  pricePerUnit: number;
  quantity: number;
  name: string;
  productId: string;
  photoURL: string;
  totalPrice: number;
}
