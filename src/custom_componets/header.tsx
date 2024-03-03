import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VscThreeBars } from "react-icons/vsc";
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
          <Link href={"#"} className="transition ease-in-out scale-90 hover:scale-100">
            <p className="text-black hover:text-[#f0a535]">
              Home
            </p>
          </Link>
          <Link href={"#"} className="transition ease-in-out scale-90 hover:scale-100">
            <p className="text-black hover:text-[#f0a535]">
              Feature
            </p>
          </Link>
          <Link href={"#"} className="transition ease-in-out scale-90 hover:scale-100">
            <p className="text-black hover:text-[#f0a535]">
              Pricing
            </p>
          </Link>
          <Link href={"#"} className="transition ease-in-out scale-90 hover:scale-100">
            <p className="text-black hover:text-[#f0a535]">
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
                className="flex flex-col justify-center items-start gap-3"
              >
                <Link href="#">
                  <h1>Home</h1>
                </Link>
                <Link href="#">
                  <h1>Feature</h1>
                </Link>
                <Link href="#">
                  <h1>Pricing</h1>
                </Link>
                <Link href="#">
                  <h1>Login</h1>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
