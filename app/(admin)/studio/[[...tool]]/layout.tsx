import CmsNavbar from "@/app/components/CmsNavbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio — Muhamad Ramadani",
  description: "Headless CMS dari sanity.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CmsNavbar />
        {children}
      </body>
    </html>
  );
}
