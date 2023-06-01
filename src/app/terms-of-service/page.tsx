"use client";

import Page from "@/components/ui/pages/Page";
import { motion } from "framer-motion";

const Header = () => {
  const title = `Terms of Serivce.`;

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

const terms = [
  {
    title: `Acceptance of Terms`,
    statement: `By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Agreement and all applicable laws and regulations. If you do not agree with any part of this Agreement, you must not use our services.`,
  },
  {
    title: `Description of Services`,
    statement: `Milbo provides various services, including but not limited to software solutions, products, and support. These services may be subject to additional terms and conditions that will be presented to you when you access or use specific features.`,
  },
  {
    title: `Intellectual Property Rights`,
    statement: `All intellectual property rights associated with Milbo's services and website, including but not limited to trademarks, logos, copyrights, and trade secrets, are owned by Milbo or its licensors. You agree not to use, copy, distribute, or modify any content from our services without prior written consent from Milbo.`,
  },
  {
    title: `User Responsibilities`,
    statement: `As a User, you agree to:`,
    points: [
      `Provide accurate and up-to-date information during the registration process and ensure its ongoing accuracy.`,
      `Use our services in compliance with all applicable laws, regulations, and this Agreement.`,
      `Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access or use of your account.`,
      `Refrain from engaging in any activity that may disrupt or interfere with the proper functioning of our services or compromise their security.`,
    ],
  },
  {
    title: `Privacy and Data Protection`,
    statement: `We are committed to protecting your privacy and handling your personal data in accordance with applicable data protection laws and our Privacy Policy. By using our services, you consent to the collection, use, and storage of your personal information as described in our Privacy Policy.`,
  },
  {
    title: `Limitation of Liability`,
    statement: `To the fullest extent permitted by law, Milbo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our services, regardless of the cause of action.`,
  },
  {
    title: `Indemnification`,
    statement: `You agree to indemnify, defend, and hold Milbo harmless from and against any claims, losses, liabilities, damages, costs, and expenses arising out of or in connection with your use of our services, violation of this Agreement, or infringement of any intellectual property rights.`,
  },
  {
    title: `Modifications to the Agreement`,
    statement: `Milbo reserves the right to modify or update this Agreement at any time. Any modifications will be effective upon posting the revised Agreement on our website. It is your responsibility to review this Agreement periodically. Your continued use of our services after any modifications constitute your acceptance of the revised Agreement.`,
  },
  {
    title: `Termination`,
    statement: `Milbo may, at its sole discretion, suspend or terminate your access to our services for any reason and at any time, without prior notice or liability.`,
  },
  {
    title: `Governing Law and Jurisdiction`,
    statement: `This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where Milbo is located, without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to this Agreement shall be brought exclusively in the courts of that jurisdiction.`,
  },
  {
    title: `Severability`,
    statement: `If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    title: `Entire Agreement`,
    statement: `This Agreement constitutes the entire agreement between Milbo and you regarding the subject matter herein and supersedes any prior or contemporaneous oral or written agreements, understandings, or representations.`,
  },
  {
    title: `Waiver`,
    statement: `The failure of Milbo to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision unless acknowledged and agreed to in writing.`,
  },
  {
    title: `Assignment`,
    statement: `You may not assign or transfer this Agreement, in whole or in part, without the prior written consent of Milbo. Milbo may freely assign or transfer this Agreement without restriction.`,
  },
  {
    title: `Contact Information`,
    statement: `If you have any questions or concerns about this Agreement or our services, please contact us at noah@milbo.co.`,
  },
];

const Terms = () => {
  const title = `This Terms of Service Agreement ("Agreement") is entered into between Milbo LLC ("Milbo," "we," or "us") and you ("User" or "you") as the user of Milbo's services and website. By accessing or using our services and website, you agree to be bound by the terms and conditions outlined in this Agreement.`;
  const lastUpdate = `June 1, 2023`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      <div className="flex flex-col gap-8">
        <div>{title}</div>
        <div className="self-center">{`Last updated on ${lastUpdate}`}</div>
      </div>
      <div className="flex flex-col gap-4 p-4 pt-8">
        {terms.map(({ title, statement, points }) => (
          <div key={title} className="flex flex-col gap-4">
            <div className="text-2xl font-lilita">{title}</div>
            <div>{statement}</div>
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
    </motion.div>
  );
};

export default function TermsOfService() {
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
