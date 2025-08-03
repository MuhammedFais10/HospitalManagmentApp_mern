import React from "react";
import heroImg01 from "../assets/Images/hero-img01.png";
import heroImg02 from "../assets/Images/hero-img02.png";
import heroImg03 from "../assets/Images/hero-img03.png";
import icon01 from "../assets/Images/icon01.png";
import icon02 from "../assets/Images/icon02.png";
import icon03 from "../assets/Images/icon03.png";
import featureImg from "../assets/Images/feature-img.png"
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";

function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =======hero content========== */}

            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy , loneger life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis modi fugit ea saepe asperiores cupiditate nemo commodi
                  vel blanditiis voluptates adipisci maiores placeat eligendi
                  voluptatem iste, facilis, aliquid ut cum?
                </p>
                <button className="btn">Request an Appoinment</button>
              </div>

              {/* =======hero Counter */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5         
                lg:gap-[30px]"
              >
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Patients Satisfation</p>
                </div>
              </div>
            </div>
            {/* =======hero content========== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading teaxt-center">
              Providing the best medicsl services
            </h2>
            <p className="text__para">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className=".py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className=".py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className=".py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appoinment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* =======service section======== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical service </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmachted,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* =======service sectionend  */}

      {/* ====feature Section======== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======feature content======== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para ">
                  1. Schedule the appointment directly.
                </li>
                 <li className="text__para ">
                  2. Search for your physician here, and contact their office.
                </li>
                  <li className="text__para ">
                  3. View our physician who are accepting new patients, use the online sheduling tool to select an appoinment time.
                </li>
              </ul>
              <Link to="/">
              <button className="btn">Learn More </button>
              </Link>
            </div>
            {/* ======feature Image=========== */}

           <div className="relavite z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3"></div>
            </div> 
          </div>
        </div>
      </section>

      {/* ====feature Section end======== */}
      
    </>
  );
}

export default Home;
