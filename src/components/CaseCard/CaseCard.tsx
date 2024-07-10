"use client";

import { useRouter } from "next/navigation";
import "./index.css";

export const CaseCard = ({
  route,
  title,
  description,
}: {
  route: string;
  title: string;
  description: string;
}) => {
  const router = useRouter();

  return (
    <div className="casecard-container" onClick={() => router.push(route)}>
      <div className="casecard-title">
        <h3>{title}</h3>
      </div>
      <div className="casecard-description">{description}</div>
    </div>
  );
};
