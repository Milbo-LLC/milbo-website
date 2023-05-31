import Image from "next/image";
import milboLogo from "@/assets/logo.svg";

const title = `Milbo LLC`;

// Copyright copy
const message = `Made with 🖤 in Salem, MA`;
const company = `Milbo LLC`;
const crYear = `© ${new Date().getFullYear()}`;

const Logo = () => {
  return (
    <div className="flex items-center gap-2 justify">
      <div className="relative flex w-10 h-10">
        <Image src={milboLogo} alt="rabbit hole Logo" fill />
      </div>
      <div className="hidden sm:block font-lilita text-lg">{title}</div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
      <div className="cursor-pointer button">Terms of Service</div>
      <div className="cursor-pointer button">Privacy Policy</div>
      <div className="cursor-pointer button">Contact Us</div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="text-end">
      <div className="hidden md:flex">{message}</div>
      <div className="flex flex-col md:flex-row justify-end md:gap-1">
        <div>{company}</div>
        <div>{crYear}</div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex w-full justify-between items-center text-xs sm:text-sm md:text-md font-bold max-w-[88rem] px-6 pb-4">
      <Logo />
      <Links />
      <Copyright />
    </div>
  );
}
