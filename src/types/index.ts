// Shared domain types. API responses are loosely typed during the migration;
// extend these as fields are confirmed against the backend.

export interface TourPackage {
  _id?: string;
  tour_type?: string;
  trip_title?: string;
  price?: number | string;
  tour_plan?: unknown;
  image?: string;
  [key: string]: any;
}

export interface Guide {
  _id?: string;
  name?: string;
  email?: string;
  photo?: string;
  experience?: string | number;
  [key: string]: any;
}

export interface Booking {
  _id?: string;
  email?: string;
  price?: number | string;
  status?: string;
  [key: string]: any;
}

export interface WishListItem {
  _id?: string;
  email?: string;
  [key: string]: any;
}

export interface AppUserDoc {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  admin?: boolean;
  [key: string]: any;
}
