import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import type { Booking } from "@/types";

const useBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: bookings = [] } = useQuery<Booking[]>({
    queryKey: ["bookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });
  return [bookings, refetch] as const;
};

export default useBooking;
