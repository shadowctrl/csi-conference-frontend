import { React, useEffect, useRef } from "react";
import styled from "styled-components";
import "./hero.css";

const Hero = () => {
  const test = useRef(null);
  const test1 = useRef(null);
  const z = useRef(null);
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d = useRef(null);
  const e = useRef(null);
  const f = useRef(null);
  const g = useRef(null);
  const h = useRef(null);
  const i = useRef(null);
  const j = useRef(null);
  const k = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
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
      "div.test, div.test1, div.z, div.a, div.b, div.c, div.d, div.e, div.f, div.g,div.h, div.i, div.j, div.k"
    );

    divs.forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <Main className="mt-10 text-center">
      <Title className="font-poppins text-center text-sky-600 text-xl font-extrabold">
        International Conference on Next-Gen Technologies in Computational
        Intelligence (NGTCA 2023)
        <br /> <span className="text-3xl mt-5"> 24th - 26th March, 2023</span>
      </Title>

      <Content className="py-5">
        <Border id="ac" />
        <Div className=" ml-48 mr-48 font-poppins animate">
          <div ref={test} className="test opacity-0">
            <Head1 className="ml-32 mr-32 font-bold text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
              <h1 className="">About Conference </h1>
            </Head1>

            <Para1 className="antialiased text-justify mt-10">
              {" "}
              The conference focuses to share and exchange ideas in the field of
              the intelligent computing paradigm, data analytics, machine
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
              respects – innovation, research, and discovery. Through a platform
              that connects researchers professionals with academics and
              associates around the world, researchers will increase their
              chances of successfully accomplishing their academic goals.
            </Para1>
          </div>
        </Div>

        <Border id="ob" />
        <Div className=" ml-48 mr-48 font-poppins animate">
          <div ref={test1} className="test1 opacity-0">
            <Head1 className="ml-32 mr-32 font-bold text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
              <h1 className="">Organising body </h1>
            </Head1>

            <Para1 className="antialiased text-justify mt-10">
              Computer Society of India (CSI) is the largest association of IT
              professionals in India. CSI is a non-profit organization
              established in 1965 and its members are committed to the
              advancement of theory and practice of Computer Engineering and
              Technology Systems. The Mission of CSI is to facilitate research,
              knowledge sharing, learning and career enhancement for all
              categories of IT professionals, while simultaneously inspiring and
              nurturing new entrants into the industry and helping them to
              integrate into the IT community.
              <br /> <br />
              At present, CSI has 72 chapters across India, over 525 student
              branches with 1,00,000 plus members. It serves its members through
              technical events, seminars, workshops, conferences, publications &
              journals, research projects, competitions, special interest
              groups, awards & recognitions etc. Various CSI chapters conduct
              Research Convention every year.
              <br /> <br />
              This year, nine chapters in Region 7, namely, Chennai,
              Kancheepuram, Trivandrum, Sivakasi, Coimbatore, Trichy, Vellore,
              Salem & Cochin along with Vels Institute of Science, Technology
              and Advanced Studies, Chennai are conducting an International
              Research Convention on Next-Gen Technologies in Computational
              Intelligence (NGTCI) during 24th - 26th March, 2023 in Chennai in
              hybrid mode.
            </Para1>
          </div>
        </Div>

        <Border id="cm" />
        <Div className=" ml-48 mr-48 font-poppins">
          <div ref={z} className="z opacity-0">
            <Head1 className="ml-32 mr-32 font-bold text-xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient ">
              <h1 className="">Committee Members </h1>
            </Head1>
          </div>

          <Para1 className="antialiased text-justify mt-8">
            <div ref={a} className="a opacity-0">
              <CommiteeTitle>Chief Patrons: </CommiteeTitle>

              <Ul className="">
                <li>
                  Dr. Ishari K. Ganesh, founder, chairman and Chancellor of Vels
                  University, Chennai{" "}
                </li>
                <li>Prof. Dr. S. Sadagopan, Chairman, IIITDM, Kancheepuram</li>
                <li>
                  Dr. B. Chidhambararajan, Director-SRMVEC & Past and Founder
                  Chairman-CSI Kancheepuram Chapter{" "}
                </li>
                <li>
                  Mr. H. R. Mohan, Fellow & Former President, CSI Past Chair,
                  IEEE CS Madras & ACM Chennai, Former AVP (Systems), The Hindu{" "}
                </li>
              </Ul>
            </div>
            <div ref={b} className="b opacity-0">
              <CommiteeTitle>Program Chair(s) </CommiteeTitle>

              <Ul>
                <li>Mr. R. Selvaraj, Past Chair Person, CSI Trichy Chapter </li>
                <li>
                  Dr. B. Latha, HoD, CSE Sri Sairam Engineering College and MC
                  Member, CSI Kancheepuram Chapter{" "}
                </li>
                <li>
                  Dr. E Chandra Blessie, Coimbatore Institute of Technology,
                  Coimbatore ( CSI Coimbatore chapter ){" "}
                </li>
                <li>
                  Dr. R Parameswari, Professor, Department of Computer Science,
                  Vels Institute of Science, Technology and Advanced Studies,
                  Chennai and MC member of CSI Chennai Chapter{" "}
                </li>
                <li>
                  Dr. Malu, Kerala University of Digital Sciences, Innovation
                  and Technology and Joint Secretary, CSI Trivandrum Chapter{" "}
                </li>
              </Ul>
            </div>
            <div ref={c} className="c opacity-0">
              <CommiteeTitle>Conference Convener(s) </CommiteeTitle>

              <Ul className="">
                <li>
                  Mr. P. V. Subramanian, Past Chairperson, CSI Chennai Chapter{" "}
                </li>
                <li>
                  {" "}
                  Dr. M. Senthil Kumar, Associate Professor & Head, Cyber
                  Security, SRM Valliammai Engineering College, Chennai and past
                  Secretary, CSI Kancheepuram Chapter{" "}
                </li>
                <li>
                  {" "}
                  Dr. A. Prema Kirubakaran, Professor, Vels Institute of
                  Science, Technology and Advanced Studies, Chennai and past
                  Secretary, CSI Chennai Chapter{" "}
                </li>
                <li> Mr. Rajesh P, MC Member, CSI Trivandrum Chapter </li>
                <li>
                  {" "}
                  Dr. S. K. Saravanan, Assistant Professor, SRM Valliammai
                  Engineering College and Secretary and CSI Kancheepuram Chapter{" "}
                </li>
                <li> Mr. R. Senthil Kumar, Secretary, CSI Trichy Chapter </li>
                <li>
                  {" "}
                  Mr. R. Saravana Kumar, Treasurer, CSI Coimbatore Chapter{" "}
                </li>
                <li>
                  {" "}
                  Ms. G. Priyanka, Assistant Professor, Mepco Schlenk
                  Engineering College, Secretary and CSI Sivakasi Chapter{" "}
                </li>
              </Ul>
            </div>

            <div ref={d} className="d opacity-0">
              <CommiteeTitle>Program Committee</CommiteeTitle>

              <Ul>
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
                  Dr. Elizabeth Sherly, Professor, Kerala University of Digital
                  Sciences, Innovation and Technology and Chairperson CSI
                  Trivandrum Chapter
                </li>
                <li>
                  Dr. Govinda. K, Associate Professor, SCOPE, VIT University,
                  Vellore 14, past Regional Vice-President of CSI - Region 7 and
                  Chair of CSI Vellore chapter
                </li>
                <li>
                  Dr. S. Ravimaran, Past Chairman, CSI, Tiruchirappalli Chapter
                  & Professor and Head, Dept. of Artificial Intelligence and
                  Data Science, Saranathan College of Engineering,
                  Tiruchirappalli.
                </li>
                <li>
                  Dr B.G. Geetha , Professor & Director , Department Of Computer
                  Science And Engineering , K.S. Rangasamy College Of Technology
                  Tiruchengode
                </li>
              </Ul>
            </div>
            <div ref={e} className="e opacity-0">
              <CommiteeTitle>
                International Advisory Board Member(s){" "}
              </CommiteeTitle>

              <Ul>
                <li>
                  Dr. Malaya Nayak, Executive Director, IT Buzz Limited, London,
                  UK
                </li>
                <li>
                  {" "}
                  Prof. Dharm Singh Jat, Professor of Computer Science, Namibia
                  University of Science and Technology, Nambia
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
                  Dr Mithun Chakraborty Professor, Lincoln University, Malaysia{" "}
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
            <div ref={f} className="f opacity-0">
              <CommiteeTitle>
                Technical Program Committee Member(s)
              </CommiteeTitle>

              <Ul>
                <li>
                  {" "}
                  Prof. Subash Chandra Yahdav, Professor, Central University of
                  Jharkhand, Ranchi
                </li>
                <li>
                  Dr. Dilip Kumar Yadav, Prof & Head Dept of Computer
                  Applications, NIT, Jamshedpur
                </li>
                <li>
                  Prof. Rathnadeep R Deshmukh, Former IETE Chairman & Professor,
                  Dr. B.A.M. University, Aurangabad
                </li>
                <li>
                  Dr. Mohan Raj Velayudhan Kumar, Senior Scientist, TCS
                  Research, Chennai
                </li>
                <li>
                  Dr. Mala Nehru, Associate Professor, Anna University, Chennai
                </li>
                <li>
                  Dr. Priya G, Associate Professor, Department of Analytics,
                  SCOPE, VIT, Vellore
                </li>
                <li>Mr. Robin Tommy, Innovation Head, TCS Trivandrum</li>
              </Ul>
            </div>
            <div ref={g} className="g opacity-0">
              <CommiteeTitle>Organizing Committee Member(s)</CommiteeTitle>
              <Ul>
                <li>
                  {" "}
                  Mr. T. V. Kamalak Kannan, Chairperson, CSI Chennai Chapter
                </li>
                <li>Dr. M. Murugan, Chairperson, CSI Kancheepuram Chapter</li>
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
                <li>Dr. V. Viajay Sherly, Chairperson, CSI Vellore Chapter</li>
                <li> Dr. G. Singaravelu, Chairperson, CSI Salem Chapter</li>
                <li>Ms. M. T. Sujatha, Chairperson, CSI Cochin Chapter</li>
              </Ul>
            </div>
            <div ref={h} className="h opacity-0">
              <CommiteeTitle>Guest Speaker</CommiteeTitle>

              <Ul>
                <li>
                  {" "}
                  Chief Guest: Dr. Mylswamy Annadurai, Former Director, ISRO
                  Satelite Centre & Chandrayan Project.
                </li>
                <li>
                  Mr. Dhakshinamoorthy R, Pricipal Enterprise Architect, IoT BU,
                  TCS
                </li>
              </Ul>
            </div>
            <div ref={i} className="i opacity-0">
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
            <div ref={j} className="j opacity-0">
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
              <h1 className="text-sky-900 font-bold mt-5">
                Registration deadline: February 28, 2023
              </h1>
              <h1 className="text-sky-900 font-bold ">
                Submission deadline: February 28, 2023
              </h1>
            </div>
            <div ref={k} className="k opacity-0">
              <CommiteeTitle>Author's Instructions </CommiteeTitle>
              <Ul>
                <li>
                  Plagiarism should be less than 10%. [Keep the Plagiarism
                  Report along with manuscript [May be from TURNITIN].
                </li>
                <li>
                  Grammatical error must NOT be there. Language Clarity is very
                  much expected, and final manuscript is channeled by a language
                  expert. Any sort of kind of dispute may lead to direct
                  rejection by the Springer
                </li>
                <li>
                  NO Figure and NO Table should be copied from any other paper /
                  Internet. This activity may lead to direct rejection.Quality
                  of the figures should be high resolution.
                </li>
                <li>
                  Page Limit: Minimum 6 Pages and Maximum 7 Pages after
                  compliance with the specified Format.
                </li>
                <li>
                  Each Paper must contain Abstract (150-200 words) and Keywords
                  (4-5).
                </li>
                <li>
                  All Table No. and Figure No. should be mentioned inside the
                  manuscript
                </li>
                <li>
                  All Reference Number / Citation must be properly cited inside
                  the manuscript.
                </li>
                <li>
                  Make sure that all the references are cited in the body of the
                  paper.
                </li>
                <li> Maintain good quality figure.</li>
              </Ul>
            </div>
          </Para1>
        </Div>
      </Content>
    </Main>
  );
};

export default Hero;

const Main = styled.div``;
const Title = styled.div``;
const Border = styled.div`
  border-style: double;
  border-width: 4px;
  margin-top: 40px;
  margin-left: 128px;
  margin-right: 128px;
  border-color: rgb(2, 132, 199);
`;

const Head1 = styled.div``;
const Para1 = styled.div``;
const Content = styled.div``;
const Div = styled.div``;
const Ul = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  font-weight: 400;
`;

const CommiteeTitle = styled.div`
  margin-top: 20px;
  color: rgb(12, 74, 110);
  font-size: 1.125rem;
  font-weight: 700;
`;
