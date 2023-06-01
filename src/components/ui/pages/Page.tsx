import Topbar from "@/components/feature-nav/topbar";
import Footer from "@/components/feature-nav/footer";

interface PageProps {
  children: JSX.Element;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="flex bg-black text-white min-w-0">
      <div className="flex flex-col w-screen h-screen">
        <Topbar />
        <div className="flex flex-col h-full overflow-auto scrollbar-hide justify-between">
          <div className="py-8">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
