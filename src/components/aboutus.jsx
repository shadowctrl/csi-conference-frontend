import { React, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Tw from "./tw";
import "./hero.css";

const Aboutus = () => {
  const tw = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains("intro")) {
          if (entry.isIntersecting) setIsIntersecting(true);
        }
        if (entry.isIntersecting) entry.target.classList.add("animate");
        if (!entry.isIntersecting) {
          entry.target.classList.remove("animate");
          // entry.target.classList.add("fadeRL");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    const divs = document.querySelectorAll(
      "div.aboutus, div.intro, div.venue, div.il, div.c1, li.c2, li.c3, li.c4, li.c5"
    );

    divs.forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <Parent
      id="au"
      className="font-poppins md:ml-48 md:mr-48 ml-6 mr-6 text-lg space-y-5"
    >
      <Title className="aboutus text-center font-extrabold md:ml-32 md:mr-32 md:mb-10 mr-8 ml-8 md:text-3xl mt-10 text-sky-200 rounded-3xl bg-gray-gradient">
        About Us
      </Title>

      <H1 className="intro font-semibold text-sky-900">
        {isIntersecting ? <Tw /> : ""}
        {/* {console.log(isIntersecting)} */}
      </H1>

      <H1 className="venue">
        <span className=" text-sky-900 font-semibold"> Mode: </span> Hybrid
        <br />
        <span className=" text-sky-900 font-semibold"> Venue: </span> Vels
        Institute of Science, Technology & Advanced Studies, Velan Nagar, P.V.
        Vaithiyalingam Road Pallavaram, Chennai - 600 117,Tamil Nadu, India.
      </H1>

      <div className="il text-sky-900 font-semibold no-underline">
        {" "}
        Important Links
      </div>
      <ImportantLinks className="underline il ">
        <Link className="animate-pulse">
          {" "}
          <a href="https://bit.ly/3VkMlmL" className="">
            Click here to register{" "}
          </a>
        </Link>
        <Link className="animate-pulse">
          {" "}
          <a href="https://bit.ly/3jIQkMM"> Click here to download Flyer</a>
        </Link>

        <Link className="animate-pulse">
          {" "}
          <a href="https://www.routledge.com/Conference-Proceedings-Series-on-Intelligent-Systems-Data-Engineering/book-series/CPSISDEO">
            Publication{" "}
          </a>
        </Link>
        <Link className="animate-pulse">
          {" "}
          <a href="http://bit.ly/3gGUdRr"> Submission Link </a>
        </Link>
        <Link className="animate-pulse">
          {" "}
          <a href="http://www.csi-kancheepuram.org/conference.html">
            Click here for more information
          </a>
        </Link>
      </ImportantLinks>

      <Contact className="py-2">
        <div className="c1 text-sky-900 text-xl font-semibold mb-3 ">
          {" "}
          For further details contact:{" "}
        </div>
        <Ul>
          <li className="c2">
            <span> Mr. P. V. Subramanian </span>, Email-id: pvs1301@gmail.com,
            Phone: 99400 71607{" "}
          </li>
          <li className="c3">
            <span>Dr. M. Senthil Kumar </span>, Email-id:
            senthilkumarm.cse@srmvalliammai.ac.in, Phone: 99945 20740{" "}
          </li>
          <li className="c4">
            {" "}
            <span>Dr. A. Prema Kirubakaran </span>, Email-id:
            premakirubakaran78@gmail.com, Phone: 99520 18671{" "}
          </li>
          <li className="c5">
            <span>Dr. C. L. Biji </span>, Email-id: bijijomy@gmail.com, Phone:
            94461 71877
          </li>
        </Ul>
      </Contact>
    </Parent>
  );
};

export default Aboutus;

const Parent = styled.div``;
const Title = styled.div``;
const H1 = styled.div``;
const ImportantLinks = styled.div``;
const Link = styled.div`
  font-style: italic;
  font-weight: 500;
  color: rgb(3, 105, 161);
`;

const Contact = styled.div``;
const Ul = styled.div`
  span {
    font-weight: 600;
    color: rgb(14, 165, 233);
  }
`;
