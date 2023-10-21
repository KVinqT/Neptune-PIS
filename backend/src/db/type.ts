export interface BookingInterval {
  tokenId: number;
  duration: string;
}

export interface Slots {
  time: string;
  totalSlot: number;
  bookedSlot: number;
  availableSlot: number;
  bookingInterval: BookingInterval[];
}

export interface Availability {
  date: string;
  month: number;
  slots: Slots[];
}

export interface Doctor {
  id: number;
  name: string;
  department: string;
  imageUrl: string;
  experience: string;
  education: "";
  availability: Availability[];
}
