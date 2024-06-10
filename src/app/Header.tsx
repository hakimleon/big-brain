import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import HeaderSignin from "./header-signin";

const Header = () => {
  return (
    <div className="dark:bg-slate-900 border-b shadow-sm dark:border-none bg-gray-100">
      <div className="container mx-auto flex  justify-between p-3 items-center">
        <div className="text-xl font-semibold flex items-center gap-x-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            Big<span className="text-red-500 text-2xl">B</span>rain
          </div>
        </div>
        <div className="flex items-center gap-4  justify-center">
          <HeaderSignin />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
