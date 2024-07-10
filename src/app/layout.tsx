import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar/Navbar";
import "./index.css";
import "./normalize.css";

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
        <div className="root-container">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
