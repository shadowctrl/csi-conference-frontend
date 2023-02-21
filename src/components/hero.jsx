import { React, useEffect, useRef } from "react";
import styled from "styled-components";
import "./hero.css";
import Aboutus from "./aboutus";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import Info from "./Info";

const Hero = () => {
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate");
        if (!entry.isIntersecting) {
          entry.target.classList.remove("animate");
          // entry.target.classList.add("fadeRL");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    const divs = document.querySelectorAll(
      `div.test,div.testh1, div.test1,div.test1h1, div.z, div.a, div.b, div.c, div.d, div.e, 
      div.f, div.g,div.h, div.i, div.j, div.k, div.cc,div.fee, div.payment      `
    );

    divs.forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <div>
      <Main className="mt-10 text-center">
        <Title className="font-poppins text-center text-sky-600 text-sm md:text-xl font-extrabold">
          International Conference on Next-Gen Technologies in Computational
          Intelligence (NGTCA 2023)
          <br />{" "}
          <div className="md:text-3xl md:mt-5 text-xl">
            {" "}
            24th - 26th March, 2023
          </div>
        </Title>

        <Content className="mb-6">
          <Border
            id="ac"
            className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
          />
          <Div className="md:ml-48 md:mr-48 ml-6 mr-6 font-poppins animate">
            <div className="testh1 opacity-0">
              <Head1 className="md:ml-32 md:mr-32 mr-8 ml-8 font-bold md:text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
                <h1 className="">About Conference </h1>
              </Head1>
            </div>
            <div className="test opacity-0">
              <Para1 className="antialiased text-justify mt-10">
                {" "}
                The conference focuses to share and exchange ideas in the field
                of the intelligent computing paradigm, data analytics, machine
                learning, the Internet of Things, and Robotics. It provides a
                forum through which education researchers, practitioners, and
                industry professionals can discuss on to the challenges and
                solutions towards the development of the new era of intelligent
                technologies. The conference has five tracks and encourages
                research work that discusses the tools, methodologies, and
                application of intelligent technologies. Attending these
                conferences helps professionals develop their network with the
                right people, strengthen their knowledge base, and enhance their
                research careers. It is believed that in encouraging the pursuit
                of knowledge as much as possible – through seminars, article
                reviews, and conferences to help academics along their
                professional journey, the academic world is forging ahead in all
                respects – innovation, research, and discovery. Through a
                platform that connects researchers professionals with academics
                and associates around the world, researchers will increase their
                chances of successfully accomplishing their academic goals.
              </Para1>
            </div>
          </Div>

          <Border
            id="ob"
            className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
          />
          <Div className=" md:ml-48 md:mr-48 ml-6 mr-6 font-poppins animate">
            <div className="test1h1 opacity-0">
              {" "}
              <Head1 className="md:ml-32 md:mr-32 mr-8 ml-8 font-bold md:text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
                <h1 className="">Organising body </h1>
              </Head1>
            </div>
            <div className="test1 opacity-0">
              <Para1 className="antialiased text-justify mt-10">
                Computer Society of India (CSI) is the largest association of IT
                professionals in India. CSI is a non-profit organization
                established in 1965 and its members are committed to the
                advancement of theory and practice of Computer Engineering and
                Technology Systems. The Mission of CSI is to facilitate
                research, knowledge sharing, learning and career enhancement for
                all categories of IT professionals, while simultaneously
                inspiring and nurturing new entrants into the industry and
                helping them to integrate into the IT community.
                <br /> <br />
                At present, CSI has 72 chapters across India, over 525 student
                branches with 1,00,000 plus members. It serves its members
                through technical events, seminars, workshops, conferences,
                publications & journals, research projects, competitions,
                special interest groups, awards & recognitions etc. Various CSI
                chapters conduct Research Convention every year.
                <br /> <br />
                This year, nine chapters in Region 7, namely, Chennai,
                Kancheepuram, Trivandrum, Sivakasi, Coimbatore, Trichy, Vellore,
                Salem & Cochin along with Vels Institute of Science, Technology
                and Advanced Studies, Chennai are conducting an International
                Research Convention on Next-Gen Technologies in Computational
                Intelligence (NGTCI) during 24th - 26th March, 2023 in Chennai
                in hybrid mode.
              </Para1>
            </div>
          </Div>

          <Border
            id="cm"
            className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
          />
          {/* <Div className=" md:ml-48 md:mr-48 ml-6 mr-6 font-poppins animate">
          <div className="z opacity-0">
            <Head1 className="md:ml-32 md:mr-32 mr-8 ml-8 font-bold md:text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
              <h1 className="">Chief Guest </h1>
            </Head1>
          </div>
          <Para1 className="antialiased text-justify mt-8">
            <div className="a opacity-0">
            <CommiteeTitle>Dr. Mylswamy Annadurai,Former Director, ISRO Satelite Centre & Chandrayan Project.</CommiteeTitle>
            </div>

          </Para1>
        </Div>
        <Border
          id="cm"
          className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
        /> */}
          <Div className=" md:ml-48 md:mr-48 ml-6 mr-6 font-poppins animate">
            <div className="z opacity-0">
              <Head1 className="md:ml-32 md:mr-32 mr-8 ml-8 font-bold md:text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
                <h1 className="">Committee Members </h1>
              </Head1>
            </div>

            <Para1 className="antialiased text-left mt-8">
              <div className="a opacity-0">
                <CommiteeTitle>Chief Patrons: </CommiteeTitle>

                <Ul className="">
                  <li>
                    Dr. Ishari K. Ganesh, founder, chairman and Chancellor of
                    Vels University, Chennai{" "}
                  </li>
                  <li>
                    Prof. Dr. S. Sadagopan, Chairman, IIITDM, Kancheepuram
                  </li>
                  <li>
                    Dr. B. Chidhambararajan, Director-SRMVEC & Past and Founder
                    Chairman-CSI Kancheepuram Chapter{" "}
                  </li>
                  <li>
                    Mr. H. R. Mohan, Fellow & Former President, CSI Past Chair,
                    IEEE CS Madras & ACM Chennai, Former AVP (Systems), The
                    Hindu{" "}
                  </li>
                </Ul>
              </div>
              <div className="cc">
                <CommiteeTitle>Conference Chair(s) </CommiteeTitle>
                <Ul>
                  <li className="">
                    <span className=" text-orange-500"> Dr. M. MURUGAN</span>,
                    Principal, SRM Valliammai Engineering College and Chairman,
                    CSI Kancheepuram Chapter.
                  </li>
                  <li className="">
                    {" "}
                    <span className=" text-orange-500">Dr.E.INIYA NEHRU</span>,
                    Deputy Director General, National Informatics centre Chennai
                    and past Chair of CSI Chennai Chapter{" "}
                  </li>
                </Ul>
              </div>

              <div className="c opacity-0">
                <CommiteeTitle className="">
                  Conference Convener(s){" "}
                </CommiteeTitle>
                <Ul className="">
                  <li>
                    <span>Committee Head:</span> Mr. P. V. Subramanian, Past
                    Chairperson, CSI Chennai Chapter{" "}
                  </li>
                  <li>
                    {" "}
                    <span>Secretary:</span>
                    Dr. M. Senthil Kumar, Professor & Head, Cyber Security, SRM
                    Valliammai Engineering College and past Secretary, CSI{" "}
                    <h1 className="ml-[24px]">Kancheepuram Chapter </h1>
                  </li>
                  <li>
                    <span>Treasurer:</span>
                    Dr. A. Prema Kirubakaran, Professor, Vels Institute of
                    Science, Technology and Advanced Studies, Chennai and past
                    Secretary,{" "}
                    <h1 className="ml-[24px]"> CSI Chennai Chapter</h1>
                  </li>
                  <li>
                    <span>Joint Secretary:</span>Dr. BIJI C.L.., Associate
                    Professor, vellore Institute of Technology, CSI Trivandrum
                    Chapter{" "}
                  </li>
                  <li>
                    {" "}
                    <span>Joint Treasurer:</span>Ms. G. PRIYANKA, Assistant
                    Professor, Mepco Schlenk Engineering College, CSI Sivakasi
                    CHapter
                  </li>
                  <li>
                    {" "}
                    <span>Editorial Head:</span> Dr. R. ANANDAN, Professor and
                    HoD, Vels Institute of Science, Technology and Advanced
                    Studies
                  </li>
                </Ul>
              </div>

              <div className="d opacity-0">
                <CommiteeTitle>Program Committee</CommiteeTitle>

                <Ul>
                  <li>
                    {" "}
                    Dr. S. K. Saravanan, Assistant Professor, SRM Valliammai
                    Engineering College and Secretary and CSI Kancheepuram
                    Chapter{" "}
                  </li>
                  <li>
                    Dr. D Kavitha, Associate Professor, St. Peter’s Institute of
                    Higher Education and Research (SPIHER) and MC member of CSI
                    Chennai Chapter
                  </li>
                  <li>
                    Dr. B Sivaselvan, Associate Professor, Indian Institute of
                    Information Technology, Design & Manufacturing, Kanchipuram
                    and member of CSI Kanchipuram Chapter
                  </li>
                  <li>
                    Dr E K Girisan, Academic Coordinator, Sree Narayana Guru
                    College Coimbatore and MC member of CSI Coimbatore chapter
                  </li>
                  <li>
                    Dr. Elizabeth Sherly, Professor, Kerala University of
                    Digital Sciences, Innovation and Technology and Chairperson
                    CSI Trivandrum Chapter
                  </li>
                  <li>
                    Dr. Govinda. K, Associate Professor, SCOPE, VIT University,
                    Vellore 14, past Regional Vice-President of CSI - Region 7
                    and Chair of CSI Vellore chapter
                  </li>
                  <li>
                    Dr. S. Ravimaran, Past Chairman, CSI, Tiruchirappalli
                    Chapter & Professor and Head, Dept. of Artificial
                    Intelligence and Data Science, Saranathan College of
                    Engineering, Tiruchirappalli.
                  </li>
                  <li>
                    Dr B.G. Geetha , Professor & Director , Department Of
                    Computer Science And Engineering , K.S. Rangasamy College Of
                    Technology Tiruchengode
                  </li>
                  <li> Mr. Rajesh P, MC Member, CSI Trivandrum Chapter </li>

                  <li> Mr. R. Senthil Kumar, Secretary, CSI Trichy Chapter </li>
                  <li>
                    {" "}
                    Mr. R. Saravana Kumar, Treasurer, CSI Coimbatore Chapter{" "}
                  </li>
                </Ul>
              </div>
              <div className="b opacity-0">
                <CommiteeTitle>Program Chair(s) </CommiteeTitle>

                <Ul>
                  <li>
                    Mr. R. Selvaraj, Past Chair Person, CSI Trichy Chapter{" "}
                  </li>
                  <li>
                    Dr. B. Latha, HoD, CSE Sri Sairam Engineering College and MC
                    Member, CSI Kancheepuram Chapter{" "}
                  </li>
                  <li>
                    Dr. E Chandra Blessie, Coimbatore Institute of Technology,
                    Coimbatore ( CSI Coimbatore chapter ){" "}
                  </li>
                  <li>
                    Dr. R Parameswari, Professor, Department of Computer
                    Science, Vels Institute of Science, Technology and Advanced
                    Studies, Chennai and MC member of CSI Chennai Chapter{" "}
                  </li>
                  <li>
                    Dr. Malu, Kerala University of Digital Sciences, Innovation
                    and Technology and Joint Secretary, CSI Trivandrum Chapter{" "}
                  </li>
                </Ul>
              </div>
              <div className="e opacity-0">
                <CommiteeTitle>
                  International Advisory Board Member(s){" "}
                </CommiteeTitle>

                <Ul>
                  <li>
                    Dr. Malaya Nayak, Executive Director, IT Buzz Limited,
                    London, UK
                  </li>
                  <li>
                    {" "}
                    Prof. Dharm Singh Jat, Professor of Computer Science,
                    Namibia University of Science and Technology, Nambia
                  </li>
                  <li>
                    {" "}
                    Dr. Vineetha V., System Architect, Verizon, Texas, United
                    States{" "}
                  </li>
                  <li>
                    {" "}
                    Mr. R.Dhakshinamoorthy, Principal Enterprise Architect, TATA
                    Consultancy Services Ltd, Chennai{" "}
                  </li>
                  <li>
                    {" "}
                    Dr Mithun Chakraborty Professor, Lincoln University,
                    Malaysia{" "}
                  </li>
                  <li> Ahmed A. Elnger, Beni-Suef University, Egypt </li>
                  <li>
                    {" "}
                    Chakib El Mokhi, Cadi Ayyad university of Marrakech, Morocco{" "}
                  </li>
                  <li> Dac-Nhuong Le, Haiphong University, Vietnam. </li>
                  <li>
                    {" "}
                    John Petearson Anzola, Los Libertadores University, Colombia
                  </li>
                  <li> Faiez Gargouri, University of Sfex, Tunisia</li>
                  <li>
                    {" "}
                    Kusum Yadav, University of Hail, Kingdom of Saudi Arabia{" "}
                  </li>
                  <li> Noor Zaman, Taylor’s University, Malaysia </li>
                  <li>
                    {" "}
                    Mostafa EZZIYYANI, Abdelmalek Essaâdi University, Morrocco
                  </li>
                  <li> Srinath Doss, Botho University, Botswana</li>
                  <li> Vicente García Díaz, University of Oviedo, Spain</li>
                </Ul>
              </div>
              <div className="f opacity-0">
                <CommiteeTitle>
                  Technical Program Committee Member(s)
                </CommiteeTitle>

                <Ul>
                  <li>
                    {" "}
                    Prof. Subash Chandra Yahdav, Professor, Central University
                    of Jharkhand, Ranchi
                  </li>
                  <li>
                    Dr. Dilip Kumar Yadav, Prof & Head Dept of Computer
                    Applications, NIT, Jamshedpur
                  </li>
                  <li>
                    Prof. Rathnadeep R Deshmukh, Former IETE Chairman &
                    Professor, Dr. B.A.M. University, Aurangabad
                  </li>
                  <li>
                    Dr. Mohan Raj Velayudhan Kumar, Senior Scientist, TCS
                    Research, Chennai
                  </li>
                  <li>
                    Dr. Mala Nehru, Associate Professor, Anna University,
                    Chennai
                  </li>
                  <li>
                    Dr. Priya G, Associate Professor, Department of Analytics,
                    SCOPE, VIT, Vellore
                  </li>
                  <li>Mr. Robin Tommy, Innovation Head, TCS Trivandrum</li>
                </Ul>
              </div>
              <div className="g opacity-0">
                <CommiteeTitle>Organizing Committee Member(s)</CommiteeTitle>
                <Ul>
                  <li>
                    {" "}
                    Mr. T. V. Kamalak Kannan, Chairperson, CSI Chennai Chapter
                  </li>
                  <li>
                    Dr. Elizabeth Sherly, Chairperson, CSI Trivandrum Chapter
                  </li>
                  <li>
                    Dr. P Golda Jayashelli, Chairperson, CSI Sivakasi Chapter
                  </li>
                  <li>
                    Dr. Chandra Blessie, Chairperson, CSI Coimbatore Chapter
                  </li>
                  <li>Mr. R Selvaraj, Past Chairperson, CSI Trichy Chapter</li>
                  <li>
                    Dr. V. Viajay Sherly, Chairperson, CSI Vellore Chapter
                  </li>
                  <li> Dr. G. Singaravelu, Chairperson, CSI Salem Chapter</li>
                  <li>Ms. M. T. Sujatha, Chairperson, CSI Cochin Chapter</li>
                </Ul>
              </div>
              <div className="h opacity-0">
                <CommiteeTitle>Guest Speaker</CommiteeTitle>

                <Ul>
                  {/* <li>
                  {" "}
                  Chief Guest: Dr. Mylswamy Annadurai, Former Director, ISRO
                  Satelite Centre & Chandrayan Project.
                </li> */}
                  <li>
                    Mr. Dhakshinamoorthy R, Principal Enterprise Architect, IoT
                    BU, TCS
                  </li>
                </Ul>
              </div>
              {/* <div className="i opacity-0">
              <CommiteeTitle>Venue</CommiteeTitle>
              <Ul>
                <li>
                  Vels Institute of Science, Technology & Advanced Studies,{" "}
                </li>
                <li>
                  PV Vaithiyalingam Rd, Velan Nagar, Krishnapuram, Pallavaram,
                  Chennai - 600117.
                </li>
              </Ul>
            </div>
            <div className="j opacity-0">
              <CommiteeTitle id="il"> Important Links </CommiteeTitle>
              <ul className="ml-[30px] mt-[10px] list-disc">
                <li>
                  {" "}
                  <a
                    className="underline"
                    href="https://www.routledge.com/Conference-Proceedings-Series-on-Intelligent-Systems-Data-Engineering/book-series/CPSISDEO"
                  >
                    {" "}
                    Publication Link
                  </a>
                </li>

                <li>
                  <a href="https://bit.ly/3VkMlmL" className="underline">
                    Registration Link{" "}
                  </a>
                </li>
                <li>
                  <a href="https://bit.ly/3jIQkMM" className="underline">
                    Flyer Link
                  </a>
                </li>

                <li>
                  <a href="http://bit.ly/3gGUdRr" className="underline">
                    {" "}
                    Submission Link
                  </a>
                </li>
              </ul>
              <h1 className="text-sky-900 font-bold mt-5 animate-pulse">
                Registration deadline: February 28, 2023
              </h1>
              <h1 className="text-sky-900 font-bold animate-pulse ">
                Submission deadline: February 28, 2023
              </h1>
            </div>*/}
              <div className="k opacity-0">
                <CommiteeTitle>Author's Instructions </CommiteeTitle>
                <Ul>
                  <li className="a1">
                    Plagiarism should be less than 10%. [Keep the Plagiarism
                    Report along with manuscript [May be from TURNITIN].
                  </li>
                  <li className="a2">
                    Grammatical error must NOT be there. Language Clarity is
                    very much expected, and final manuscript is channeled by a
                    language expert. Any sort of kind of dispute may lead to
                    direct rejection by the Springer
                  </li>
                  <li className="a3">
                    NO Figure and NO Table should be copied from any other paper
                    / Internet. This activity may lead to direct
                    rejection.Quality of the figures should be high resolution.
                  </li>
                  <li className="a4">
                    Page Limit: Minimum 6 Pages and Maximum 7 Pages after
                    compliance with the specified Format.
                  </li>
                  <li className="a5">
                    Each Paper must contain Abstract (150-200 words) and
                    Keywords (4-5).
                  </li>
                  <li className="a6">
                    All Table No. and Figure No. should be mentioned inside the
                    manuscript
                  </li>
                  <li className="a7">
                    All Reference Number / Citation must be properly cited
                    inside the manuscript.
                  </li>
                  <li className="a8">
                    Make sure that all the references are cited in the body of
                    the paper.
                  </li>
                  <li className="a9"> Maintain good quality figure.</li>
                </Ul>
              </div>
            </Para1>
          </Div>
          <Border
            id="r"
            className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
          />

          <Div className=" md:ml-48 md:mr-48 ml-6 mr-6 font-poppins animate">
            <div className="fee">
              <Head1 className="md:ml-32 md:mr-32 mr-8 ml-8 font-bold md:text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
                <h1 className="text-xl font-extrabold">
                  Registrations And Payments
                </h1>
              </Head1>
              <Grid className="p-5 gap-y-5 font-[500] text-sm md:text-lg grid grid-cols-2 grid-flow-row font-poppins mt-10 bg-gray-200 rounded-2xl">
                <div className=" flex justify-center items-center font-extrabold text-sky-900 text-[16px] md:text-2xl">
                  Type Of Registration
                </div>
                <div className="flex justify-center font-extrabold text-sky-900 text-[16px] md:text-2xl">
                  Registration Fee
                </div>
                <div className="">
                  Publication with Taylor & Francis Conference Proceedings{" "}
                  <br />
                  <span className="text-red-600">( SCOPUS INDEXED) </span>
                </div>
                <div className="flex-1 mt-[10px] ml-10 md:ml-0">
                  {/* <FaRupeeSign size={20} className="md:ml-[230px]" />  */}
                  9500 Rs/-
                </div>

                <div>
                  {" "}
                  Publication with InderScience/Universal Wiser <br />
                  <span className=" text-red-600"> (Free for Journals)</span>
                </div>
                <div className="flex-1 mt-[10x] ml-10 md:ml-[10.3rem]">
                  {" "}
                  {/* <FaRupeeSign size={20} className="md:ml-[230px] " />  */}
                  1500 Rs/-
                  <span className="ml-2 text-red-600">(Conference Fee)</span>
                </div>
                <div>
                  <span>Listener</span>
                  <span> Per Day</span>
                  <br />
                  <span className="text-red-600">(Only Participants) </span>
                </div>
                <div className="flex-1 mt-[10px] ml-10 md:ml-0">
                  {/* <FaRupeeSign size={20} className="md:ml-[230px]" />  */}
                  500 Rs/-
                </div>
                <div>
                  {" "}
                  Foreign Authors <br />
                  <span className=" text-red-600"> (SCOPUS INDEXED)</span>
                </div>
                <div className="flex-1 ml-10 md:ml-0 mt-2 md:mt-0">
                  {/* <FaDollarSign size={20} className="md:mt-1 md:ml-[230px]" />{" "} */}
                  120 USD/-
                </div>
              </Grid>

              <div className="text-2xl text-sky-500 font-bold mt-5 underline animate-bounce">
                <a href="https://bit.ly/3VkMlmL" target="_blank">
                  {" "}
                  Click Here to Register
                </a>
              </div>
            </div>
            <Payment className="payment">
              <CommiteeTitle className="">
                <h1 className="md:text-3xl text-[1.5rem]"> Payment Details </h1>
              </CommiteeTitle>
              <ul className="list-none md:mt-[20px] mt-[10px] md:text-lg text-md">
                <li>
                  Bank Account Number:-<span>33934168390 </span>
                </li>

                <li>
                  IFCC Code:- <span> SBIN0007074</span>
                </li>

                <li>
                  Bank:- <span>STATE BANK OF INDIA</span>
                </li>

                <li>
                  Branch:- <span>MIDC ANDHERI EAST</span>
                </li>
              </ul>
            </Payment>
          </Div>

          <Border
            // id="r"
            className=" border-double border-[4px] mt-[40px] md:ml-[128px] md:mr-[128px] 
          ml-[32px] mr-[32px] border-sky-600  "
          />
        </Content>
      </Main>
      <div>
        <Aboutus />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
};

export default Hero;

const Main = styled.div``;
const Title = styled.div``;
const Border = styled.div`
  // border-style: double;
  // border-width: 4px;
  // margin-top: 40px;
  // margin-left: 128px;
  // margin-right: 128px;
  // border-color: rgb(2, 132, 199);
`;

const Head1 = styled.div``;
const Para1 = styled.div``;
const Content = styled.div``;
const Div = styled.div``;
const Ul = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  font-weight: 400;
  span {
    color: rgb(234 88 12);
    font-weight: 600;
    margin-right: 5px;
  }
`;

const CommiteeTitle = styled.div`
  margin-top: 20px;
  color: rgb(12, 74, 110);
  font-size: 1.125rem;
  font-weight: 700;
`;

const Payment = styled.div`
  margin-top: 40px;
  font-family: poppins;
  li {
    font-weight: 500;
    color: red;
    text-align: left;
    font-size: larger;
  }

  span {
    color: black;
    margin-left: 4px;
  }
`;

const Grid = styled.div``;
