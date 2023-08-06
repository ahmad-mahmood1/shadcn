import "@/index.css";

import { SiteFooter } from "@/layout/site-footer";
import { SiteHeader } from "@/layout/site-header";

export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1  container relative">{children}</div>
      <SiteFooter />
    </div>
  );
}
