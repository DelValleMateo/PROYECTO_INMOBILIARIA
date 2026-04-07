import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Élite Inmobiliaria | Bienes Raíces de Lujo",
  description: "Encuentra tu hogar ideal. Departamentos exclusivos en venta y alquiler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
