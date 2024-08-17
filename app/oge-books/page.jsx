"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OgeBookPage() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <main className="min-h-[100vh] overflow-x-hidden py-20 px-[3%] pt-[150px]">
      <h1
        ref={textRef}
        className={`animate__animated ${
          textInView
            ? "animate__backInDown visible-after-animation"
            : "hidden-before-animation"
        } headingBig lg:text-5xl text-center mx-auto`}
      >
        Overview of <span className="text-primary">Oge Books/Monographs</span>{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
        <Image src="/book1.jpeg" width={200} height={200} alt="books cover" />
        <Image src="/book2.jpeg" width={200} height={200} alt="books cover" />
        <Image src="/book3.jpeg" width={200} height={200} alt="books cover" />
        <Image src="/book7.jpeg" width={200} height={200} alt="books cover" />
        <Image src="/book5.jpeg" width={200} height={200} alt="books cover" />
        <Image src="/book9.jpeg" width={200} height={200} alt="books cover" />
      </div>
      <div className="py-14">
        <h3 className="text-base lg:text-lg font-clashmd mb-4">
          Authored Books
        </h3>
        <ol className="list-decimal pl-5 grid gap-2 text-sm lg:text-base">
          <li>
            <strong>Oyedokun, G. E. (2017).</strong>{" "}
            <em>Fundamentals of Leadership.</em> Lagos, Nigeria. ASCO
            Publishers. ISBN: 978-978-55513-6-5
          </li>
          <li>
            <strong>Oyedokun, G. E. (2017).</strong>{" "}
            <em>
              Compendium of Writings in Forensic Accounting & Fraud Examination.
            </em>{" "}
            Lagos, Nigeria. ASCO Publishers. ISBN: 978-978-55513-7-2
          </li>
          <li>
            <strong>Oyedokun, G. E. (2017).</strong>{" "}
            <em>
              Practical Approach to Information & Communication Technology.
            </em>{" "}
            Lagos, Nigeria. ASCO Publishers. ISBN: 978-978-56462-6-9
          </li>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            <Image
              src="/book25.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book26.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book27.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book28.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book29.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book30.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
          </div>
          <li>
            <strong>Oyedokun, G. E. (2018).</strong>{" "}
            <em>Fundamentals of Forensic Accounting & Fraud Investigation.</em>{" "}
            Lagos, Nigeria. Aaron & Hur Publishing. ISBN: 978-978-56462-6-9
          </li>
          <li>
            <strong>Oyedokun, G. E. (2018).</strong>{" "}
            <em>
              Ethical Justification for Creative Accounting: Fraud & Forensic
              Accountants’ Perspectives.
            </em>{" "}
            Lagos, Nigeria. Aaron & Hur Publishing. ISBN: 978-978-56462-9-2
          </li>
          <li>
            <strong>Fowokan, T. E. & Oyedokun, G. E. (2019).</strong>{" "}
            <em>International Taxation: Nigerian Perspectives.</em> Lagos,
            Nigeria. Aaron & Hur Publishing. ISBN: 978-978-5669-3-9
          </li>
          <li>
            <strong>Oyedokun, G. E. (2019).</strong>{" "}
            <em>Imperatives of Tax Audit & Investigation.</em> Lagos, Nigeria.
            Aaron & Hur Publishing. ISBN: 978-978-56481-2-6
          </li>
          <li>
            <strong>Oyedokun, G. E. (2019).</strong>{" "}
            <em>Approaches to Entrepreneurship Development.</em> Lagos, Nigeria.
            Aaron & Hur Publishing. ISBN: 978-978-56481-0-2
          </li>
          <li>
            <strong>Oyedokun, G. E. (2019).</strong>{" "}
            <em>Business Policy, Strategy & Ethics.</em> Lagos, Nigeria. Aaron &
            Hur Publishing. ISBN: 978-978-56481-1-9
          </li>
          <li>
            <strong>Oyedokun, G. E. (2019).</strong>{" "}
            <em>
              Trite in Taxation Innovation: Following Organised World Order
              Knowledge and Nobility.
            </em>{" "}
            Aaron & Hur Publishing. ISBN: 978-978-973-317-0
          </li>
          <li>
            <strong>Oyedokun, G. E. (2020).</strong>{" "}
            <em>Research Methods for Management Scientists.</em> Lagos, Nigeria.
            Aaron & Hur Publishing. ISBN: 978-978-56481-3-3
          </li>
          <li>
            <strong>Mainoma, M.A. & Oyedokun, G.E. (2020).</strong>{" "}
            <em>
              Guidance on Due-Diligent War in Nigeria: A Forensic Accounting
              Approach to Fight against Corruption.
            </em>{" "}
            Lagos. Nigeria. Association of Forensic Accounting Researcher
            (AFAR). ISBN: 9789789787326
          </li>
          <li>
            <strong>Oyedokun, G.E. & Ilo, B.M. (2020).</strong>{" "}
            <em>Financial Derivatives: Theory and Practice.</em> Lagos. Nigeria.
            OGE Business School Publisher. ISBN: 978-978-981-670-5
          </li>
          <li>
            <strong>Oyedokun, G. E. (2020).</strong>{" "}
            <em>Fundamentals of Forensic Accounting & Fraud Investigation.</em>{" "}
            Lagos, Nigeria. 2nd Edition. OGE Business School Publisher, Lagos.
            Nigeria. ISBN: 978-978-56462-6-9
          </li>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            <Image
              src="/book25.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book26.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book27.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book28.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book29.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
            <Image
              src="/book30.jpeg"
              width={400}
              height={200}
              alt="books cover"
            />
          </div>
          <li>
            <strong>Moloi, T. & Oyedokun, G. (2021).</strong>{" "}
            <em>Enterprise Risk Management and Fraud Examination Processes.</em>{" "}
            OGE Business School Publisher: Lagos Nigeria ISBN: 978-978-986-393-8
          </li>
          <li>
            <strong>Yinusa, G.O., Oyedokun, G.E. & Ariyibi, A.B (2021).</strong>{" "}
            <em>
              Financial Intermediation: Institutions and Market Operations.
            </em>{" "}
            OGE Business School Publisher: Lagos Nigeria ISBN-978-978-984-647-4
          </li>
          <li>
            <strong>Oyedokun, G.E. (2022).</strong>{" "}
            <em>
              Determinants of Forensic Accounting Techniques and Theories.
            </em>{" "}
            OGE Business School Publisher, Lagos. Nigeria. ISBN:
            978-978-970-696-9
          </li>
          <li>
            <strong>Oyedokun, G.E. (2022).</strong>{" "}
            <em>Environmental, Social and Human Resource Accounting.</em> OGE
            Business Publisher, Lagos Nigeria ISBN: 978-978-790-683-5
          </li>
          <li>
            <strong>
              Aggreh, M., Muhammed, N., and Oyedokun, G.E. (2023).
            </strong>{" "}
            <em>Snapshot of Financial Accounting: The Beginners’ Guide.</em> OGE
            Business School Publisher, Lagos, Nigeria. ISBN: 978-978-995-429-2
          </li>
          <li>
            <strong>
              Oyedokun, G.E., Kujore, O.A., Dopemu, O.S., & Famuyiwa, O.A.
              (2023).
            </strong>{" "}
            <em>Imperative of Forensic Audit and Internal Control System.</em>{" "}
            Lagos. Nigeria. OGE Business School Publisher. ISBN:
            978-978-792-880-6
          </li>
          <li>
            <strong>
              Oyedokun, G.E., Dopemu, O.S., Kujore, O.A., & Famuyiwa, O.A.
              (2023).
            </strong>{" "}
            <em>
              Understanding Financial and Tax Analysis: Theory and Practice.
            </em>{" "}
            Lagos. Nigeria. OGE Business School Publisher. ISBN:
            978-978-981-671-2
          </li>
          <li>
            <strong>
              Oyedokun, G.E. & Famuyiwa, O.A., Dopemu, O.S., & Kujore, O.A.
              (2023).
            </strong>{" "}
            <em>Contemporary Auditing and Assurance Engagements.</em> Lagos.
            Nigeria. OGE Business School. ISBN: 978-978-981-673-6
          </li>
          <li>
            <strong>Oyedokun, G.E. & Adewumi, A. M. (2024).</strong>{" "}
            <em>Universal and Electronic Banking: Theory and Practice.</em> OGE
            Business School. ISBN: 978-978-785-308-5
          </li>
          <li>
            <strong>
              Oyedokun, G.E., Dopemu, O.S., & Oladejo, O.J.A (2024).
            </strong>{" "}
            <em>Fundamentals of Oil and Gas Accounting.</em> OGE Business
            School. ISBN: 978-978-785-306-1
          </li>
          <li>
            <strong>Dopemu, O.S., & Oyedokun, G.E. (2024).</strong>{" "}
            <em>Oil and Gas Taxation in Nigeria.</em> OGE Business School. ISBN:
            978-978-785-307-8
          </li>
          <li>
            <strong>Oyedokun, G.E & Adeolu-Akande, M.A. (2024).</strong>{" "}
            <em>
              Fundamentals of Leadership, Environment and Sustainable
              Development.
            </em>{" "}
            OGE Business School Publisher, Lagos. Nigeria. ISBN:
            978-978-991-706-8
          </li>
          <li>
            <strong>Oyedokun, G. E. (2024).</strong>{" "}
            <em>Fundamentals of Forensic Accounting & Fraud Investigation.</em>{" "}
            Lagos, Nigeria. 3rd Edition. OGE Business School Publisher, Lagos.
            Nigeria. ISBN: 978-978-56462-6-9
          </li>
          <li>
            <strong>Oyedokun, G. E. (2024).</strong>{" "}
            <em>
              Accountability and Smartness in Transparency: Accuracy Beyond
              Expected Yield.
            </em>{" "}
            OGE Business School Publisher, Lagos. Nigeria. ISBN:
            978-978-768-410-8
          </li>
          <li>
            <strong>
              Oyedokun, G.E., Dopemu, O.S., & Adejuwo, O.O. (2024).
            </strong>{" "}
            <em>Cost and Management Accounting: Concepts and Analysis.</em> OGE
            Business School Publisher, Lagos. Nigeria. ISBN: 978-978-768-411-5
          </li>
        </ol>
      </div>
      <div className="py-14">
        <h3 className="text-base lg:text-lg font-clashmd mb-4">Edited Books</h3>
        <ol className="list-decimal pl-5 grid gap-2 text-sm lg:text-base">
          <li>
            <strong>
              Dandago, K. I., Salawu, R. O., Oyedokun, G. E., & Akioyamen, P. O.
              (2018).
            </strong>{" "}
            <em>Taxation and Economic Reality (Eds).</em> Book of
            Abstract/Conference Proceedings of the CITN/NSUK 1st International
            Academic Conference on Taxation, Nasarawa State University, Keffi,
            August 13-16, 2018. ISBN: 978-878-967-880-8
          </li>
          <li>
            <strong>Mainoma, M. A, & Oyedokun, G. E (2019).</strong>{" "}
            <em>Forensic Accounting Research Developments (Eds).</em> Aaron &
            Hur Publishing. Lagos, Nigeria. ISBN: 978-978-56669-9-1
          </li>
          <li>
            <strong>
              Dandago, K. I., Akintoye, I.R., Salawu, R. O., & Oyedokun, G. E.
              (2019).
            </strong>{" "}
            <em>Taxation and Business Sustainability (Eds).</em> Book of
            Abstract/Conference Proceedings of the CITN/Babcock University 2nd
            International Academic Conference on Taxation, Babcock University,
            Ilishon-Remo, August 18-20, 2019
          </li>
          <li>
            <strong>Oyedokun, G. E. (2019).</strong>{" "}
            <em>
              Tax Planning, Management & Compliance: Evidence from Nigeria
              (Eds).
            </em>{" "}
            Aaron & Hur Publishing. Lagos, Nigeria. ISBN: 978-978-56669-9-1
          </li>
          <li>
            <strong>Oyedokun, G. E. (2020).</strong>{" "}
            <em>Current Trends in Taxation: CITN 2020 MPTP Series (Eds).</em>{" "}
            224-265, CITN. Lagos, Nigeria. ISBN: 978-978-980-754-3
          </li>
          <li>
            <strong>Mainoma, M.A., Oyedokun, G.E. et al. (2020).</strong>{" "}
            <em>Tax Management and Compliance in Nigeria.</em> Lagos, Nigeria.
            OGE Business School. ISBN: 978-978-978-734-0
          </li>
          <li>
            <strong>
              Dandago, K. I., Oyedokun, G. E., & Abihau, F.M. (2020).
            </strong>{" "}
            <em>Taxation, Social Contract and Economic Development (Eds).</em>{" "}
            Book of Abstract/Conference Proceedings of the CITN/IOU 3rd
            International Academic Conference on Taxation, Igbinedion
            University, Okada, Nov. 8-11, 2020. ISBN: 978-878-967-880-8
          </li>
          <li>
            <strong>Mainoma, M.A., Oyedokun, G.E. et al. (2022).</strong>{" "}
            <em>Taxation for Economic Development in Nigeria.</em> Lagos,
            Nigeria. OGE Business School. ISBN: 978-978-991-390-9
          </li>
          <li>
            <strong>Oyedokun, G.E. (2021).</strong>{" "}
            <em>Taxation, Technology and Business Disruptions.</em> CITN 2021
            MPTP Series (Eds). Lagos, Nigeria. ISBN: 978-978-989-470-3
          </li>
          <li>
            <strong>Oyedokun, G.E. (2022).</strong>{" "}
            <em>
              Tax Practice and Digitalization: Planning and Compliance
              Strategies in Nigeria (Eds).
            </em>{" "}
            CITN 2022 MPTP Series. Lagos, Nigeria.
          </li>
          <li>
            <strong>Adejuwon, J.A. & Oyedokun, G.E. (2023).</strong>{" "}
            <em>
              Environmental Factors and Entrepreneurship Development (Eds).
            </em>{" "}
            OGE Business School Publisher. Lagos, Nigeria. ISBN:
            978-978-59453-4-8
          </li>
          <li>
            <strong>Oyedokun, G.E. & Adejuwon, J.A. (2023).</strong>{" "}
            <em>Entrepreneurship and Business Environment (Eds).</em> OGE
            Business School Publisher. Lagos, Nigeria. ISBN: 978-978-59453-5-5
          </li>
          <li>
            <strong>Oyedokun, G.E., Uwuigbe, O.R., & Eze, C. (2023).</strong>{" "}
            <em>Dynamics of Taxation and Nigeria Economy (Eds).</em> Chartered
            Institute of Taxation of Nigeria. Lagos, Nigeria. ISBN:
            978-978-798-098-9
          </li>
        </ol>
      </div>
    </main>
  );
}
