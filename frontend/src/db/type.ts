import { IconProps } from "@mui/material";

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
  departmentId: number;
  imageUrl: string;
  experience: string;
  education: "";
  availability: Availability[];
}

export interface Icon {
  type: React.ComponentType<IconProps>;
  color: string;
  size: number;
}

export interface Departments {
  id: number;
  name: string;
  icon: Icon;
  route: string;
}
