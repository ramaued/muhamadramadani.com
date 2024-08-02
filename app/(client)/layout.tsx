import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muhamad Ramadani — Web Developer",
    template: "%s —  Muhamad Ramadani",
  },
  description: "Jasa pembuatan website murah di Jakarta",
  metadataBase: new URL("https://muhamadramadani.com"),
  openGraph: {
    title: "Muhamad Ramadani — Web Developer",
    description: "Jasa pembuatan website murah di Jakarta",
    type: "website",
    locale: "id_ID",
    url: "https://muhamadramadani.com",
    siteName: "Muhamad Ramadani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-D3YW46L3QT" />
      <body
        className={`${font.className} bg-white text-tersiery dark:bg-tersiery dark:text-primary dark:selection:bg-function dark:selection:text-primary`}
      >
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
