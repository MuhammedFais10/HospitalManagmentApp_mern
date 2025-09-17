import React from "react";
import signUpImg from "../assets/Images/signup.gif";
import avatar from "../assets/Images/doctor-img01.png";

function SignUp() {
  return (
    <section className="px-5 xl:px-0 h-[80vh] ">
      <div className="max-w-[1000px] mx-auto   ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-2 gap-4 ">
          {/* ====img box=========== */}

          <div className="hidden md:block lg:block bg-primaryColor rounded-l-lg ">
            <figure className="rounded-l-lg">
              <img
                src={signUpImg}
                alt="signup"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>

          {/* ===== sign Up form ====== */}
          <div className="rounded-l-lg lg:pl-16 py-10  ">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name "
                  className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email "
                  className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder=" Password"
                  name="password "
                  className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor  cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-textColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 
              focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-textColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 
              focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="costumFile"
                    accept=".jpg , .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 curser-pointer"
                  />
                  <label htmlFor="customFile" className=""></label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
