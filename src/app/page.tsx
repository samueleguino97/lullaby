import Meteors from "@/components/magicui/meteors";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="p-6 bg-[#1e1e1e] flex max-w-4xl mx-auto flex-col justify-between h-screen overflow-hidden w-full">
      <Meteors number={30} />
      <div>
        <h1 className="text-6xl text-white font-extrabold">
          <span className="text-[#DB90C1]">L</span>ullaby
        </h1>
        <p className="text-white text-3xl mt-14" style={montserrat.style}>
          IT Talent leads shouldn’t take away from your sleep.
          <br />
          Let us fix that.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <h2 className="text-white text-3xl ">Join our waitlist</h2>
        <form action="/thanks" className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full text-white bg-transparent rounded-lg py-2 px-4 border border-[#DB90C1] h-16"
          />
          <button className="bg-[#DB90C1] block w-full rounded-lg text-white font-bold  px-6 py-4">
            Join the Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
