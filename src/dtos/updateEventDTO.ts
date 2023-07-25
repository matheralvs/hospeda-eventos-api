export type AddressInput = {
  zipCode?: string;
  number?: string;
  street?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
};

export type UpdateEventInput = {
  id: string;
  name?: string;
  privacy?: "public" | "private";
  description?: string;
  address?: AddressInput;
  initialDate?: Date;
  initialTime?: string;
};

export type UpdateEventOutput = void;
