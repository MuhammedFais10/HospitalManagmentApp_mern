import React from "react";
import {Link } from "react-router-dom"
import aboutImg from "../../assets/Images/about.png";
import aboutCarding from "../../assets/Images/about-card.png";
function About() {
  return (
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCarding} alt="" />
          </div>
        </div>

        {/* =====about contect=========== */}

        <div className="w-full lg:w-1/2 xl;w-[670px] order-1 lg:order-2">
          <h2 className="heading"> Proud to be one of the nations best</h2>
          <p className="text__para">
            For 30 years in row, U.S. News & World Report has recognizrd us as
            one of the best publics hospital in the Nation and #1 in Texas.{" "}
          </p>
          <p className="text__para mt-[30px]">
            Our best best is somthing we strive for each day, caring for our patients-not
             looking back at what we accomplish but towards what we can do tomorrow. Providing the best.   
          </p>
          <Link to="/"><button className="btn">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
