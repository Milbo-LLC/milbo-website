import Page from "@/components/ui/pages/Page";
import Image from "next/image";

const Header = () => {
  const title = `Who are we?`;
  const subtitle = `We're on a mission to empower individuals through innovative solutions.`;

  return (
    <div className="flex flex-col self-center justify-center text-center max-w-4xl">
      <h1 className="text-[72px]">{title}</h1>
      <div className="text-[24px]">{subtitle}</div>
    </div>
  );
};

const members = [
  {
    name: `Noah Milberger`,
    title: `Founder and Chief Executive Officer`,
    imgUrl: `https://milbo-website.s3.amazonaws.com/noah.jpg`,
  },
  {
    name: `Rory Renwick`,
    title: `Chief Technology Officer`,
    imgUrl: `https://milbo-website.s3.amazonaws.com/rory.jpg`,
  },
  {
    name: "Daniel Stead",
    title: `Chief Operating Officer`,
    imgUrl: `https://milbo-website.s3.amazonaws.com/daniel.jpg`,
  },
];

const Team = () => {
  const title = `Our Team`;
  return (
    <div className="flex flex-col p-8 bg-[#173F5F] rounded-lg gap-8">
      <h1>{title}</h1>
      <div className="flex gap-4">
        {members.map(({ name, title, imgUrl }) => (
          <div
            key={name}
            className="flex flex-col text-center items-center gap-4 w-full"
          >
            <div className="flex justify-center items-center w-40 h-40 rounded-full bg-[#64B6AC] relative">
              <Image
                className="rounded-full"
                priority={true}
                src={imgUrl}
                alt={`Picture of ${name}`}
                fill
              />
            </div>
            <div>
              <div className="text-2xl font-lilita">{name}</div>
              <div>{title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Page>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col max-w-4xl gap-8">
          <Header />
          <Team />
        </div>
      </div>
    </Page>
  );
}
