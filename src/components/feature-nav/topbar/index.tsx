import milboLogo from "@/assets/logo.svg";
import Logo from "@/components/ui/pages/icons/Logo";
import Tabs from "./ui/Tabs";

const title = `Milbo LLC`;
const altText = `Milbo LLC logo`;
const tabs = [
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

export default function Topbar() {
  return (
    <div className="flex w-full justify-between px-6 py-2">
      <Logo Icon={milboLogo} text={title} altText={altText} />
      <Tabs tabs={tabs} />
    </div>
  );
}
