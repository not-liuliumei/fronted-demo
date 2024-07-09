import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fronted Demo | Show Cases",
};

export default function Page() {
  return (
    <div>
      <h1>show case</h1>
      <div>
        <Link href="/show-case/grow-input">grow input</Link>
      </div>
    </div>
  );
}
