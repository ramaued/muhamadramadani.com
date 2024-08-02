import Footer from "@/app/components/Footer";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 w-full text-center tracking-wide mt-20">
        <h1 className="font-bold text-8xl mb-2">404</h1>
        <h2 className="font-bold text-xl mb-2">Page not found</h2>
        <p>
          The Page you are looking for doesn&apos;t exist. go to
          <Link href="/" className="text-function">
            Home
          </Link>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
