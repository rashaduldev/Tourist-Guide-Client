import type { ReactNode } from "react";
import Root from "@/Root/Root";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <Root>{children}</Root>;
}
