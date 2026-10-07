import type { Metadata } from "next";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { EnterpriseCommitment } from "@/components/contact/EnterpriseCommitment";

export const metadata: Metadata = {
  title: "Direct Consultation | 5e Serpraise",
  description:
    "Schedule a preliminary discovery session with our team in India and Australia to discuss your organization’s training, executive coaching, or OD interventions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFE6D6]">
      {/* 1. Page Header: Direct Consultation */}
      <ContactHeader />

      {/* 2. Request a Custom Proposal Form */}
      <ConsultationForm />

      {/* 3. Office Locations: India & Australia */}
      <OfficeLocations />

      {/* 4. Enterprise Commitment */}
      <EnterpriseCommitment />
    </div>
  );
}
