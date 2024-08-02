import { Plus_Jakarta_Sans } from "next/font/google";
import "tailwindcss/tailwind.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-white text-tersiery dark:bg-tersiery dark:text-primary dark:selection:bg-function dark:selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
