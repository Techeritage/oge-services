"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function AboutUsPage() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.1, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef2, inView: boxInView2 } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  const { ref: boxRef3, inView: boxInView3 } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <main className="pb-20 mt-[88px] overflow-x-hidden">
      <section
        ref={textRef}
        className="flex flex-col lg:flex-row lg:items-center justify-between px-[3%] py-10 lg:py-20"
      >
        <div
          className={`animate__animated ${
            textInView
              ? "animate__backInDown visible-after-animation"
              : "hidden-before-animation"
          } relative mb-5 lg:mb-0`}
        >
          <h1
            className={`headingBig text-center lg:text-start mx-auto w-fit lg:pl-5 relative`}
          >
            About our <br />
            company
            <span className="absolute lg:hidden top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
          </h1>
          <span className="w-[2px] hidden lg:block top-[10px] absolute h-[50px] bg-primary"></span>
        </div>
        <div>
          <p
            className={`animate__animated ${
              textInView
                ? "animate__bounceInRight visible-after-animation"
                : "hidden-before-animation"
            } max-w-[600px] text-sm lg:text-base`}
          >
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
      <section ref={boxRef} className="px-[3%] py-10 lg:py-20 w-[100%]">
        <h2 className="heading lg:hidden mb-5 text-center lg:text-start relative lg:pl-6">
          Meet Our Founder and <br />Chairman of the Board of Directors
          <span className="absolute lg:hidden top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
        </h2>
        <div className="lg:w-[45%] w-[60%] mr-5 float-left lg:mr-10">
          <Image
            className="rounded-2xl lg:rounded-3xl h-[350px] lg:h-[500px] object-top object-cover"
            src="/mot1.jpg"
            width={700}
            height={500}
            alt="hero image"
          />
        </div>
        <div
          className={`animate__animated float-none ${
            boxInView
              ? "animate__fadeInRight visible-after-animation"
              : "hidden-before-animation"
          } float lg:pt-10`}
        >
          <h2 className="heading hidden lg:block mb-5 text-center lg:text-start relative lg:pl-6">
            Meet Our Founder and <br />Chairman of the Board of Directors
            <span className="absolute lg:hidden top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
          </h2>
          <p className="text-sm lg:text-lg pt-7">
            <span className="font-clashmd">Prof. Oyedokun</span> is a
            multi-talented and multidisciplinary scholar-practitioner of good
            repute with over 23 years of experience. He is a forensic
            accountant, financial development expert, public policy analyst,
            author, international speaker and Professor of Accounting &
            Financial Development at the Lead City University Ibadan, Nigeria.
            He is a Visiting Professor of Accounting and finance at the Business
            School of the Nigerian British University, Nigeria, a Visiting
            Professor of Forensic Accounting and Finance at Charisma University,
            Turks & Caicos Island, West Indies, a visiting Professor of
            Accounting at ANAN University, Jos, Nigeria and an Adjunct Professor
            of Accounting & Finance at Crawford University, Igbesa, Nigeria. He
            was an Adjunct Professor of Accounting at the Department of
            Accounting, Igbinedion University, Okada, Nigeria, McPherson
            University, Oyo State, Nigeria, Coal City University, Enugu State,
            Nigeria, and a Senior Lecturer in the Department of Accounting and
            Department of Taxation of Nasarawa State University, Keffi, Nigeria.
            He was also an adjunct lecturer at Babcock University and
            South-Western University. Prof. Oyedokun was a faculty member for
            the supervision of Postgraduate Students at the University of South
            Africa (UNISA). He is a faculty member at the Joseph Business School
            Chicago and Lagos and an international faculty member at the
            Mississippi State University’s Continuing Education programmes in
            Lagos. He is also an External Examiner for the undergraduate
            Accounting programmes of Abia State University, Uturu Nigeria, Atiba
            University, Oyo, Nigeria, and Dominican University, Ibadan, Nigeria.
            Prof. Oyedokun is a sought-after intellectual, who has presented
            various technical/seminar papers at conferences/training/seminars,
            and he is an examiner to some professional bodies, both in Nigeria
            and abroad. He has authored over 60 professional articles, 25
            conference papers, 20 chapter contributions, and 178 peer-reviewed
            academic articles. He has edited 10 books and published 28 books to
            the glory of God. He has successfully supervised 129 BSc Projects, 7
            PGD Projects, 52 MSc Dissertations, and 24 completed PhD Theses in
            management, accounting, finance, taxation, Project management,
            procurement management, insurance & risk management, and forensic
            accounting & audit in Nigeria and overseas. Prof. Oyedokun is the
            founder of OGE Group and the Principal Partner at Oyedokun Godwin
            Emmanuel & Co (A Firm of Chartered Accountants, Tax Practitioners
            and forensic Auditors), he is an Erudite Contemporary Professor, a
            Consummate Educationist, and a Human Capital Development Expert who
            has taught at all levels of education. He has attended several local
            and international conferences in the last 20 years, including but
            not limited to the programmes at Lagos Business School, Lagos
            Nigeria, Joseph Business School, Chicago, USA., University, Dallas
            Texas, USA, Greenwich University, London, University of Bristol,
            England, University of Johannesburg South Africa, University of
            Kenya, Nairobi, among others. He is currently a Governing Council
            member of the Chartered Institute of Taxation of Nigeria (CITN),
            Business Recovery and Insolvency Practitioners of Nigeria (BRIPAN),
            President of the Association of Forensic Accounting Researchers
            (AFAR), and Council member/Director, Research & Development of
            Institute of Personality Development and Customer Relationship
            Management, Board Chairman of the Association of Certified Fraud
            Examiners (ACFE, Lagos Chapter), Chairman, Board of Diplomates of
            Forensic Accounting & Audit of the Chartered Institute of Forensic
            and Certified Fraud Investigators of Nigerian (CIFCFIN), Chairman,
            Board of Trustees of Institute of Hospitality Accountants & Revenue
            Managers and the Immediate Past Chairman, Ilupeju/Gbagada & District
            Society of the Institute of Chartered Accountants of Nigeria (ICAN)
            among others. Professor Oyedokun attended Osun State College of
            Technology, Esa-Oke for his National Diploma (ND) in Financial
            Studies and Higher National Diploma (HND) in Accountancy, he
            proceeded to the Ekiti State University for his Bachelor of Science
            Education (B.Sc. Ed) in Accounting, while he also attended Olabisi
            Onabanjo University, Ago-Iwoye where bagged his Master of Business
            Administration (MBA Accounting & Finance option), Master of Science
            (M.Sc) in Business & Applied Economics (Finance option) and Doctor
            of Philosophy (Ph.D) in Finance. His quest for further knowledge saw
            him through his studies at Babcock University, Ilishan-Remo where
            bagged his Master of Science (M.Sc) in Accounting, and a Doctor of
            Philosophy (Ph.D) in Accounting. Professor Oyedokun holds a Bachelor
            of Science (B.Sc) in Finance, a Master of Science (M.Sc) in
            Economics, a Master of Laws (LLM) and a Doctor of Philosophy (Ph.D)
            in Forensic Accounting and Audit from Charisma University, TCI, West
            Indies. Professor Oyedokun is also an alumnus of Lead City
            University where he bagged his Bachelor of Laws (LLB), and Master of
            Laws (LLM) and he is currently studying for a Doctor of Philosophy
            (Ph.D) in Law at the same university. He has more than relevant 30
            professional qualifications to his credit. Professor Oyedokun is
            happily married with children.
          </p>
        </div>
      </section>
      <section ref={boxRef3} className="mx-[3%] py-16 lg:py-32">
        <div
          className={`animate__animated ${
            boxInView3
              ? "animate__fadeInRight visible-after-animation"
              : "hidden-before-animation"
          } grid gap-7 lg:gap-10`}
        >
          <h2 className="heading text-center relative">
            Our Mission and Vision
            <span className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-7 h-[2px] bg-primary"></span>
          </h2>
          <div className="mx-auto max-w-[90%] lg:max-w-[80%] border p-3">
            <p className="text-sm lg:text-lg text-center mb-5">
              To be the leading diversified and multidisciplinary provider of
              educational and professional services, delivering exceptional
              value to our clients.
            </p>
            <p className="text-sm lg:text-lg text-center">
              Our mission is to build a network of mutually beneficial
              relationships by fostering partnerships and expanding frontiers
              through our superior educational services, professional expertise,
              and capacity-building initiatives. We are committed to reducing
              operational costs, growing businesses, and eradicating poverty
              through our comprehensive and value-driven approach.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={boxRef2}
        className={`px-[3%] animate__animated ${
          boxInView2
            ? "animate__fadeInUp visible-after-animation"
            : "hidden-before-animation"
        }`}
      >
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
