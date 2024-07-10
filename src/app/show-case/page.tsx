import { Metadata } from "next";
import { CaseCard } from "@/components/CaseCard/CaseCard";

export const metadata: Metadata = {
  title: "Fronted Demo | Show Cases",
};

export default function Page() {
  return (
    <div>
      <h1>show case</h1>
      <div>
        <CaseCard
          route={"/show-case/grow-input"}
          title={"Grow Input"}
          description={"A Input which can grow itself"}
        />
      </div>
    </div>
  );
}
