import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fronted Demo",
  description: "Some solution for fronted project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          nav bar
          <Link href="/show-case">show-case</Link>
          <Link href="/">Home</Link>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
