"use client";
import React from "react";
import Image from "next/image";
import rabbitHoloLogo from "@/assets/rabbit-hole-logo.svg";
import docsQueryLogo from "@/assets/docs-query-logo.svg";
import frankenotesLogo from "@/assets/frankenotes-logo.svg";
import { useState } from "react";
import Page from "@/components/ui/pages/Page";
import NewsLetterForm from "@/components/ui/forms/NewsLetterForm";
import { motion } from "framer-motion";

const NewsLetterFormTitle = `Sign up to stay up to date with our progress.`;

const Header = () => {
  const title = `Here's what we're building.`;

  return (
    <motion.div
      className="flex flex-col self-center justify-center text-center max-w-4xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
    >
      <h1 className="text-[72px] leading-none">{title}</h1>
    </motion.div>
  );
};

const products = [
  {
    name: `rabbit hole`,
    description: `Generate tailored learning resources for any topic you can imagine.`,
    Icon: rabbitHoloLogo,
  },
  {
    name: `docs query`,
    description: `Effortlessly explore and extract insights from your documents.`,
    Icon: docsQueryLogo,
  },
  {
    name: `frankenotes`,
    description: `Revolutionize the way you capture, access, and manage your thoughts.`,
    Icon: frankenotesLogo,
  },
];

const ProductsDisplay = () => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      {products.map(({ name, description, Icon }, index) => (
        <div
          key={name}
          className={`flex flex-col sm:flex-row p-4 sm:gap-4 items-center rounded-lg ${
            index % 2 ? "bg-[#64B6AC] text-black" : "bg-[#173F5F]"
          } border-4 border-transparent hover:border-white`}
        >
          <div className="flex p-4 w-fit h-fit bg-white rounded-full">
            <div className="flex w-14 h-14 relative">
              <Image priority={true} src={Icon} alt={`${name} icon`} fill />
            </div>
          </div>
          <div className="flex flex-col justify-between py-6">
            <div className="text-2xl font-lilita">{name}</div>
            <div className="max-w-sm">{description}</div>
          </div>
          <h1 className="flex flex-1 justify-center">COMING SOON!</h1>
        </div>
      ))}
    </motion.div>
  );
};

export default function Products() {
  const [loading, setLoading] = useState(false);

  const onNewsLetterFormSubmit = () => {
    console.log("submitted news letter form.");
  };

  return (
    <Page>
      <div className="flex flex-col w-full h-fit items-center">
        <div className="flex flex-col max-w-4xl gap-8">
          <Header />
          <NewsLetterForm
            loading={loading}
            onSubmit={onNewsLetterFormSubmit}
            title={NewsLetterFormTitle}
          />
          <ProductsDisplay />
        </div>
      </div>
    </Page>
  );
}
