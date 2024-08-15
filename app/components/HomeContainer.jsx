"use client";
import Image from "next/image";
import {
  Book1,
  CardPos,
  DocumentText,
  LampCharge,
  MedalStar,
  PercentageCircle,
  Profile2User,
  WalletSearch,
} from "iconsax-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

export default function HomeContainer() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.4, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });
  const { ref: boxRef2, inView: boxInView2 } = useInView({
    threshold: 0.4, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref11, inView: inView11 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ref12, inView: inView12 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <main className="lg:mt-3 pb-20 overflow-x-hidden pt-[88px]">
      <div className="mx-[2%] lg:mx-[3%] w-fit h-fit relative">
        <Image
          className="lg:rounded-3xl hidden lg:block rounded-2xl h-[700px] object-cover"
          src="https://ik.imagekit.io/krr3p3joi/tr:w-1100,h-521/pexels-yankrukov-7794060.jpg?updatedAt=1723465967641"
          width={1500}
          height={521}
          alt="hero image"
          quality={100}
        />
        <Image
          className="lg:rounded-3xl lg:hidden rounded-2xl h-[700px] object-cover object-right"
          src="https://ik.imagekit.io/krr3p3joi/tr:w-500,h-521/pexels-yankrukov-7794060.jpg?updatedAt=1723465967641"
          width={1500}
          height={521}
          alt="hero image"
          quality={100}
        />
        <div className="absolute rounded-3xl top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <div
          ref={textRef}
          className="absolute left-5 right-7 lg:left-20 bottom-20"
        >
          <h1
            className={`animate__animated ${
              textInView
                ? "animate__backInDown visible-after-animation"
                : "hidden-before-animation"
            } text-white leading-[40px] font-clashmd text-[42px] lg:text-[70px] lg:font-clashsm lg:leading-[70px] mb-5`}
          >
            Our Expertise, <br />
            Your Success
          </h1>
          <div
            className={`animate__animated ${
              textInView
                ? "animate__bounceInRight visible-after-animation"
                : "hidden-before-animation"
            } grid lg:gap-7 gap-5 lg:pl-10 lg:border-l-2 border-primary`}
          >
            <p className="text-white bodyText pl-5 lg:pl-0 lg:border-l-0 border-l-2 border-primary">
              Empowering your financial decisions with <br />
              precision and integrity.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
              <Link className="w-full lg:w-fit" href="/contact">
                <Button
                  text="Contact us"
                  className="bg-primary justify-center w-full lg:justify-start font-clashmd lg:w-fit text-base text-white gap-2 flex rounded-full items-center py-3 px-5"
                  icon={true}
                />
              </Link>
              <Link className="w-full lg:w-fit" href="/services">
                <Button
                  text="Browse all services"
                  className="bg-white font-clashmd justify-center lg:justify-start w-full lg:w-fit text-base text-black gap-1 flex rounded-full items-center py-3 px-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-[3%] py-32 flex items-center flex-col-reverse lg:flex-row gap-10">
        <div className="basis-1/2">
          <Image
            className="rounded-2xl lg:rounded-3xl h-[350px] lg:h-[500px] object-cover"
            src="/about2.jpg"
            width={700}
            height={500}
            alt="hero image"
          />
        </div>
        <div
          ref={boxRef}
          className={`animate__animated ${
            boxInView
              ? "animate__fadeInRight visible-after-animation"
              : "hidden-before-animation"
          } basis-1/2 grid gap-7 lg:gap-3`}
        >
          <h2 className="heading border-l-2 border-primary pl-6">
            Discover Excellence <br /> with OGE Professional Services
          </h2>
          <p className="text-sm lg:text-lg">
            At OGE Professional Services, we are committed to delivering
            excellence in financial and business management. With a team of
            seasoned professionals, we provide a comprehensive range of services
            designed to meet the unique needs of our clients. Our mission is to
            empower businesses with the tools and expertise they need to thrive
            in today's dynamic market. We pride ourselves on our integrity,
            innovation, and dedication to client success. Our services span from
            statutory audits and forensic investigations to business recovery
            and tax advisory, ensuring that every aspect of your financial
            health is meticulously managed.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f4]/50 py-20 px-[3%] lg:gap-7 gap-7 lg:gap-y-16 grid lg:grid-cols-3">
        <div className="grid gap-10 lg:gap-0">
          <h2
            ref={ref1}
            className={`animate__animated ${
              inView1
                ? "animate__fadeInLeft visible-after-animation"
                : "hidden-before-animation"
            } heading text-center lg:text-start mb-10 lg:mb-0`}
          >
            Services Tailored <br /> to Your Needs
          </h2>
          <Link href="services">
            <Button
              text="See all"
              icon={true}
              className="bg-primary hidden  lg:mt-[-80px] h-[50px] lg:h-[56px] gap-5 justify-between text-base text-white lg:flex rounded-full items-center py-3 px-4 max-w-[180px] lg:max-w-[200px]"
            />
          </Link>
        </div>
        <div className="w-full lg:max-w-[500px] lg:mx-0 rotate-[-2deg] lg:rotate-[-5deg] grid gap-5 shadow-sm rounded-2xl bg-primary h-[300px] p-10">
          <div className="flex items-center gap-4">
            <DocumentText size="48" color="white" variant="Broken" />
            <h3 className="text-base lg:text-2xl font-clashmd text-white">
              Statutory Audit
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg text-white">
              Ensure compliance with regulatory requirements through
              comprehensive statutory audits, providing you with peace of mind
              and confidence in your financial statements.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[500px] grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <Book1 size="75" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl font-clashmd">
              Bookkeeping and Accounting Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Streamline your financial operations with our expert bookkeeping
              and accounting services, ensuring accuracy and efficiency in your
              financial records.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[500px] grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <CardPos size="48" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl font-clashmd">
              Payroll Preparation Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Simplify your payroll processes with our reliable and efficient
              payroll preparation services, ensuring accuracy and compliance.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[500px] grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <WalletSearch size="48" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl font-clashmd">
              Forensic Accounting Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Detect and prevent fraud with our specialized forensic accounting
              services, providing you with robust protection against financial
              misconduct.
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[500px] grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <PercentageCircle size="48" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl font-clashmd">Tax Planning</h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Optimize your tax strategy with our comprehensive tax planning,
              advisory, filing, and compliance services, ensuring you meet all
              regulatory requirements.
            </p>
          </div>
        </div>
        <Link href="/services">
          <Button
            text="See all"
            icon={true}
            className="bg-primary lg:hidden mx-auto lg:mt-[-80px] h-[50px] lg:h-[56px] gap-5 justify-between text-base text-white flex rounded-full items-center py-3 px-4 min-w-[180px] lg:max-w-[200px]"
          />
        </Link>
      </section>
      <section className="py-20 px-[3%]">
        <h2
          ref={boxRef2}
          className={`animate__animated ${
            boxInView2
              ? "animate__fadeInRight visible-after-animation"
              : "hidden-before-animation"
          } heading text-center relative`}
        >
          Your Trusted Partner in <br />
          Financial Excellence
          <span className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
        </h2>
        <div className="relative flex flex-col lg:flex-row justify-end mt-16">
          <Image
            className="rounded-2xl lg:rounded-3xl object-cover"
            src="/about3.jpg"
            width={800}
            height={2000}
            alt="hero image"
          />
          <div className="lg:absolute mt-[-50px] lg:mt-0 flex flex-col items-center lg:flex-row gap-7 left-0 lg:bottom-20">
            <div className="rounded-2xl border bg-white grid gap-3 shadow-md max-w-[95%] lg:max-w-[350px] px-5 py-10">
              <LampCharge size="42" color="#c70e10" variant="Broken" />
              <h3 className="text-base lg:text-2xl font-clashmd">
                Comprehensive <br />
                Solutions
              </h3>
              <p className="text-sm lg:text-lg">
                Our wide range of services ensures all your financial needs are
                covered, from bookkeeping and audits to business recovery and
                tax planning.
              </p>
            </div>
            <div className="rounded-2xl border bg-white grid gap-3 shadow-md max-w-[95%] lg:max-w-[350px] px-5 py-10">
              <Profile2User size="42" color="#c70e10" variant="Broken" />
              <h3 className="text-base lg:text-2xl font-clashmd">
                Expertise <br />
                You Can Trust
              </h3>
              <p className="text-sm lg:text-lg">
                With a team of seasoned professionals, we provide expert advice
                and solutions tailored to your specific business requirements,
                ensuring accuracy and compliance.
              </p>
            </div>
            <div className="rounded-2xl border bg-white grid gap-3 shadow-md max-w-[95%] lg:max-w-[350px] px-5 py-10">
              <MedalStar size="42" color="#c70e10" variant="Broken" />
              <h3 className="text-base lg:text-2xl font-clashmd">
                Client-Centric <br />
                Approach
              </h3>
              <p className="text-sm lg:text-lg">
                We prioritize your success, offering personalized services and
                proactive support to help you achieve your financial goals and
                drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-[3%]">
        <h2
          ref={ref11}
          className={`animate__animated ${
            inView11
              ? "animate__fadeInLeft visible-after-animation"
              : "hidden-before-animation"
          } heading text-center relative`}
        >
          Meet Our Expert Team
          <span className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
        </h2>
        <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10 lg:gap-5">
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot1.jpg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Prof. Godwin Oyedokun
            </p>
            <p className="lg:text-base text-xs">Founder/Principal Partner</p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot2.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Dr. Titilayo Fowokan
            </p>
            <p className="lg:text-base text-xs">
              Partner- Tax and Forensics Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot3.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Dr. Emeke Nwabuzor
            </p>
            <p className="lg:text-base text-xs">
              Partner- Audit and Tax Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot10.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Dr. Taiwo Olakunle
            </p>
            <p className="lg:text-base text-xs">Chief Operating Officer</p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot5.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Mulikat Adeyemi
            </p>
            <p className="lg:text-base text-xs">
              Senior Manager, Audit, Investigation and Forensic Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot4.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Mayowa Oyedokun
            </p>
            <p className="lg:text-base text-xs">
              Senior Manager- Research and Technical Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot7.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Temitayo Adesumboye
            </p>
            <p className="lg:text-base text-xs">
              Senior Manager- Regulatory Services and Compliance
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 object-top lg:rounded-3xl object-cover"
              src="/mot8.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Sunday Ighaede,
            </p>
            <p className="lg:text-base text-xs">
              Senior Manager- Research and Technical Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot9.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Fasisi Olabisi
            </p>
            <p className="lg:text-base text-xs">
              Manager - Research and Compliance
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 lg:rounded-3xl object-cover"
              src="/mot6.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Diai David
            </p>
            <p className="lg:text-base text-xs">
              Manager- Research and Technical Services
            </p>
          </div>
          <div>
            <Image
              className="rounded-2xl h-[350px] lg:h-[300px] mb-1 object-top lg:rounded-3xl object-cover"
              src="/mot11.jpeg"
              width={400}
              height={2000}
              alt="hero image"
            />
            <p className="capitalize text-sm lg:text-lg font-clashmd">
              Jesutobi Oladiran
            </p>
            <p className="lg:text-base text-xs">
              Manager, Audit, Investigation and Forensic Services
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
