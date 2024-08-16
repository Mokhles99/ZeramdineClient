import React, { useEffect, useState } from "react";
import "./About.css";

 //
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

 //
import Aos from "aos";
import "aos/dist/aos.css";

const Accordion = ({ title, desc, active, setActive }) => {
  const [activeAccording, setActiveAccording] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
       onClick={() => activeAccording ? setActiveAccording(false) :  setActiveAccording(true)}
      className={
        (activeAccording ? "activeAccordion" : "") + " singleAccordion"
      }
    >
      <span
        
        className={
          (activeAccording ? "activeTitle" : "") + " accordionTitle" + " flex"
        }
      >
        <span className="flex">
          <AiFillCheckCircle className="icon" />
          <span className="titleText">{title}</span>
        </span>
        <span className="dropDownIcon">
          {activeAccording ? (
           
            <BiSolidUpArrow className="icon"  />
          ) : (
            <BiSolidDownArrow className="icon" />
          )}
        </span>
      </span>
      <p
     
        className={(activeAccording ? "show" : "") + " description"}
      >
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
