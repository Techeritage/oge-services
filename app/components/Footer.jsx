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
            className="h-[37px] lg:h-[39px] w-fit text-sm lg:text-base text-white border border-white rounded-full px-3 flex items-center justify-center"
          >
            Contact Us
          </Link>
          <h2 className="heading text-white">
            Ready to take the next step in managing your finances?
          </h2>
          <div>
            <a
              className="text-sm w-fit lg:text-base text-white font-clashmd mb-3 flex items-center gap-1"
              href="mailto:mails@championlogistics.org.ng"
            >
              mails@championlogistics.org.ng{" "}
            </a>
            <div className="grid">
              <a
                className="text-sm w-fit lg:text-base text-white font-clashmd"
                href="tel:+2348186536416"
              >
                +234 (0)818 653 6416
              </a>
              <a
                className="text-sm w-fit lg:text-base text-white font-clashmd"
                href="tel:+2348033204203"
              >
                +234 (0)803 320 4203
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
                  className="text-sm font-clash lg:text-base text-white/85 flex items-center gap-1"
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
                  className="text-sm font-clash lg:text-base text-white/85 flex items-center gap-1"
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
            &copy; {startYear} - {currentYear} All Rights Reserved. Powered by
            H&S
          </p>
          <p className="text-white text-xs text-center lg:text-base">
            We shall not be liable for any business with the website
          </p>
        </div>
      </div>
    </footer>
  );
}
