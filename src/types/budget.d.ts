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
  id: string;
  totalPrice: number;
  discountAppliedPercentage: number;
  dueDate: string;
  customerId: string;
  Customer: Customer;
  products: Product[];
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
  productId: string;
  budgetId: string;
  quantity: number;
  pricePerUnit: number;
  Product: ProductData;
}

export interface ProductData {
  id: string;
  name: string;
  photoURL: string;
  price: number;
}
