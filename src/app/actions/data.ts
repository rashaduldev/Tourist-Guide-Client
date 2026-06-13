"use server";

import { serverApi } from "@/lib/server-api";
import type { TourPackage, Guide } from "@/types";

// ---- Packages ----
export async function getPackages(): Promise<TourPackage[]> {
  try {
    return await serverApi<TourPackage[]>("/packages", { auth: false });
  } catch {
    return [];
  }
}

export async function getPackageById(id: string): Promise<TourPackage | null> {
  const all = await getPackages();
  return all.find((p: any) => p.id == id || p._id == id) ?? null;
}

export async function getPackagesByType(type: string): Promise<TourPackage[]> {
  const all = await getPackages();
  return all.filter(
    (p: any) => (p.tour_type ?? "").toLowerCase() === type.toLowerCase(),
  );
}

// ---- Guides ----
export async function getGuides(): Promise<Guide[]> {
  try {
    return await serverApi<Guide[]>("/guides", { auth: false });
  } catch {
    return [];
  }
}

export async function getGuideById(id: string): Promise<Guide | null> {
  const all = await getGuides();
  return all.find((g: any) => g.id == id || g._id == id) ?? null;
}

// ---- Stories ----
export async function getStories(limit?: number): Promise<any[]> {
  try {
    const data = await serverApi<any[]>("/stories", { auth: false });
    return typeof limit === "number" ? data.slice(0, limit) : data;
  } catch {
    return [];
  }
}

// ---- Blogs ----
export async function getBlogs(): Promise<any[]> {
  try {
    return await serverApi<any[]>("/blogs", { auth: false });
  } catch {
    return [];
  }
}
