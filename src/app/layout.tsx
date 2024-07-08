import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fronted Demo",
  description: 'Some solution for fronted project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
