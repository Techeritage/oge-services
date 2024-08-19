import Image from "next/image";
import Link from "next/link";

const QuickLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
const Legal = [
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms",
  },
];

export default function Footer() {
  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="w-full bg-primary px-[3%] gap-10 py-14 flex lg:flex-row flex-col lg:items-center">
        <div className="grid gap-8 basis-1/2">
          <Link
            href="/contact"
            className="h-[37px] hover:bg-white hover:text-primary transition-all duration-200 lg:h-[39px] w-fit text-sm lg:text-base text-white border border-white rounded-full px-3 flex items-center justify-center"
          >
            Contact Us
          </Link>
          <h2 className="heading text-white w-[85%]">
            Ready to take the next step in managing your finances?
          </h2>
          <div>
            <a
              className="hover:opacity-85 hidden text-sm w-fit lg:text-base text-white font-clashmd mb-3 items-center gap-1"
              href="mailto:mails@championlogistics.org.ng"
            >
              mails@championlogistics.org.ng{" "}
            </a>
            <div className="grid">
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="tel:+2348132445878"
              >
                +234 (0)813 244 5878
              </a>
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="tel:+2348033737184"
              >
                +234 (0)803 373 7184
              </a>
              <a
                className="hover:opacity-85 text-sm mb-10 w-fit lg:text-base text-white font-clashmd"
                href="tel:+234 805 586 3944"
              >
                +234 (0)805 586 3944
              </a>
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="mailto:info@ogeprofessionals.com"
              >
                info@ogeprofessionals.com
              </a>
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="mailto:info@oyedokungodwin.com"
              >
                info@oyedokungodwin.com
              </a>
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="mailto:ogebsng@gmail.com "
              >
                ogebsng@gmail.com
              </a>
              <a
                className="hover:opacity-85 text-sm w-fit lg:text-base text-white font-clashmd"
                href="mailto:ogeprofessionals@gmail.com"
              >
                ogeprofessionals@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col lg:flex-row gap-7">
          <div className="basis-1/2">
            <p className="text-sm font-clashmd text-white lg:text-base text-primaryLight mb-3">
              QuickLinks
            </p>
            <div className="grid gap-2">
              {QuickLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  className="text-sm hover:opacity-85 font-clash lg:text-base text-white/85 flex items-center gap-1"
                >
                  {link.name}{" "}
                </Link>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <p className="text-sm text-white font-clashmd lg:text-base text-primaryLight mb-3">
              Legal
            </p>
            <div className="grid gap-2">
              {Legal.map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  className="text-sm hover:opacity-85 font-clash lg:text-base text-white/85 flex items-center gap-1"
                >
                  {link.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center lg:justify-end bg-primary px-[3%] pb-10">
        <div className="flex gap-3 lg:gap-5 flex-col lg:flex-row items-center">
          <p className="text-white text-xs lg:text-base text-center">
            &copy; {startYear} - {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
