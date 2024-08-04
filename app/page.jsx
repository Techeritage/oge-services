import Image from "next/image";
import Button from "./components/Button";

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
          <div className="grid lg:gap-7 gap-5 pl-4 lg:pl-10 border-l-2 border-[#c70e10]">
            <p className="text-white bodyText">
              Empowering your financial decisions with <br />
              precision and integrity.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
              <Button
                text="Contact us"
                className="bg-[#c70e10] justify-center w-full lg:justify-start font-clashmd lg:w-fit text-base text-white gap-2 flex rounded-full items-center py-3 px-5"
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
      <section className="mx-[3%] py-32 flex items-center gap-10">
        <div className="basis-1/2">
          <Image
            className="lg:rounded-3xl h-[500px] object-cover"
            src="/about2.jpg"
            width={700}
            height={2000}
            alt="hero image"
          />
        </div>
        <div className="basis-1/2 grid gap-3">
          <h2 className="text-3xl font-clashsm border-l-[4px] border-[#c70e10] pl-6">
            Discover Excellence <br /> with OGE Professional Services
          </h2>
          <p className="text-lg">
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
    </main>
  );
}
