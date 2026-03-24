import Home from "@/app/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Digital Marketing Agency | Automate SMMA",
  description: "Healthcare digital marketing services for high-end clinics and hospitals. Patient acquisition marketing specifically for plastic surgeons and dental implants.",
  keywords: ["medical digital marketing agency", "healthcare digital marketing services", "digital marketing for plastic surgeons", "hospital patient acquisition digital marketing"],
};

export default function MedicalPage() {
  return <Home />;
}
