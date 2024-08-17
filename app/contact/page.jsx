"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function ContactPage() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <main className="px-[3%] pb-20 pt-[88px] min-h-[100vh] overflow-x-hidden">
      <h2
        ref={textRef}
        className={`animate__animated ${
          textInView
            ? "animate__backInDown visible-after-animation"
            : "hidden-before-animation"
        } headingBig py-10`}
      >
        Financial Solutions <br /> Made{" "}
        <span className="text-primary">Efficient</span> <br /> and{" "}
        <span className="text-primary">Effective</span>.
      </h2>
      <section className="grid gap-16 lg:gap-28 ">
        <div className="grid gap-5">
          <div className="grid gap-1">
            <h3 className="bodyText font-clashmd text-primary">Call us</h3>
            <p className="text-sm lg:text-base">
              Call our team Monday to Friday 8am - 5pm
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base text-black font-clashmd"
              href="tel:+2348132445878"
            >
              +234 (0)813 244 5878
            </a>
            <a
              className="text-base text-black font-clashmd"
              href="tel:+2348033737184"
            >
              +234 (0)803 373 7184
            </a>
            <a
              className="text-base text-black font-clashmd"
              href="tel:+234 805 586 3944"
            >
              +234 (0)805 586 3944
            </a>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-1">
            <h3 className="bodyText font-clashmd text-primary">Chat with us</h3>
            <p className="text-sm lg:text-base">
              Have questions or need assistance? Send us an email
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base text-black font-clashmd"
              href="mailto:info@ogeprofessionals.com"
            >
              info@ogeprofessionals.com
            </a>
            <a
              className="text-base text-black font-clashmd"
              href="mailto:info@oyedokungodwin.com"
            >
              info@oyedokungodwin.com
            </a>
            <a
              className="text-base text-black font-clashmd"
              href="mailto:ogebsng@gmail.com "
            >
              ogebsng@gmail.com
            </a>
            <a
              className="text-base text-black font-clashmd"
              href="mailto:ogeprofessionals@gmail.com"
            >
              ogeprofessionals@gmail.com
            </a>
          </div>
        </div>
        <div className="hidden gap-5">
          <div className="grid gap-1">
            <h3 className="bodyText font-clashmd text-primary">Chat with us</h3>
            <p className="text-sm lg:text-base">
              Speak to our team via live chat
            </p>
          </div>
          <div className="grid gap-1">
            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href="mailto:mails@championlogistics.org.ng"
            >
              mails@championlogistics.org.ng{" "}
              <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
            </a>

            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on Instagram
              <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
            </a>
            <a
              className="text-base text-black font-clashmd flex items-center gap-1"
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shoot us a tweet
              <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3 className="bodyText font-clashmd text-primary">Visit us</h3>
            <p className="text-sm lg:text-base">
              Meet with us in person at any of our offices.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <p className="text-primary bodyText">Lagos Office</p>
              <a
                className="text-base max-w-[320px] lg:max-w-[440px] text-black font-clashmd flex items-center gap-1"
                href="https://www.google.com/maps/place/15, Isheri Road, Avis Bus Stop, Aguda, Ogba - Ikeja, Lagos State."
              >
                15, Isheri Road, Avis Bus Stop, Aguda, Ogba - Ikeja, Lagos
                State.
                <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
              </a>
            </div>

            <div className="grid gap-1">
              <p className="text-primary bodyText">Ibadan Office</p>
              <div className="grid gap-2">
                <a
                  className="text-base max-w-[320px] lg:max-w-[440px] text-black font-clashmd flex items-center gap-1"
                  href="https://www.google.com/maps/place/15, Isheri Road, Avis Bus Stop, Aguda, Ogba - Ikeja, Lagos State."
                >
                  2nd Floor, No 93, UI-Ojoo Road, Opposite UI International
                  Conference Centre, University of Ibadan Second Gate, Ibadan,
                  Oyo State, Nigeria
                  <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
                </a>
                <a
                  className="text-base max-w-[320px] lg:max-w-[440px] text-black font-clashmd flex items-center gap-1"
                  href="https://www.google.com/maps/place/15, Isheri Road, Avis Bus Stop, Aguda, Ogba - Ikeja, Lagos State."
                >
                  No. 48 Ogunleye Avenue, off Joyce ‘B’ Road, Oke-Ado, Ibadan,
                  Oyo State, Nigeria
                  <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
                </a>
              </div>
            </div>

            <div className="grid gap-1">
              <p className="text-primary bodyText">Akute Office</p>
              <a
                className="text-base max-w-[320px] lg:max-w-[440px] text-black font-clashmd flex items-center gap-1"
                href="https://www.google.com/maps/place/15, Isheri Road, Avis Bus Stop, Aguda, Ogba - Ikeja, Lagos State."
              >
                14 Timoni Street, Off Ishasi Road, Akute, Ogun State, Nigeria
                <Image src="/arrow3.svg" width={20} height={20} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
