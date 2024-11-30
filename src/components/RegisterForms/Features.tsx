import React from 'react'
import { FcOk } from "react-icons/fc"
function Features() {
  return (
    <div className=" flex flex-col xl:mt-12 lg:mt-10 mt-8 xl:px-16 lg:px-10 px-4 gap-4 justify-center">
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px]  text-white">Personal Councellor</p>
                </div>
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px] text-white">Admission Assistance</p>
                </div>
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px] text-white">Lowest Package Seats</p>
                </div>
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px] text-white">Expert Guidance</p>
                </div>
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px] text-white">MCI/NTA Updates</p>
                </div>
                <div className=" flex gap-3 ">
                    <FcOk/>
                    <p className="xl:text-sm lg:text-[10px] text-[8px] text-white">Fees Negtiation</p>
                </div>
            </div>
  )
}

export default Features