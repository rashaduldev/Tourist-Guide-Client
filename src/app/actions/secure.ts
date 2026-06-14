"use server";

import { serverApi } from "@/lib/server-api";
import type { Booking, WishListItem, AppUserDoc } from "@/types";

// ---- Wishlist ----
export async function getWishlist(email: string): Promise<WishListItem[]> {
  if (!email) return [];
  try {
    return await serverApi<WishListItem[]>(
      `/wishlists?email=${encodeURIComponent(email)}`,
    );
  } catch {
    return [];
  }
}

export async function addToWishlist(item: Record<string, unknown>) {
  return serverApi("/wishlists", { method: "POST", body: item });
}

export async function removeWishlist(id: string) {
  return serverApi(`/wishlists/${id}`, { method: "DELETE" });
}

// ---- Bookings ----
export async function getBookings(email: string): Promise<Booking[]> {
  if (!email) return [];
  try {
    return await serverApi<Booking[]>(
      `/bookings?email=${encodeURIComponent(email)}`,
    );
  } catch {
    return [];
  }
}

export async function addBooking(booking: Record<string, unknown>) {
  return serverApi("/bookings", { method: "POST", body: booking });
}

export async function deleteBooking(id: string) {
  return serverApi(`/bookings/${id}`, { method: "DELETE" });
}

// ---- Users (admin) ----
export async function getUsers(): Promise<AppUserDoc[]> {
  try {
    return await serverApi<AppUserDoc[]>("/users");
  } catch {
    return [];
  }
}

export async function checkAdmin(email: string): Promise<boolean> {
  if (!email) return false;
  try {
    const res = await serverApi<{ admin?: boolean }>(
      `/users/admin/${encodeURIComponent(email)}`,
    );
    return Boolean(res?.admin);
  } catch {
    return false;
  }
}

export async function updateUserRole(id: string, role: "user" | "admin") {
  return serverApi(`/users/${id}/role`, { method: "PATCH", body: { role } });
}

export async function deleteUser(id: string) {
  return serverApi(`/users/${id}`, { method: "DELETE" });
}

// ---- Packages (admin create) ----
export async function addPackage(pkg: Record<string, unknown>) {
  return serverApi("/packages", { method: "POST", body: pkg });
}
