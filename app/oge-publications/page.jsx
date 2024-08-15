"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OgePublicationsPage() {
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
        Welcome to <span className="text-primary">OGE Publications</span>{" "}
      </h1>
      <div className="py-14">
        <h3 className="text-base lg:text-lg font-clashmd mb-2">
          Inaugural Lecture{" "}
        </h3>
        <p className="lg:max-w-[65%] text-sm lg:text-base">
          <span className="font-clashmd">Oyedokun, G.E. (2021).</span> Growing
          our Digital World in Nigeria: Forensic Accounting & Taxation
          Perspective. LCU College Press, Ibadan ISBN 978-979-989-665-3. Being
          11th Inaugural Lecture of the Lead City University Ibadan April 19,
          2021
        </p>
        <div className="mt-10">
          <h3 className="text-base lg:text-lg font-clashmd mb-2">
            Published Articles{" "}
          </h3>
          <h3 className="text-base pl-3 lg:text-lg font-clashmd mb-2">
            (a) International Articles Publications
          </h3>
          <ol className="list-decimal break-words pl-10 grid gap-2 text-sm lg:text-base">
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Ajose, K. (2017). Domestic investment and
              economy growth in Nigeria: An empirical investigation.
              <em>
                International Journal of Business and Social Science (IJBSS)
              </em>
              , 9(2), 130-138. Available at{" "}
              <a className="break-words"
                href="http://www.ijbssnet.com/journal/index/3945"
                target="_blank"
              >
                http://www.ijbssnet.com/journal/index/3945
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E.; Akinwumi, O, S. & Asaolu, T. O. (2018). Forensic
              accounting skills and corruption eradication in Nigeria.
              <em>Journal of African Interdisciplinary Studies (JAIS)</em>,
              2(3), A Publication of the Centre for Democracy, Research and
              Development (CEDRED), Nairobi, Kenya.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E; Akintoye, I. R. & Salawu, O. R. (2018). Tax
              justice and federally collected tax revenue in Nigeria: A vector
              autoregressive approach.
              <em>Journal of Management Policy and Practice (JMPP)</em>, 19(4).
              <a className="break-words"
                href="http://www.na-businesspress.com/jmppopen.html"
                target="_blank"
              >
                http://www.na-businesspress.com/jmppopen.html
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., & Saad, S. (2018). Corporate governance and
              accounting conservatism in Nigerian foods and beverages firms.
              <em>American Journal of Economics, Finance, and Management</em>,
              4(4), 124-133-ID 70200151. Available at{" "}
              <a className="break-words"
                href="http://www.aiscience.org/journal/paperInfo/ajefm?paperId=4216"
                target="_blank"
              >
                http://www.aiscience.org/journal/paperInfo/ajefm?paperId=4216
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Efionayi, O. P. (2018). Auto regressive
              distributed lag analysis of the impact of public expenditure and
              economic growth in Nigeria.
              <em>Journal of Applied Business and Economics</em>, 20(9). ISSN:
              1499-691X
              <a className="break-words"
                href="http://www.nabpress.com/applied-business-and-economics"
                target="_blank"
              >
                http://www.nabpress.com/applied-business-and-economics
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., & Gabriel, F. G. (2018). Effects of claims
              management on profitability of listed insurance companies in
              Nigeria.
              <em>American Journal of Management</em>, 18(5), 37-45.
              <a className="break-words"
                href="http://www.na-businesspress.com/ajmopen.html"
                target="_blank"
              >
                http://www.na-businesspress.com/ajmopen.html
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Somoye, R. O. C. (2018). Working capital
              financing and entrepreneurship growth in Nigeria: An empirical
              investigation.
              <em>Journal of Accounting and Finance</em>, 18(10), 92-112.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E.; & Saidu, B. (2018). Impact of intellectual
              capital on the financial performance of listed Nigerian oil
              marketing companies.
              <em>Information and Knowledge Management</em>, 8(9), 13-27. A
              publication of the International Institute for Science,
              Technology, and Education (IISTE).
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E.; Yunusa, G. O., & Adeyemo, K. A. (2018).
              Determinant of audit quality of quoted Industrial Goods.
              <em>Research Journal of Finance and Accounting</em>, 9(22), 77-85.
              A publication of the International Institute for Science,
              Technology, and Education (IISTE).
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ajibade, A. T., Oyedokun, G. E, Dounmu, S. (2018). Treasury single
              account and public fund management: A study of selected federal
              government parastatals in Bayelsa State.
              <em>Journal of Scientific and Engineering Research (IJSER)</em>,
              9(12), 890-902.
              <a className="break-words"
                href="https://www.ijser.org/research-paper-publishing-december-2018_page3.aspx"
                target="_blank"
              >
                https://www.ijser.org/research-paper-publishing-december-2018_page3.aspx
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Abubakar, A. (2019). Impact of Financial
              Leverage on the Performance of Quoted Nigerian Deposit Money
              Banks.
              <em>European Journal of Business and Management</em>, 11(37).
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Umoh, R. O., Haruna, A., R., & Zakari A. Z.,
              (2019). Effect of Ownership Structure on Earnings Management of
              Listed Industrial Goods Companies in Nigeria.
              <em>IOSR Journal of Business and Management (IOSR-JBM)</em>,
              21(1), 47-54. Manuscript ID H86133. e-ISSN: 2278-487X, p-ISSN:
              2319-7668. Available at{" "}
              <a className="break-words" href="http://www.iosrjournals.org" target="_blank">
                http://www.iosrjournals.org
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Egberi, O. E., & Tonade, M. A, (2019).
              Environmental accounting disclosure and firm value of industrial
              goods companies in Nigeria.
              <em>IOSR Journal of Economics and Finance (IOSR-JEF)</em>.
              Manuscript ID R86068. e-ISSN: 2321-5933, p-ISSN: 2321-5925.
              Available at{" "}
              <a className="break-words" href="http://www.iosrjournals.org" target="_blank">
                http://www.iosrjournals.org
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Jaji, K. A, & Oyedokun, G. E. (2019). Cross-Border Expansion and
              Financial Performance of West African and East African Banks
              Operating in Uganda (2010-2016).
              <em>
                International Journal of Finance Accounting and Economics
                (IJFAE)
              </em>
              , 2(1), 1-12.
              <a className="break-words"
                href="http://www.oircjournals.org/index.php/oirc-journals/current-issues/ijfae-vol-2-issue-1"
                target="_blank"
              >
                http://www.oircjournals.org/index.php/oirc-journals/current-issues/ijfae-vol-2-issue-1
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Adeyemi, A.B. (2019). Human capital formation
              and economic growth in Nigeria.
              <em>International Journal of Finance & Banking Studies</em>{" "}
              (2147-4486).
              <a className="break-words" href="http://ssbfnet.com/ojs" target="_blank">
                ssbfnet.com/ojs
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ogundajo, G. O, Enyi, E.P & Oyedokun, G.E (2019). Shareholders’
              Return and Value of Manufacturing Firms Listed on the Nigerian
              Stock Exchange.
              <em>African Journal of Business Management</em>, 13(10), 318-326.
              <a className="break-words" href="https://doi.org/10.5897/AJBM2018.8678" target="_blank">
                10.5897/AJBM2018.8678
              </a>
              . Available at{" "}
              <a className="break-words" href="http://www.academicjournals.org" target="_blank">
                www.academicjournals.org
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ogundajo, G.O., Oyedokun, G.E., & Ajibade, A. T., (2019).
              Accountability and Transparency in the Nigerian Public Service: A
              study of selected Local Government in Ogun State in Nigeria.
              <em>Islamic University Multidisciplinary Journal</em>, 6(3). A
              Publication of Islamic University, Uganda.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Tomomewo, A. O., & Owolabi, S. A, (2019). Cost
              Control and Profitability of Selected Manufacturing Companies in
              Nigeria.
              <em>Journal of Accounting and Strategic Finance</em>, 2(1), 14-33.
              Published by Universitas Pembangunan Nasional "Veteran" Jawa Timur
              Jalan Raya Rungkut Madya Gunung Anyar, Rungkut, Surabaya, Jawa
              Timur (60294) Indonesia.
              <a className="break-words" href="https://doi.org/10.33005/jasf.v2i1.31" target="_blank">
                10.33005/jasf.v2i1.31
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Garba, M.A., & Adeolu-Akande, M.A. (2021).
              Procurement Policy as a Determinant for Organizational Performance
              of University College Hospital (UCH), Ibadan, Nigeria.
              International Journal of Managerial Studies and Research (IJMSR),
              9(11), 45-57. DOI:{" "}
              <a className="break-words"
                href="https://doi.org/10.20431/2349-0349.0911006"
                target="_blank"
              >
                https://doi.org/10.20431/2349-0349.0911006
              </a>
              . Available at{" "}
              <a className="break-words"
                href="https://arcjournals.org/international-journal-of-managerial-studies-and-research/volume-9-issue-11/"
                target="_blank"
              >
                https://arcjournals.org/international-journal-of-managerial-studies-and-research/volume-9-issue-11/
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Bello, S., Oyedokun, G. E., & Adeolu-Akande, M. (2021). Financial
              inclusion and gender-induced poverty in Nigeria. International
              Journal of Research in Business and Social Science (2147-4478),
              10(8). 266-274. Available at{" "}
              <a className="break-words"
                href="https://www.ssbfnet.com/ojs/index.php/ijrbs/issue/view/101"
                target="_blank"
              >
                https://www.ssbfnet.com/ojs/index.php/ijrbs/issue/view/101
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Orenuga, B., & Oyedokun, G.E. (2022). Financial Intermediation and
              Nigerian Economic Growth, International Journal of Social Sciences
              and Management Review, 5(1). 132-148. Available at{" "}
              <a className="break-words"
                href="http://ijssmr.org/uploads2022/ijssmr05_09.pdf"
                target="_blank"
              >
                http://ijssmr.org/uploads2022/ijssmr05_09.pdf
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E & Falade, O.A. (2022). Loss Adjusters and Insurance
              Customers Retention in the Nigerian Insurance Industry.
              International Journal of Economics, Commerce and Management,
              10(3), 43-65. Available at{" "}
              <a className="break-words" href="http://ijecm.co.uk/volume-x-issue-3/" target="_blank">
                http://ijecm.co.uk/volume-x-issue-3/
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. & Adeolu-Akande, M.A. (2022). Impact of Information
              Communication Technology (ICT) on Quality Education in Nigerian
              Tertiary Institutions. Himalayan Journal of Economics and Business
              Management, 3(2), 49-58. Available at{" "}
              <a className="break-words"
                href="https://www.himjournals.com/article/articleID=610"
                target="_blank"
              >
                https://www.himjournals.com/article/articleID=610
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Adeolu-Akande, M.A & Oyedokun, G.E. (2022). An Appraisal of
              Effectiveness of Information Communication Technology in Office
              Management in the COVID-19 Era. International Journal of Business
              and Management Invention (IJBMI), vol. 11(03), 2022, pp. 28-44.
              Journal DOI: 10.35629/8028.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Falade, O.A. & Oyedokun, G.E. (2022). Claims Payment and Financial
              Performance of Listed Insurance Companies in Nigeria. Himalayan
              Journal of Economics and Business Management, 3(2), 37-48.
              Available at{" "}
              <a className="break-words"
                href="https://www.himjournals.com/article/articleID=609"
                target="_blank"
              >
                https://www.himjournals.com/article/articleID=609
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., & Amafa, E.O. (2022). Claims Payment, Risk
              Management and Financial Performance of Selected Insurance
              Companies in Nigeria. Journal of Insurance and Financial
              Management. 6(3), 81-115.{" "}
              <a className="break-words"
                href="https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/221"
                target="_blank"
              >
                https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/221
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Erinoso, O. M., & Oyedokun, G. E. (2022). Environmental
              Disclosure, Audit and Financial Performance of Listed Oil and Gas
              Companies in Nigeria. African Economic and Management Review,
              2(3), 1–10. DOI:{" "}
              <a className="break-words" href="https://doi.org/10.53790/aemr.v2i3.66" target="_blank">
                https://doi.org/10.53790/aemr.v2i3.66
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Akingunola, R.O., & Somoye, R.O.C. (2022). Effect
              of Pension Investment on Financial Depth in Nigeria: Empirical
              Investigation. SunText Rev Econ Bus 3(2): 159-167. DOI:{" "}
              <a className="break-words"
                href="https://doi.org/10.51737/2766-4775.2022.059"
                target="_blank"
              >
                https://doi.org/10.51737/2766-4775.2022.059
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., & Felejaye, O. A. (2022). Internal Control System
              and Financial Performance of Non-Governmental Organisations in
              Nigeria. Account and Financial Management Journal, 7(8),
              2861-2874. DOI:{" "}
              <a className="break-words" href="https://doi.org/10.47191/afmj/v7i8.01" target="_blank">
                https://doi.org/10.47191/afmj/v7i8.01
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ayon, B. B., & Oyedokun, G. E. (2022). Corporate Social
              Responsibility and Financial Performance of Selected Food and
              Beverage Companies in Nigeria. Journal of Economics, Finance and
              Management Studies, 5(8), 2383-2392. DOI:{" "}
              <a className="break-words" href="https://doi.org/10.47191/jefms/v5-i8-32" target="_blank">
                10.47191/jefms/v5-i8-32
              </a>
              . Available at{" "}
              <a className="break-words" href="https://ijefm.co.in/v5i8/32.php" target="_blank">
                https://ijefm.co.in/v5i8/32.php
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Somoye, R.O.C & Akingunola, R.O. (2022). Pension
              Investment and Financial Efficiency in Nigeria. Studies in
              Economics & International Finance, Vol. 2, No. 1, pp. 89-107. DOI:{" "}
              <a className="break-words"
                href="https://doi.org/10.47509/SEIF.2022.v02i01.06"
                target="_blank"
              >
                10.47509/SEIF.2022.v02i01.06
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., & Erinoso, O. M. (2022). Environmental
              Conservation, Sustainability and Financial Performance of listed
              Oil and Gas Companies in Nigeria. International Journal of
              Research and Innovation in Social Science (IJRISS) 6(8), 582-590.
              DOI:{" "}
              <a className="break-words"
                href="https://doi.org/10.47772/IJRISS.2022.6829"
                target="_blank"
              >
                https://doi.org/10.47772/IJRISS.2022.6829
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., & Oyetunji, A.R. (2022). E-Banking Service
              Quality, Internal Control System and Organisational Performance of
              Selected Deposit Money Banks in Nigeria. SunText Rev Econ Bus
              3(3): 168. DOI:{" "}
              <a className="break-words"
                href="https://doi.org/10.51737/2766-4775.2022.068"
                target="_blank"
              >
                https://doi.org/10.51737/2766-4775.2022.068
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. (2022). Determinants of Forensic Accounting
              Techniques and Theories: An Empirical Investigation. Annals of
              Spiru Haret University. Economic Series, 22(3), 61-70. DOI:{" "}
              <a className="break-words" href="https://doi.org/10.26458/22319" target="_blank">
                https://doi.org/10.26458/22319
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Ayon, B. B. (2022). Effect of social disclosures
              on the financial performance of selected food and beverage
              manufacturing firms in Nigeria. Applied Journal of Economics,
              Management, and Social Sciences, 3(3), 18-26. DOI:{" "}
              <a className="break-words" href="https://doi.org/10.53790/ajmss.v3i5.69" target="_blank">
                https://doi.org/10.53790/ajmss.v3i5.69
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Falade, O.A., & Adeolu-Akande, M.A. (2023).
              Assessment of the Impact of the New Premium Tariff on Insurance
              Penetration in the Nigerian Market. Journal of Insurance and
              Financial Management. 7(1), 26-49.{" "}
              <a className="break-words"
                href="https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/229"
                target="_blank"
              >
                https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/229
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Adeolu-Akande, M.A., Oyedokun, G.E., Oyerinde, I.O., & Sogbesan,
              G.O. (2023). Assessment of the Efficiency of Insurance Investments
              in the Nigerian Economy. Journal of Insurance and Financial
              Management, 7(1), 50-74.{" "}
              <a className="break-words"
                href="https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/230"
                target="_blank"
              >
                https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/230
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Sogbesan, G.O., Oyerinde, I.O., & Akinlade, M.
              (2023). Effect of Digital Channels on Consumer Loyalty in the
              Nigerian Insurance Market: An Empirical Investigation. Journal of
              Insurance and Financial Management. 7(2), 75-94.{" "}
              <a className="break-words"
                href="https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/239"
                target="_blank"
              >
                https://journal-of-insurance-and-financial-management.com/index.php/JIFM/article/view/239
              </a>
              .
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Gimba, J. T., Vincent, H. S., & Oyedokun, G. E. (2020). Effect of
              monetary policy on the performance of listed deposit money banks
              in Nigeria. Annals of the University of Oradea, Economic Science
              Series. 2020, 29, 482-503. 22. A publication of the University of
              Oradea, Faculty of Economic Sciences, Oradea, Bihor, Romania.
              Available at
              http://anale.steconomiceuoradea.ro/wp-content/uploads/2020/12/Anale-AUOES_Issue-2-din-2020.pdf
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., Isah, S., & Awotomilusi, N. S. (2020). Effect of
              ownership structure on firm value of quoted consumers goods firms
              in Nigeria. Journal of Accounting and Strategic Finance, 3(2),
              214-228. Published by Universitas Pembangunan Nasional "Veteran"
              Jawa Timur Jalan Raya Rungkut Madya Gunung Anyar, Rungkut,
              Surabaya, Jawa Timur (60294) Indonesia.
              https://doi.org/10.33005/jasf.v3i2.65. http://jasf.upnjatim.ac.id
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Asaolu,, T. O., Akinadewo, I. S., & Oyedokun, G. E. (2020).
              Domestic Debt Management and Government Revenue in Nigeria.
              International Journal of Innovative Research & Development 9(9),
              161-166 available at
              http://internationaljournalcorner.com/index.php/ijird_ojs/article/view/155662
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Akinadewo, I. S., Asaolu, T. O. & Oyedokun, G. E. (2020).
              Application of Forensic Accounting Skills on Government Revenue in
              Nigeria: The Domestic Debt Factor, Islamic University
              Multidisciplinary Journal, 7(3), 64-71. A Publication of Islamic
              University, Uganda, available at https://www.iuiu.ac.ug/iumj
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Babalola, W. A., Oyedokun, G. E. & Adeyemo, K. A. (2019). Banes of
              multiple tax regimes in Nigeria hospitality business: A critical
              analysis of courts’ decisions in restoring sanity in sectorial tax
              administration. Islamic University Multidisciplinary Journal,
              6(5), 23-33. A Publication of Islamic University, Uganda,
              available at
              https://www.iuiu.ac.ug/iumj/journaldetails.aspx?id=12&pg=toc
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Haruna,A.R., Ame, J., Oyedokun, G.E., & Jaji, K.A. (2019). Effect
              of Corporate Governance Mechanisms on Financial Performance of
              Listed Insurance Companies in Nigeria. Islamic University
              Multidisciplinary Journal, 6(4), 56-65. A Publication of Islamic
              University, Uganda
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyewo, B. M.Oyedokun, G.E. & Azuh, A.E. (2019). The Use of
              Multi-Perspective Strategic Performance Measures by Manufacturing
              Firms: Benefits, Determinants, and Challenges. DLSU Business &
              Economics Review 29(1) 2019, 115-130. A publication of De La Salle
              University, Manila, Philippines. Available at
              http://dlsu-ber.com/volume-29
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Aun, I.I., Abdul, F. A., Oladipo, G. T., Olota, O.O & Oyedokun,
              G.E. (2019). An Evaluation of Organizational Change on Employees’
              Productivity. Islamic University Multidisciplinary Journal, 6(4),
              29-40. A Publication of Islamic University, Uganda
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Adegboyega, R. R., & Oyedokun, G. E. (2019). Financial Development
              and Inclusive Rural Financial System in Nigeria. The Annals of the
              University of Oradea. Economic Sciences, Tom XXVIII -2019. A
              publication of the University of Oradea, Faculty of Economic
              Sciences, Oradea, Bihor, Romania. Available at
              http://anale.steconomiceuoradea.ro/volume/2019/AUOES-1-2019.pdf
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Arotolu, O. A., & Vincent, H. (2019). The
              determinants of equity share price of listed deposit money banks
              in Nigeria. Journal of Accounting and Strategic Finance, 2(2),
              127-142. Published by Universitas Pembangunan Nasional "Veteran"
              Jawa Timur Jalan Raya Rungkut Madya Gunung Anyar, Rungkut,
              Surabaya, Jawa Timur (60294) Indonesia. DOI:
              https://doi.org/10.33005/jasf.v2i2.48 http://jasf.upnjatim.ac.id/
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun G.E, & Micah, E.E. M. (2019). Small and medium scale
              enterprises and economic growth in Nigeria. Islamic University
              Multidisciplinary Journal, 6(4), 47-55. A Publication of Islamic
              University, Uganda
            </li>

            <li className="break-words max-w-[330px] lg:max-w-full">
              Olayinka, M.E. & Oyedokun, G.E. (2024). Effect of Data Mining,
              Computer-assisted Auditing Software (CAAS) and the Use of
              Anonymous Communication on Financial Fraud Detection in Local
              Government Council of Oyo State, Nigeria. ISRG Journal of
              Economics, Business & Management, 2(1), 71-85, DOI:
              10.5281/zenodo.10674720.
              https://isrgpublishers.com/isrgjebm-volume-ii-issue-i-january-february-2024/
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. & Olayinka, M.E. (2024). Trend Analysis and
              Internal Control System’s Efficacy in Financial Fraud Prevention
              in Oyo State's Local Government Council in Nigeria. American
              International Journal of Business Management (AIJBM). 7(4), 4-20.
              https://www.aijbm.com/wp-content/uploads/2024/04/B740420.pdf
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Mokalapa, P.M., Oyedokun, G. E., & Fowokan, T. E. (2024). Effect
              of Corporate Governance Practices on the Performance of an
              Established Medium-Sized Enterprise in the Mining Industry in
              South Africa, Small Business Accounting Management and
              Entrepreneurship Review (SBAMER), 4 (1), 17-33.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E., & Onigbinde, K.A. (2024). Effects of tax havens
              and employee tax fraud on Internally Generated Revenue (IGR) in
              Oyo State, Nigeria. Journal of Finance and Accounting Research,
              6(1), 104–128. https://doi.org/10.32350/jfar.61.05
            </li>
          </ol>

          <h3 className="text-base pl-3 lg:text-lg font-clashmd mb-2">
            (b) National Articles Publications
          </h3>
          <ol className="list-decimal pl-10 grid gap-2 text-sm lg:text-base">
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Sanyaolu, W. A. & Bamigbade, D. (2017). Corporate
              governance and financial performance of listed manufacturing firms
              in Nigeria. Advances in Management, a publication of the
              Department of Business Administration, Faculty of Management
              Sciences, University of Ilorin, Ilorin Kwara State, Nigeria,
              16(2), 1-17
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Aina L. A., Aderibigbe, T. A., Adigun, D. E., & Oyedokun, G. E.
              (2017). Tax morale and Nigerian informal sector. Journal of
              Taxation and Economic Development, 16(2), 16-35. A publication of
              Chartered Institute of Taxation of Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., & Yunusa, G. O., (2017). Determinant of audit
              quality of quoted industrial goods sector in Nigeria. Research
              Journal of Financial Sustainability Reporting (RJFSR). 2(1). A
              publication of the Department of Accountancy, Faculty of
              Management Sciences, Enugu State University of Science &
              Technology.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Aderibigbe, T. A., Oke, M. A & Oyedokun, G. E (2017). Tax base
              broadening through improved business environment in Nigeria. Tax
              Academy Research Journal (TARJ). An Academic Journal at the
              Plateau State Internal Revenue Service, 1(2), 1-19.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E, & Umar, S. M. (2017). Stochastic frontier analysis
              of impacts of prudential regulations and supervisions on financial
              performance of Nigerian deposit money banks. Research Journal of
              Financial Sustainability Reporting (RJFSR). 2(2). A publication of
              the Department of Accountancy, Faculty of Management Sciences,
              Enugu State University of Science & Technology.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oloyede, F. L., Kupoluyi, A. K., Oyedokun, G. E. & Benjamin, R. D.
              (2017). Informal sector tax administration and monitoring in
              Nigeria. Journal of Taxation and Economic Development, 16(2),
              16-35. A publication of Chartered Institute of Taxation of Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ogbonna, U. G., Ejem, C. A., & Oyedokun, G. E. (2017). Vector
              autoregression analysis of the impact of fiscal policy on economic
              growth Nigeria. ESUT Journal of Accountancy (EJA),8(2), 61-77. A
              publication of the Department of Accountancy, Faculty of
              Management Sciences, Enugu State University of Science &
              Technology.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Olota, O. O, Aun, I. I. & Oyedokun, G. E. (2017). Human resource
              strategy and production Management: A resource-based view
              approach. Research Journal of Financial Sustainability Reporting
              (RJFSR). 2(1), 278-289. A publication of the Department of
              Accountancy, Faculty of Management Sciences, Enugu State
              University of Science & Technology
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Mlanga, S., & Oyedokun, G. E. (2018). Information Technology and
              Taxation in Eastern Nigeria: An Investigative Approach. Caleb
              International Journal of Development. Studies. 1, 1-92
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Enyi, P. E., & Dada, S. O. (2018). Integrity of
              financial statements and forensic accounting techniques. Journal
              of forensic accounting & fraud investigation (JFAFI), 4(1), 19-47,
              A publication of the Association of Forensic Accounting Researcher
              (AFAR) <a className="break-words" href="http://www.afarng.org">www.afarng.org</a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Job-Olatunji, K. A. & Sanyaolu, W. A. (2018).
              Capital structure and firms’ Financial performance. Accounting &
              Taxation review, official Journal of the International Accounting
              and Taxation Research Group, Faculty of Management Sciences,
              University of Benin, Nigeria. 2(1), 56-71 available at{" "}
              <a className="break-words" href="http://www.atreview.org/home/issues.php?issue=current">
                http://www.atreview.org/home/issues.php?issue=current
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Somoye, R. O. C. (2018). Cash management and
              entrepreneurship growth in Nigeria. Nigeria Accounting Horizon
              Journal (NAHJ). A publication of the Department of Accounting,
              University of Jos, Nigeria (Submitted on January 30, 2018)
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ajose, K. & Oyedokun, G. E. (2018). Capital formation and economic
              growth in Nigeria: Accounting & Taxation Review, official Journal
              of the International Accounting and Taxation Research, Faculty of
              Management Sciences, University of Benin, Nigeria 2(2), 131-142
              Available online at{" "}
              <a className="break-words" href="http://www.atreview.org">http://www.atreview.org</a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E; Fowokan, E. T., Akintoye, I. R., & Hassan, T. A.,
              (2018). Environmental taxation and accounting: Prospects and
              challenges in Nigeria. International Journal of Management Science
              Research (IJMSR). A publication of Faculty of Management Sciences,
              University of Jos. 4(1), 17-34. Available at{" "}
              <a className="break-words" href="https://ijmsr.net/index.php?journal=ijo&page=issue&op=view&path[]=12">
                https://ijmsr.net/index.php?journal=ijo&page=issue&op=view&path[]=12
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Olaniyi, T. A., Ajayi, R. O., & Oyedokun, G. E. (2018). Tax policy
              incentives and foreign direct investment in Nigeria. Fountain
              University Osogbo Journal of Management (FUOJM), 3(3), 59 – 71, A
              Publication of Departments of Accounting & Finance and Business
              Administration, Fountain University, Osogbo.{" "}
              <a className="break-words" href="http://osogbojournalofmanagement.com/index.php/ojm/issue/view/8">
                http://osogbojournalofmanagement.com/index.php/ojm/issue/view/8
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Fowokan, E. T., Akintoye, I. R., and Dada, S. O
              (2018). Tax cooperative compliance and federally collected tax
              revenue in Nigeria. Advance in Management, 17(1), 193-213. A
              publication of the Department of Business Administration, Faculty
              of Management Sciences, University of Ilorin, Ilorin Kwara State,
              Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Umar-Dauda, S. L. & Oyedokun, G. E. (2018). Impact assessment of
              tax audit on tax compliance: A case study of Katsina State Board
              of Internal Revenue. AE-FUNAI Journal of Accounting, Business and
              Finance (FJABAF), 3(1), 54-61. A bi-annual Journal of the
              Department of Accountancy, Business and Administration, Banking &
              Finance, Alex-Ekwueme Federal University of Ndufu-Alike, Ebonyi
              State Nigeria. Available at{" "}
              <a className="break-words" href="https://www.fujabf.org/wp-content/uploads/2019/01/5.pdf">
                https://www.fujabf.org/wp-content/uploads/2019/01/5.pdf
              </a>
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Fowokan, T. E., Oyedokun, G. E., & Abdul, Z. H. (2018).
              Comparative analysis of Nigerian and the United Kingdom’s
              corporate governance codes: Tax risk management approach. Caleb
              International Journal of Development Studies, 1(S). 1-52. A
              Publication of Caleb University, Lagos, Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Kiabel, B. D., Nangih, E., & Oyedokun, G. E. (2018). Tax
              dis-incentives and business growth in Nigeria. Journal of Taxation
              and Economic Development, 17(1), 69-111. A publication of
              Chartered Institute of Taxation of Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Adegbite S. A., Oyebamiji, T. A., & Oyedokun, G. E. (2018).
              Forensic accounting and tax evasion in Nigeria. Journal of
              Taxation and Economic Development, 17(2), 131-140. A publication
              of Chartered Institute of Taxation of Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E; Awogbade, A., & Hassan, T. A., (2018). Fiscal
              policy and entrepreneurship growth in Nigeria. International
              Journal of Management Science Research (IJMSR). A publication of
              Faculty of Management Sciences, University of Jos. ISSN 2536 –
              605X (Print), 4(2), 119-14. Available at{" "}
              <a className="break-words" href="https://www.ijmsr.net/index.php?journal=ijo&page=article&op=view&path[]=124&path[]=108">
                https://www.ijmsr.net/index.php?journal=ijo&page=article&op=view&path[]=124&path[]=108
              </a>
            </li>
          </ol>
        </div>
        <div className="mt-10">
          <h3 className="text-base lg:text-lg font-clashmd mb-2">
            Chapter Contributions in Edited Books
          </h3>

          <ol className="list-decimal pl-10 grid gap-2 text-sm lg:text-base">
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. (2019). Forensic Accounting: Curbing Fraudulent
              Activities. In M.A. Mainoma, & G. E. Oyedokun, G. E (2019).
              Forensic Accounting Research Developments (Eds). Aaron & Hur
              Publishing. Lagos. Nigeria. ISBN: 978-978-56669-9-1 Chapter 2,
              1-49.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. (2020). Tax incentives and revenue generation in
              Nigerian. In G.E., Oyedokun (2020). Current Trends in Taxation:
              CITN 2020 MPTP Series (Eds). 224-265, CITN. Lagos. Nigeria. ISBN:
              978-978-980-754-3
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Babalola, W. A., & Awosika, M. (2020). Imperative
              of tax incentives in Nigeria. In M.A. Mainoma et al (2020). Tax
              Management and Compliance in Nigeria. 307-342.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E.; Akinwumi, O, S. & Asaolu, T. O. (2018). Forensic
              accounting skills and corruption Eradication in Nigeria. In
              Amutabi, M.N (2018) Political economy of development in Africa. A
              Publication of the Centre for Democracy, Research and Development
              (CEDRED), Nairobi Kenya, Chapter 5, 49-62
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. (2021). Taxation of Capital Market Operations. In
              Nigeria. G.E. Oyedokun (2021). Taxation, Technology and Business
              Disruptions. Chartered Institute of Taxation of Nigeria. Lagos.
              Nigeria (CITN) 2021 MPTP Series (Eds). Lagos. Nigeria ISBN:
              978-978-989-470-3
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. (2022). Taxation for Economic Development in M. A.
              Mainoma, G. E. Oyedokun, S. A. S. Aruwa, T. O. Asaolu & R. O.
              Salawu (Eds). Taxation for Economic Development. OGE Publisher,
              Lagos. Nigeria. 1-32. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Kupoluyi, A. K., Oloyede, F. L. & Oyedokun, G. E. (2022). Tax
              Administration and Taxpayers' Compliance In Nigeria in M. A.
              Mainoma, G. E. Oyedokun, S. A. S. Aruwa, T. O. Asaolu and R. O.
              Salawu (Eds). Taxation for Economic Development. OGE Publisher,
              Lagos. Nigeria. 89- 104. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Haruna, R. A., & Adeolu-Akande, M. A (2022).
              Taxation and the Effect of Covid-19 on Nigeria Businesses In
              Nigeria in M. A. Mainoma, G. E. Oyedokun, S. A. S. Aruwa, T. O.
              Asaolu & R. O. Salawu (Eds). Taxation for Economic Development.
              OGE Publisher, Lagos. Nigeria 119-138. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Christopher, M. (2022). Tax Policy: Imperative
              for Nigerian Revenue Generation. In Nigeria in M. A. Mainoma, G.
              E. Oyedokun, S. A. S. Aruwa, T. O. Asaolu & R. O. Salawu (Eds).
              Taxation for Economic Development. OGE Publisher, Lagos. Nigeria
              168 – 192. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Oni, O. S. (2022). Prospect and Challenges of
              Digital Services Tax In A 21st Century Society in Nigeria in M. A.
              Mainoma, G. E. Oyedokun, S. A. S. Aruwa, T. O. Asaolu & R. O.
              Salawu (Eds). Taxation for Economic Development. OGE Publisher,
              Lagos. Nigeria. 232-242. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E & Dopemu, O. S. (2022). Recovery Engagement: Stamp
              Duty, Excess Bank Charges and General Tax Audit in M. A. Mainoma,
              G. E. Oyedokun, S. A. S. Aruwa, T. O. Asaolu & R. O. Salawu (Eds).
              Taxation for Economic Development. OGE Publisher, Lagos. Nigeria.
              260-285. ISBN 978-978-978-734-0
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G.E. & Mainoma, A. M. (2022). Finance Act 2020: Facts
              and Policy Implication in M. A. Mainoma, G. E. Oyedokun, S. A. S.
              Aruwa, T. O. Asaolu & R. O. Salawu (Eds). Taxation for Economic
              Development. OGE Publisher, Lagos. Nigeria. 293-297. ISBN
              978-978-978-734-0
            </li>
          </ol>
        </div>
        <div className="mt-10">
          <h3 className="text-base lg:text-lg font-clashmd mb-2">
            Refereed and Published Conference Proceedings
          </h3>

          <ol className="list-decimal pl-10 grid gap-2 text-sm lg:text-base">
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Somoye, R. O. C. (2018). Working capital
              financing and entrepreneurship growth in Nigeria: An empirical
              investigation. A paper presented at British Academy of Management
              32nd Annual Conference hosted by Bristol Business School,
              University of the West of England 4th - 6th September 2018
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. (2018). Any justification for creative accounting:
              Where are fraud examiners? ACFE African Conference, Johannesburg.
              1-26
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E., Micah, E. E. M., & Gimba, J.T. (2020). Effect of
              Board Attributes on Dividend Policies of Quoted Deposit Money
              Banks in Nigeria. A paper presented at British Academy of
              Management BAM2020 Conference at Alliance Manchester Business
              School, Manchester, United Kingdom, 2-4 September 2020.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Hassan, T. A.; Oyedokun, G. E; & Akintoye, I. R. (2018).
              Environmental taxation: Prospect and challenges in Nigeria. 4th
              International Academic Conference of the Institute of Chartered
              Accountants & Covenant University April 18 – 20, 2018.
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E. & Somoye, R. O. C. (2018). Cash management and
              entrepreneurship growth in Nigeria. Conference Proceedings, 7th
              National Conference on Managing National Economic Recovery,
              Faculty of Administration, Nasarawa State University, Keffi, Vol.
              1., 141-154 July 2018
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Olota, O. O, Aun, I. I. & Oyedokun, G. E. (2017). Human resource
              strategy and production Management. Conference Proceedings, 7th
              National Conference on Managing National Economic Recovery,
              Faculty of Administration, Nasarawa State University, Keffi, Vol.
              I1, 59-72, July 2018
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Umar-Dauda, S. L. & Oyedokun, G. E. (2018). Impact assessment of
              tax audit on tax compliance: A case study of Katsina State Board
              of Internal Revenue. CITN/NSUK 1st International Academic
              Conference on Taxation, Nasarawa State University, Keffi, August
              13-16, 2018
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Oyedokun, G. E.; Enyi, P. E., & Dada, S. O. (2018). Forensic
              accounting techniques and integrity of financial statement.
              Conference Proceedings, 7th National Conference on Managing
              National Economic Recovery, Faculty of Administration, Nasarawa
              State University, Keffi, Vol. I1, 1-19. July 2018
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Jaji, K. A., & Oyedokun, G. E. (2019). Cross-border expansion and
              financial performance of West Africa and East Africa banks
              operating in Uganda (2010-2016). Ist International Conference on
              Business and Governance. Faculty of Management Sciences,
              University of Lagos, Nigeria, May 8-10, 2019
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Tiamiyu, M. A. & Oyedokun, G. E. (2019). Impact of Audit Evidence
              and opinion on audit reporting quality. Being paper presented at
              the 1st International Conference on Business and Governance,
              organized by the Faculty of Management Sciences, University of
              Lagos, May 8-10, 2019
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Usman, S. & Oyedokun, G. E. (2019). Adoption of Treasury Single
              Account in Nigeria: Review of the Implementation Process. Book of
              Abstracts, 2nd CITN International Academic Conference on Taxation,
              August 18 – 20, 2019 held at Babcock University, Ilishan-Remo,
              Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Ahmed, S. & Oyedokun, G. E. (2019). Forensic Accounting and Fraud
              Prevention: A Conceptual Review. Book of Abstracts, 2nd CITN
              International Academic Conference on Taxation, August 18 – 20,
              2019 held at Babcock University, Ilishan-Remo, Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Umar, D., Dandago, K.I & Oyedokun, G. E. (2019). Case Study-Based
              Research in Accounting: A Review of the Extant Literature. Book of
              Abstracts, 2nd CITN International Academic Conference on Taxation,
              August 18 – 20, 2019 held at Babcock University, Ilishan-Remo,
              Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Akodu, A. E, Buraimoh, W. D., Oyekale, P., Oyedokun, G. E &
              Ajayi-Owoeye, A.O. (2019). Taxation in a Digitalized Economy. Book
              of Abstracts, 2nd CITN International Academic Conference on
              Taxation, August 18 – 20, 2019 held at Babcock University,
              Ilishan-Remo, Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Buraimoh, W. D., Oyekale, P. J, Ajayi-Owoeye, A.O, Akodu, A. E. &
              Oyedokun, G. E. (2019). Non-Oil Tax Revenue and Economic Growth in
              Nigeria. Book of Abstracts, 2nd CITN International Academic
              Conference on Taxation, August 18 – 20, 2019 held at Babcock
              University, Ilishan-Remo, Nigeria
            </li>
            <li className="break-words max-w-[330px] lg:max-w-full">
              Tiamiyu, M. A., & Oyedokun, G. E. (2019). Public sector auditing
              and integrity of government financial reporting in Nigeria.
              International Conference of Public Administration, Department of
              Public Administration, Nasarawa State University, Keffi November
              18-20, 2019
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
