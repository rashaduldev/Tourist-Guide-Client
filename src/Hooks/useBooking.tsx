"use client";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getBookings } from "@/app/actions/secure";
import type { Booking } from "@/types";

const useBooking = () => {
  const { user } = useAuth();
  const { refetch, data: bookings = [] } = useQuery<Booking[]>({
    queryKey: ["bookings", user?.email],
    enabled: !!user?.email,
    queryFn: () => getBookings(user!.email as string),
  });
  return [bookings, refetch] as const;
};

export default useBooking;
