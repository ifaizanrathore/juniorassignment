import "./globals.css"; // Import your global CSS here
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ClientProviders from "./ClientProviders"; // Keep this if you're using context/theme/etc.

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "My App",
  description: "A beautifully styled Next.js app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 text-gray-900 min-h-screen antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
