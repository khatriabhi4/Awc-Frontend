"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import useIsMobile from "@/customHooks/useIsMobile";

export default function BannerSection({ data, sData }: any) {
  const isMobile = useIsMobile(450);
  return (
    <section className="my-16 w-full max-md:mt-5">
      <Wrapper className="flex items-center justify-between max-md:flex-col max-md:gap-y-5">
        {/* Left Side of Banner */}
        <div className="flex w-max flex-col gap-y-3 max-sm:w-full">
          {/* Title  */}
          <h1 className="flex flex-col text-wrap text-[1.750rem] font-medium md:gap-y-2 md:text-5xl">
            {sData?.title?.t1 && (
              <span className="text-blue-950/70">{sData?.title?.t1}</span>
            )}
            {sData?.title?.t2 && (
              <span className="text-blue-950">{sData?.title?.t2}</span>
            )}
            {sData?.title?.t3 && (
              <span className="text-blue-500">{sData?.title?.t3}</span>
            )}
          </h1>
          {sData?.text1 && (
            <p className="mb-5 text-wrap">
              {isMobile ? (
                sData?.text1
              ) : (
                <TextWithLineBreak text={sData?.text1} />
              )}
            </p>
          )}
          {/* Input field */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-5 flex h-12 items-center gap-1"
          >
            <input
              className="h-full w-full rounded-md border  bg-zinc-100 p-5 shadow md:max-w-[500px]"
              placeholder="Search Colleges, Courses, Exams & more"
            />
            <button type="submit" className="banner-search-button ">
              <CiSearch className="text-2xl text-white" />
            </button>
          </form>
          {/* Buttons  */}
          <div className="flex gap-1 md:gap-2">
            <Link
              href={sData?.button1?.href || "#"}
              className="button2 max-md:px-2"
            >
              {sData?.button1?.text}
            </Link>
            <Link
              href={sData?.button2?.href || "#"}
              className="button1 max-md:px-3"
            >
              {sData?.button2?.text}
            </Link>
          </div>
        </div>
        {/* Right Side of Banner  */}
        <div className="relative flex items-center gap-x-5 md:w-1/2">
          <div className="relative flex h-full w-3/5 flex-col gap-y-5">
            {sData?.img?.data[0]?.url && (
              <Image
                src={sData?.img?.data[0]?.url}
                alt="b2"
                width={1000}
                height={1000}
                className="ml-auto h-full max-h-[200px] w-max  rounded-lg object-contain"
              />
            )}
            {sData?.img?.data[1]?.url && (
              <Image
                src={sData?.img?.data[1]?.url}
                alt="b1"
                width={1000}
                height={1000}
                className="ml-auto h-full max-h-[320px] w-max  rounded-lg object-contain"
              />
            )}
          </div>
          {sData?.img?.data[2]?.url && (
            <Image
              src={sData?.img?.data[2]?.url}
              alt="b3"
              width={1000}
              height={1000}
              className="h-full max-h-[350px] w-2/5 rounded-lg object-contain"
            />
          )}
          <p className="absolute bottom-5 right-1/2 flex w-[30%] min-w-[235px] translate-x-1/2 flex-col rounded-xl bg-blue-950 px-8 py-3 text-white max-md:scale-75 md:translate-x-full">
            <span className="mb-3 text-wrap">{data?.text2}</span>
            <span>{data?.text3}</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
