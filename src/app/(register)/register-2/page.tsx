import React from "react";
import LeftImage from "@/asset/regsiterForms/leftImage.png";
import Logo from "@/asset/regsiterForms/logo.png";
import Features from "@/components/RegisterForms/Features";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Page2Form from "@/components/RegisterForms/Page2Form";
function RegisterFormOne() {
  return (
    <>
      <div className="fixed md:inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="relative xl:top-[15%] lg:top-[30%] md:top-[15%] md:left-[10%] md:grid w-[80%] grid-cols-4 ">
          <div
            className="hidden md:block col-span-1 py-14 "
            style={{
              backgroundImage: `url(${LeftImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex  flex-col items-center justify-center text-center">
              <div>
              <Image src={Logo} alt="logo" width={90} />
              </div>
              
              <p className="xl:text-2xl lg:text-lg text-sm font-semibold text-white">
                Acchawala College
              </p>
              <p className=" xl:text-sm lg:text-[10px] text-[8px]  text-white">
                India's Best Education Consultancy
              </p>
            </div>
            <Features />
          </div>

          <div className="md:col-span-3 bg-white w-screen md:h-auto h-screen  md:w-auto py-14  px-8">
            <div className="flex  justify-between">
              <div>
                <p className=" text-[#012148] font-semibold text-2xl ">Register Now To Apply</p>
                <p className="text-[#012148]">Get Details and Latest Updates</p>
              </div>
              <div><ImCross/></div>
            </div>
            <Page2Form/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterFormOne;
