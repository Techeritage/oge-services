"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { HambergerMenu } from "iconsax-react";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Oge Books", link: "/oge-books" },
  { title: "Oge Publications", link: "/oge-publications" },
];
const NavLinks2 = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Contact Us", link: "/contact" },
  { title: "Oge Books", link: "/oge-books" },
  { title: "Oge Publications", link: "/oge-publications" },
];

export default function Header() {
  const [isNav, setIsNav] = useState(false);
  const pathName = usePathname();
  return (
    <div className="px-[5%] py-5 font-clash flex items-center justify-between z-50 fixed top-0 right-0 left-0 bg-white">
      <Link href="/">
        <Image src="/logo.jpeg" width={60} height={40} alt="logo" />
      </Link>
      <div className="lg:flex text-lg items-center gap-7 hidden">
        {NavLinks.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className={`text-base hover:text-primary font-clashmd ${
              pathName === link.link ? "text-primary" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsNav(true)} className={`text-base pr-2`}>
          <HambergerMenu size={35} />
        </button>
      </div>
      {isNav && (
        <div className="min-h-[350px] transition-all border gap-14 duration-700 lg:hidden flex flex-col p-5 w-[90%] bg-white rounded-[20px] absolute left-[50%] translate-x-[-50%] top-5 z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-primary font-clashmd text-xl">OGE SERVICES</h3>
            <button onClick={() => setIsNav(false)}>Close</button>
          </div>
          <div className="grid gap-2">
            {NavLinks2.map((link, i) => (
              <Link
                onClick={() => setIsNav(false)}
                key={i}
                href={link.link}
                className={`text-2xl font-clash lg:text-base flex items-center gap-1 ${
                  pathName === link.link ? "text-primary" : ""
                }`}
              >
                {link.title}{" "}
              </Link>
            ))}
          </div>
        </div>
      )}
      <Link href="/contact" className="hidden lg:block">
        <Button
          text="Contact us"
          className="bg-primary hover:opacity-50 font-clashmd text-xs lg:text-base text-white gap-2 flex rounded-full items-center py-3 px-5"
          icon={true}
        />
      </Link>
    </div>
  );
}
