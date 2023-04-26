type UserItem = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type BarberItem = {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  review: {
    author: string;
    score: number;
    comment: string;
  }[];
  description: string;
  price: number;
};
