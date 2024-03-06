import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  VscThreeBars,
  VscLock,
} from "react-icons/vsc";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { customAnimations } from "./utilities/animation";

export default function Header() {
  return (
    <div className="flex fixed bg-background w-screen shadow-md xl:flex-row justify-between items-center p-6 xl:px-24">
      <div className="w-2/5">
        <Image
          className="aspect-auto xl:h-full"
          alt="Leasy AI"
          src="/assets/leasy_ai_logo.png"
          width={284}
          height={56}
        />
      </div>
      <div className="hidden xl:flex xl:visible xl:justify-between xl:items-center xl:gap-10">
        <div className="flex justify-between items-center xl:gap-4">
          <Link
            href={"#"}
            className="transition ease-in-out scale-90 hover:scale-100"
          >
            <p className="text-black hover:text-[#f0a535] xl:text-lg font-bold">
              Home
            </p>
          </Link>
          <Link
            href={"#"}
            className="transition ease-in-out scale-90 hover:scale-100"
          >
            <p className="text-black hover:text-[#f0a535] xl:text-lg font-bold">
              Feature
            </p>
          </Link>
          <Link
            href={"#"}
            className="transition ease-in-out scale-90 hover:scale-100"
          >
            <p className="text-black hover:text-[#f0a535] xl:text-lg font-bold">
              Pricing
            </p>
          </Link>
          <Link
            href={"#"}
            className="transition ease-in-out scale-90 hover:scale-100"
          >
            <p className="text-black hover:text-[#f0a535] xl:text-lg font-bold">
              Login
            </p>
          </Link>
        </div>
        <div className="transition ease-in-out scale-90 hover:scale-100">
          <Button
            className="bg-[#f0a535]"
            size={"lg"}
          >
            Book a Demo
          </Button>
        </div>
      </div>
      <div className="visible xl:hidden pl-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#f0a535]">
              <VscThreeBars />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div>
              <div
                id="nav-options"
                className="flex flex-col justify-center items-start gap-8 py-8"
              >
                <div className="relative group cursor-pointer w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                      <Link href="#">
                        <h1 className="text-lg font-extrabold">
                          Home
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                      <Link href="#">
                        <h1 className="text-lg font-extrabold">
                          Feature
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                      <Link href="#">
                        <h1 className="text-lg font-extrabold">
                          Pricing
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                    <div className="space-y-2">
                      <Link href="#">
                        <h1 className="text-lg font-extrabold">
                          Login{" "}
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
