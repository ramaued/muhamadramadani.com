import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { BackIcon } from "./Icons";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackIcon />
      </Link>
      <div
        className={`${font.className} text-function text-lg font-bold uppercase`}
      >
        <Link className="hover:opacity-80 " href="/">
          Rama M.
        </Link>
      </div>
    </div>
  );
};

export default CmsNavbar;
