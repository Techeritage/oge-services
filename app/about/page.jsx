import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  return (
    <main className="pb-20">
      <section className="flex flex-col lg:flex-row lg:items-center justify-between px-[3%] py-10 lg:py-20">
        <div className="relative mb-5 lg:mb-0">
          <h1 className="headingBig pl-5">
            About our <br />
            company
          </h1>
          <span className="w-[2px] top-[10px] absolute h-[50px] bg-primary"></span>
        </div>
        <div>
          <p className="max-w-[600px] text-sm lg:text-base">
            OGE Professional Services Limited is a wholly-owned indigenous
            company incorporated under Nigeria Laws in the year 2011 with
            registration Number RC 9073903 with the main objective of providing
            diversified and multidisciplinary professional and educational
            Services in Nigerian and other African Countries. OGE Professional
            Services Ltd has other subsidiaries such as OGE Business School, OGE
            Business School Publishing and Oyedokun Godwin Emmanuel & Co
          </p>
        </div>
      </section>
      <section className="mx-[3%] py-10 lg:py-32 flex items-center flex-col-reverse lg:flex-row gap-10">
        <div className="basis-1/2">
          <Image
            className="rounded-2xl lg:rounded-3xl h-[350px] lg:h-[500px] object-top object-cover"
            src="/mot1.jpg"
            width={700}
            height={500}
            alt="hero image"
          />
        </div>
        <div className="basis-1/2 grid gap-7 lg:gap-10">
          <h2 className="heading text-center lg:border-l-2 border-[#c70e10] relative lg:pl-6">
            Our Mission and Vision
            <span className="absolute lg:hidden top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-sm lg:text-lg">
            To be the leading diversified and multidisciplinary provider of
            educational and professional services, delivering exceptional value
            to our clients.
          </p>
          <p className="text-sm lg:text-lg">
            Our mission is to build a network of mutually beneficial
            relationships by fostering partnerships and expanding frontiers
            through our superior educational services, professional expertise,
            and capacity-building initiatives. We are committed to reducing
            operational costs, growing businesses, and eradicating poverty
            through our comprehensive and value-driven approach.
          </p>
        </div>
      </section>
      <section className="px-[3%]">
        <div className="relative">
          <h2 className="heading border-l-2 border-[#c70e10] pl-6 max-w-[600px]">
            The values that shape everything we do at OGE Professional Services
          </h2>
          <span className="w-[2px] top-[10px] absolute h-[50px] bg-primary"></span>
        </div>
        <div className="mt-10 px-[5%]">
          <ul className="list-disc grid gap-5 text-sm lg:text-base">
            <li>
              passionate about the quality professional services and seek to
              ensure its continued success
            </li>
            <li>
              strive for excellence and international best practice in all
              aspects of our services
            </li>
            <li>
              are dedicated to the development of our people as well as those of
              our partners and clients
            </li>
            <li>
              are conscious of the need for business and industry to improve the
              environment in which we operate
            </li>
            <li>
              seek to add value to our partners and clients through innovation,
              synergies and partnerships
            </li>
            <li>consider dedicated teamwork as core to our culture</li>
            <li>
              ensure that the imperatives of reducing poverty are encouraged and
              implemented
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
