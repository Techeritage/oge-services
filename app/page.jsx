import Image from "next/image";
import Button from "./components/Button";
import {
  Book1,
  CardPos,
  DocumentText,
  PercentageCircle,
  WalletSearch,
} from "iconsax-react";

export default function Home() {
  return (
    <main className="lg:mt-3 pb-20">
      <div className="mx-[2%] lg:mx-[3%] w-fit h-fit relative">
        <Image
          className="lg:rounded-3xl rounded-2xl h-[700px] object-cover object-top"
          src="/hero.jpg"
          width={2000}
          height={2000}
          alt="hero image"
        />
        <div className="absolute rounded-3xl top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <div className="absolute left-5 right-7 lg:left-20 bottom-20">
          <h1 className="text-white leading-[40px] font-clashmd text-[42px] lg:text-[70px] lg:font-clashsm lg:leading-[70px] mb-5">
            Our Expertise, <br />
            Your Success
          </h1>
          <div className="grid lg:gap-7 gap-5 lg:pl-10 lg:border-l-2 border-[#c70e10]">
            <p className="text-white bodyText pl-5 lg:pl-0 lg:border-l-0 border-l-2 border-[#c70e10]">
              Empowering your financial decisions with <br />
              precision and integrity.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
              <Button
                text="Contact us"
                className="bg-primary justify-center w-full lg:justify-start font-clashmd lg:w-fit text-base text-white gap-2 flex rounded-full items-center py-3 px-5"
                icon={true}
              />
              <Button
                text="Browse all services"
                className="bg-white font-clashmd justify-center lg:justify-start w-full lg:w-fit text-base text-black gap-1 flex rounded-full items-center py-3 px-5"
              />
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
            height={2000}
            alt="hero image"
          />
        </div>
        <div className="basis-1/2 grid gap-7 lg:gap-3">
          <h2 className="heading border-l-2 border-[#c70e10] pl-6">
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
          <h2 className="heading text-center lg:text-start mb-10 lg:mb-0">
            Services Tailored <br /> to Your Needs
          </h2>
          <Button
            text="See all"
            icon={true}
            className="bg-primary hidden  lg:mt-[-80px] h-[50px] lg:h-[56px] gap-5 justify-between text-base text-white lg:flex rounded-full items-center py-3 px-4 max-w-[180px] lg:max-w-[200px]"
          />
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
      </section>
      <section>
        <h2 className="heading">
          Your Trusted Partner in Financial Excellence
        </h2>
      </section>
    </main>
  );
}
