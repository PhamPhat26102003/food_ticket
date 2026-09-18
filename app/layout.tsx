import type { Metadata } from "next";
import { Be_Vietnam_Pro, Courier_Prime } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phiếu gọi món trưa nay",
  description: "Bốc thăm ngẫu nhiên xem trưa nay ăn gì.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.variable} ${courierPrime.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
