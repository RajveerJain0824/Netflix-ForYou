import { notFound } from "next/navigation";
import { eras, getEra } from "@/data/eras";
import { EraExperience } from "./EraExperience";

export function generateStaticParams() {
  return eras.map((era) => ({ id: era.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const era = getEra(params.id);
  return {
    title: era ? `${era.title} | Private Anniversary Screening` : "Era"
  };
}

export default function EraPage({ params }: { params: { id: string } }) {
  const era = getEra(params.id);

  if (!era) notFound();

  return <EraExperience era={era} />;
}
