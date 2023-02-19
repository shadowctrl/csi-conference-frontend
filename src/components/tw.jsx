import React from "react";
import Typewriter from "typewriter-effect";

const Tw = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(`Greetings from CSI Region 7 Chapters, Chennai, Kancheepuram, Trivandrum, Sivakasi , Coimbatore, Trichy, Vellore, Salem and Cochin.
          
          We are organizing an international Research Conference( Scopus
    Indexed-CRC Press Taylor & Francis Group) in association with Vels
    Institute of Science, Technology & Advanced Studies (VISTAS) from
    Friday, 24th March to 26th March 2023.`);
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Tw;
