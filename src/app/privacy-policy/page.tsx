"use client";

import Page from "@/components/ui/pages/Page";
import { motion } from "framer-motion";

const Header = () => {
  const title = `Privacy Policy.`;

  return (
    <motion.div
      className="flex flex-col self-center justify-center text-center max-w-4xl gap-4 sm:gap-16"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 30, delay: 0 }}
    >
      <h1 className="text-[72px] leading-none sm:leading-4">{title}</h1>
    </motion.div>
  );
};

const policies = [
  {
    title: `User Responsibilities`,
    points: [
      `Personal Information: We may collect personal information such as your name, email address, contact details, and other information you provide when using our services or interacting with us.`,
      `Usage Information: We collect information about your interactions with our services, including but not limited to log files, IP addresses, browser type, device information, and usage patterns.`,
      `Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience and collect information about your usage patterns and preferences.`,
    ],
  },
  {
    title: `Use of Information`,
    points: [
      `We may use the information collected to provide and improve our services, customize your experience, communicate with you, and respond to your inquiries.`,
      `We may use aggregated and anonymized data for statistical analysis, research, and other business purposes.`,
    ],
  },
  {
    title: `Disclosure of Information`,
    points: [
      `We do not sell, trade, or rent your personal information to third parties without your consent, except as described in this Policy or as required by law.`,
      `We may share your information with trusted service providers who assist us in operating our business, delivering services, and managing customer relationships.`,
      `We may disclose your information if required by law, legal process, or government request, or to protect our rights, property, or safety, as well as the rights, property, or safety of others.`,
    ],
  },
  {
    title: `Data Security`,
    statement: `We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: `Third-Party Links`,
    statement: `Our services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of those websites or services before providing any personal information.`,
  },
  {
    title: `Children's Privacy`,
    statement: `Our services are not intended for use by individuals under the age of 13 without parental consent. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under the age of 13, we will take steps to delete such information promptly.`,
  },
  {
    title: `International Transfers`,
    statement: `Your personal information may be stored and processed in countries outside your own. By using our services, you consent to the transfer of your information to countries that may have different data protection laws.`,
  },
  {
    title: `Changes to this Policy`,
    statement: `We may update this Policy from time to time. Any changes will be posted on our website, and the revised Policy will be effective upon posting. It is your responsibility to review this Policy periodically.`,
  },
  {
    title: `Contact Us`,
    statement: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at noah@milbo.co.`,
  },
];

const Terms = () => {
  const title = `This Privacy Policy ("Policy") outlines how Milbo LLC ("Milbo," "we," or "us") collects, uses, discloses, and protects the personal information of users ("User" or "you") when using our services and website. We are committed to safeguarding your privacy and ensuring the security of your personal information. By accessing or using our services, you consent to the practices described in this Policy.`;
  const conclusion = `By accessing or using Milbo's services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree to these practices, you must not use our services.`;

  const lastUpdate = `June 1, 2023`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div>{title}</div>
          <div className="self-center">{`Last updated on ${lastUpdate}`}</div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          {policies.map(({ title, statement, points }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="text-2xl font-lilita">{title}</div>
              {statement && <div>{statement}</div>}
              {points && (
                <ul>
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div>{conclusion}</div>
      </div>
    </motion.div>
  );
};

export default function PrivacyPolicy() {
  return (
    <Page>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-4xl gap-4 sm:gap-16">
          <Header />
          <Terms />
        </div>
      </div>
    </Page>
  );
}
