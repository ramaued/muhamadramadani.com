import { LoveIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-4xl px-6 w-full">
      <div className="fixed bottom-0 pb-10 mt-20">
        <div className="flex items-center text-base dark:text-primary">
          &copy; 2024 - Made with{" "}
          <span className="mr-1 ml-1">
            <LoveIcon />
          </span>{" "}
          in Jakarta.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
