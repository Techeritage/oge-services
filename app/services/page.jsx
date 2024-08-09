import React from "react";
import {
  Book1,
  CardPos,
  DocumentText,
  DocumentText1,
  HeartSearch,
  LampCharge,
  PenAdd,
  People,
  PercentageCircle,
  SearchNormal1,
  Setting2,
  ShieldSearch,
  ShieldTick,
  StatusUp,
  WalletSearch,
} from "iconsax-react";
import Link from "next/link";
import Button from "../components/Button";

export default function ServicesPage() {
  return (
    <main className="min-h-[100vh] py-20 px-[3%]">
      <h1 className="headingBig lg:text-5xl text-center mx-auto">
        Expert <span className="text-primary">Financial and Business</span>{" "}
        Services for Your Success
      </h1>
      <p className="lg:max-w-[50%] text-center mx-auto mt-3 text-xs lg:text-sm">
        At OGE Services, we provide a comprehensive suite of services designed
        to address all your financial, regulatory, and business management
        needs. Explore our offerings to discover how we can support your
        organization with expertise and dedication.
      </p>

      <section className="pt-28 pb-20 lg:gap-7 gap-7 lg:gap-y-16 grid lg:grid-cols-2">
        <div className="w-full lg:mx-0 rotate-[-2deg] lg:rotate-[-5deg] grid gap-5 rounded-2xl bg-primary h-[300px] p-10">
          <div className="flex items-center gap-4">
            <DocumentText size="50" color="white" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd text-white">
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
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <Book1 size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
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
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <CardPos size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
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
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <WalletSearch size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
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
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <PercentageCircle size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Tax Planning
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Optimize your tax strategy with our comprehensive tax planning,
              advisory, filing, and compliance services, ensuring you meet all
              regulatory requirements.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <ShieldTick size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Assurance Engagement
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              We offer assurance services to enhance the reliability of your
              financial information. Whether it's a review, examination, or
              agreed-upon procedures, we deliver objective insights that
              strengthen your financial credibility.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <StatusUp size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Business Recovery, Turnaround, and Receivership
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Facing financial distress? Our business recovery and turnaround
              services provide the strategic guidance needed to restore
              stability. We offer tailored solutions, including receivership, to
              protect your assets and ensure business continuity.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <PenAdd size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Company Secretaryship
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              We provide comprehensive company secretarial services, ensuring
              your business complies with legal and regulatory obligations. From
              board meetings to statutory filings, we handle all aspects of
              corporate governance with professionalism.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <Setting2 size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Financial Control and Business Management Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Our financial control and business management services help you
              maintain effective financial oversight. We provide support in
              budgeting, financial planning, and management reporting to drive
              your business towards success.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <HeartSearch size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Financial Health Check
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Get a clear picture of your financial standing with our financial
              health check services. We assess your financial situation and
              provide actionable recommendations to improve your financial
              health and achieve your goals.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <ShieldSearch size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Fraud and Forensic Audit
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Our fraud and forensic audit services are designed to detect and
              prevent fraudulent activities. We conduct thorough audits to
              uncover irregularities and implement strategies to safeguard your
              organization against fraud.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <SearchNormal1 size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Fraud and Forensic Investigation
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              We specialize in fraud and forensic investigations to identify and
              address fraudulent behavior. Our team provides comprehensive
              investigations, detailed reporting, and expert testimony to
              support legal proceedings.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <PercentageCircle size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Fraud Risk Management
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Protect your business with our fraud risk management services. We
              help you identify potential fraud risks and implement effective
              controls to minimize the impact of fraud on your organization.
            </p>
          </div>
        </div>
        {/** */}
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <ShieldTick size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Internal Control and Audit Services and Outsourcing
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Strengthen your internal controls with our audit and outsourcing
              services. We assess your current systems, identify weaknesses, and
              provide recommendations to improve your control environment and
              reduce risks.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <LampCharge size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Management Consultancy Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Our management consultancy services offer strategic insights to
              drive your business forward. We assist with business planning,
              process optimization, and performance improvement to help you
              achieve your organizational goals.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <DocumentText1 size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Regulatory and Advisory Services
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Navigate complex regulations with our regulatory and advisory
              services. We provide expert advice on compliance matters and help
              you stay up-to-date with changing laws and industry standards.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <People size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Staff Outsourcing
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Our staff outsourcing services offer flexible staffing solutions
              to meet your business needs. Whether you require temporary or
              permanent staff, we provide skilled professionals to support your
              operations.
            </p>
          </div>
        </div>
        <div className="w-full border grid gap-5 shadow-sm rounded-2xl bg-white h-[300px] p-10">
          <div className="flex items-center gap-4">
            <Book1 size="50" color="#c70e10" variant="Broken" />
            <h3 className="text-base lg:text-2xl lg:max-w-[70%] font-clashmd">
              Training
            </h3>
          </div>
          <div>
            <p className="text-sm lg:text-lg">
              Enhance your team's capabilities with our training services. We
              offer specialized training programs in finance, compliance, and
              management, designed to empower your employees with the skills
              they need to excel.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-[3%] grid gap-14">
        <h2 className="headingBig mx-auto lg:text-5xl text-center">
          Ready to Partner <br /> with Experts?
        </h2>
        <Link href="/contact">
          <Button
            text="Contact Us"
            icon={true}
            className="bg-primary mx-auto h-[50px] lg:h-[56px] gap-5 justify-between text-base text-white flex rounded-full items-center py-3 px-4 min-w-[180px] lg:min-w-[280px]"
          />
        </Link>
      </section>
    </main>
  );
}
