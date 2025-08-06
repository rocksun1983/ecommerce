export type FormData = {
  category: string;
  location: string;
  youtube: string;
  title: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<string>;
};

export type uploadData = {
  category: string;
  location: string;
  youtube: string;
  title: string;
  userEmail: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
};

export interface adData {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  userEmail?: string;
  createdAt?: any; // Can be Timestamp or null
  youtube:string;
  contactNumber:number;
  negotiable:string;
}

