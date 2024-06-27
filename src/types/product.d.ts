type ProductRow = {
  id: string;
  name: string;
  photoURL: string;
  price: string;
};

type Product = {
  id: string;
  name: string;
  photoURL: string;
  price: number;
};

type Customer = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dni: string;
};

type Budget = {
  discountAppliedPercentage: number;
  dueDate: Date;
  totalPrice: number;
};
