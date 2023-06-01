"use client";

import { useState } from "react";
import Page from "@/components/ui/pages/Page";
import ContactForm from "@/components/ui/forms/ContactForm";

const Header = () => {
  const title = `Contact us.`;

  return (
    <div className="flex flex-col self-center justify-center text-center max-w-4xl">
      <h1 className="text-[72px]">{title}</h1>
    </div>
  );
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    console.log("contact - submit clicked.");
  };
  return (
    <Page>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-4xl">
          <Header />
          <ContactForm loading={loading} onSubmit={onSubmit} />
        </div>
      </div>
    </Page>
  );
}
