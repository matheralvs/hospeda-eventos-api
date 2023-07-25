export type AddressInput = {
  zipCode: string;
  number: string;
  street: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type CreateEventInput = {
  name: string;
  privacy: "public" | "private";
  description?: string;
  address: AddressInput;
  initialDate: Date;
  initialTime: string;
};

export type CreateEventOutput = void;
