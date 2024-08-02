import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 w-full mt-20">
        <div className="flex justify-between container tracking-wider">
          <div>
            <h2 className="text-3xl font bold text-secondary mb-1">👋 hi!</h2>
            <h1 className="text-6xl font-bold mb-3 dark:text-primary">
              Call me <span className="text-function">Rama.</span>
            </h1>
            <p className="text-lg dark:text-primary">
              a <span className="font-bold">Web Developer</span>.
            </p>
            <div className="mt-20 md:mt-32">
              <button className="border border-function py-3 px-6 rounded-md shadow-lg hover:bg-function hover:text-primary hover:duration-300 cursor-pointer dark:text-primary">
                <Link href="mailto:muhamadramadani@hotmail.com" target="_blank">
                  Contact me
                </Link>
              </button>
            </div>
          </div>
          <div className="hidden md:block bg-function md:rounded-md">
            <Image
              src="https://i.ibb.co.com/hFdrq8L/muhamad-ramadani.png"
              alt="muhamad-ramadani"
              width={452}
              height={452}
              className="w-60 mt-20"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
