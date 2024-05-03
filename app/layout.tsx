import type { Metadata } from "next";
import "./globals.css";
import AppQueryProvider from "@/providers/query";


export const metadata: Metadata = {
  title: "Sygalin Boilerplate Next.js App",
  description: "Sygalin Boilerplate Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppQueryProvider>
          {children}
        </AppQueryProvider>
      </body>
    </html>
  );
}
