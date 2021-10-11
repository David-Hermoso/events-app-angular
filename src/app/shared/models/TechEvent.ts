import { City } from './city';

export interface TechEvent {
  id: number;
  noTicketRequired: boolean;
  eventName: string;
  city: City;
  startDate: string;
  endDate: string;
  duration: number;
  price: number;
}
