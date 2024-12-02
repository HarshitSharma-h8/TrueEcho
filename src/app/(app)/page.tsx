"use client";
import Link from "next/link";
import heroImg from "../assets/rb_21826.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, Rocket, RefreshCw } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-20  bg-black text-white">
        <section className="">
          {/* <h1 className="text-3xl md:text-5xl font-bold">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            True Feedback - Where your identity remains a secret.
          </p> */}
          <div className=" md:h-[80vh] md:grid md:grid-cols-2 gap-8 items-center ">
            <div className=" flex justify-start items-center py-20">
              <div className="text-left ">
                <h1 className="text-3xl md:text-5xl font-bold text-left ">
                  The <span className="text-blue-600">Best</span> <br /> Way for{" "}
                  <span className="text-blue-600">Knowing</span>
                </h1>
                <h2 className="mt-2 text-base md:text-2xl text-left">
                  Dive into the World of Anonymous Feedback
                </h2>
                <p className="mt-2 text-base md:text-lg text-left">
                  TrueEcho - Where your identity remains a secret.
                </p>
                <Link href="/sign-up">
                  <Button
                    className=" md:w-auto bg-slate-100 text-black mt-4 "
                    variant={"outline"}
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    className=" md:w-auto bg-transparent text-white mt-4 ml-4"
                    variant={"outline"}
                  >
                    Sign in
                  </Button>
                </Link>
              </div>
            </div>
            <div className=" hidden md:block ">
              <Image src={heroImg} width={500} alt="Hero image" className="" />
            </div>
          </div>
        </section>
      </main>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
            Why Use TrueEcho?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get honest feedback effortlessly while keeping it anonymous and
            real-time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <User className="text-blue-500 w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Anonymity Guaranteed
              </h3>
              <p className="text-gray-600">
                Ensure privacy with anonymous feedback, promoting open and
                honest communication.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <Rocket className="text-green-500 w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast & Easy Setup
              </h3>
              <p className="text-gray-600">
                Launch instantly with an intuitive interface designed for quick
                feedback gathering.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <RefreshCw className="text-purple-500 w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Real-Time Updates
              </h3>
              <p className="text-gray-600">
                Receive feedback as it happens, keeping you informed and ready
                to act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </>
  );
}
