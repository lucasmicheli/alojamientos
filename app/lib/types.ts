export interface Hotel {
  slug: string;
  name: string;
  photo: string;
  description: string;
  availabilityFrom: number;
  availabilityTo: number;
  rooms: number;
  city: string;
  country: string;
  price: number;
}

export interface Filters {
  dateFrom: string;
  dateTo: string;
  country: string;
  price: string;
  size: string;
}
