import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spot Formations",
  description: "Discover and manage formations with ease on Spot Formations.",
};

export const icons = {
  icon: '/vector.svg',
  apple: '/vector.svg',
};

export default function RootLayout({ children }) {
  return (
    <>
    <head>
      <link rel="icon" href={icons.icon} />
      <link rel="apple-touch-icon" href={icons.apple} />
    </head>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </>
  );
}
