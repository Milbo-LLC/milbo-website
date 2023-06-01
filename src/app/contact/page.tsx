"use client";

import { useState } from "react";
import Page from "@/components/ui/pages/Page";
import ContactForm from "@/components/ui/forms/ContactForm";
import { motion } from "framer-motion";

const Header = () => {
  const title = `Contact us.`;

  return (
    <motion.div
      className="flex flex-col self-center justify-center text-center max-w-4xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
    >
      <h1 className="text-[72px]">{title}</h1>
    </motion.div>
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
        <div className="flex flex-col max-w-4xl gap-8">
          <Header />
          <ContactForm loading={loading} onSubmit={onSubmit} />
        </div>
      </div>
    </Page>
  );
}
