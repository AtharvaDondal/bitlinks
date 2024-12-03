import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins-sans",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[59vh]">
        <div className="gap-4 flex flex-col items-center justify-center">
          <p className={`font-bold text-3xl ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="text-center">
            We are most straighforward URL Shortner in the World. Most of the
            URL shortner will track you or or ask you to give your details for
            login. We understand your needs and hence we have created this URL
            shortner for you
          </p>
          <div className="flex justify-start gap-3">
            <Link href={"/"}>
              {" "}
              <button className="p-3 text-white py-1 font-bold rounded-lg bg-purple-500 shadow-lg border-l-white border">
                Try Now
              </button>
            </Link>
            <Link href={"/"}>
              <button className="p-3 text-white py-1 font-bold rounded-lg bg-purple-500 shadow-lg border-l-white border">
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src="/vector.jpg"
            alt="image"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
