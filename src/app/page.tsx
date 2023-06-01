"use client";

import { useState } from "react";
import Page from "@/components/ui/pages/Page";
import { Grid } from "@mui/material";
import { IconType } from "react-icons";
import { MdLightbulb, MdPeople, MdShield, MdVpnKey } from "react-icons/md";
import NewsLetterForm from "@/components/ui/forms/NewsLetterForm";
import { motion } from "framer-motion";

const Header = () => {
  const title = `Building the future.`;
  const subtitle = `We're a cutting-edge tech company focused on creating extraordinary web and mobile applications powered by AI.`;

  return (
    <motion.div
      className="flex flex-col self-center justify-center text-center max-w-4xl gap-4 sm:gap-16"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
    >
      <h1 className="text-[72px] leading-none sm:leading-4">{title}</h1>
      <div className="text-[24px]">{subtitle}</div>
    </motion.div>
  );
};

const values = [
  {
    value: `Innovation`,
    description: `We're a cutting-edge tech company specializing in creating extraordinary web and mobile applications powered by AI.`,
    Icon: MdLightbulb,
  },
  {
    value: `Inclusiveness`,
    description: `We celebrate diversity, empowering everyone to contribute their unique talents and perspectives.`,
    Icon: MdPeople,
  },
  {
    value: `Safety`,
    description: `We prioritize the well-being of our team, customers, and stakeholders, ensuring a secure environment.`,
    Icon: MdShield,
  },
  {
    value: `Privacy`,
    description: `We respect and safeguard personal information, maintaining strict privacy and security standards.`,
    Icon: MdVpnKey,
  },
];

const CoreValue = ({
  value,
  description,
  Icon,
}: {
  value: string;
  description: string;
  Icon: IconType;
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <div className="flex flex-col w-full h-full items-center text-center gap-2">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#64B6AC]">
          <Icon className="text-4xl" />
        </div>
        <div className="text-2xl font-lilita">{value}</div>
        <div>{description}</div>
      </div>
    </Grid>
  );
};

const CoreValues = () => {
  const title = `Our Core Values`;
  return (
    <motion.div
      className="flex flex-col w-full bg-[#173F5F] p-8 rounded-lg gap-8"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      <h1>{title}</h1>
      <Grid container spacing={3}>
        {values.map(({ value, description, Icon }) => (
          <CoreValue
            key={value}
            value={value}
            description={description}
            Icon={Icon}
          />
        ))}
      </Grid>
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(false);

  const onNewsLetterFormSubmit = () => {
    console.log("submitted news letter form.");
  };
  return (
    <Page>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-4xl gap-8">
          <Header />
          <NewsLetterForm loading={loading} onSubmit={onNewsLetterFormSubmit} />
          <CoreValues />
        </div>
      </div>
    </Page>
  );
}
