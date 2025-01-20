import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mappool",
  description: "Test your mappool overlay here",
};

export default function MappoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
