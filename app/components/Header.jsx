import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavLinks = ["Home", "About Us", "Services"];

export default function Header() {
  return (
    <div className="px-[5%] py-5 font-clash flex items-center justify-between">
      <Image src="/logo.jpeg" width={50} height={80} alt="logo" />
      <div className="lg:flex text-lg items-center gap-7 hidden">
        {NavLinks.map((link, i) => (
          <Link key={i} href="/">
            {link}
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button
          text="Contact us"
          className="bg-[#c70e10] font-clashmd text-xs lg:text-base text-white gap-2 flex rounded-full items-center py-3 px-5"
          icon={true}
        />
      </div>
    </div>
  );
}
