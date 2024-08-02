import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <header className="mx-auto max-w-4xl px-6 w-full">
      <nav className="flex justify-between items-center h-20">
        <div className="text-function text-lg font-bold uppercase">
          <Link className="hover:opacity-80 active:font-bold" href="/">
            Rama M.
          </Link>
        </div>
        <div className="text-md dark:text-primary tracking-wide">
          <ul className="flex items-center gap-2 md:gap-6">
            <li>
              <Link className="hover:opacity-80" href="/articles">
                /articles
              </Link>
            </li>
            <li className="hover:opacity-80 cursor-not-allowed text-secondary">
              /service{" "}
              <span className="text-xs border border-secondary rounded-md px-1 ml-1 items-center text-secondary">
                SOON
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
