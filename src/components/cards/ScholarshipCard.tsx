"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaMoneyCheckDollar, FaRegCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSchoolOutline } from "react-icons/io5";

export default function ScholarshipCard({ data }: any) {
  const uniqueId = "scholar1234";
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-[95%] max-w-fit px-5 ${uniqueId}`}
      >
        {data.map((d: any, index: number) => (
          <SwiperSlide
            key={index}
            className="mb-12 w-full overflow-hidden rounded-xl border border-zinc-300 bg-white"
          >
            <ScholarshipCardContent data={d} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </>
  );
}

function ScholarshipCardContent({ data }: any) {
  return (
    <React.Fragment>
      <div className="relative w-full">
        <Image
          src={data?.bgImage?.url}
          alt="data"
          className="h-[250px] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between gap-3 bg-black bg-opacity-70 p-3 text-white">
          <div className="flex w-full justify-between">
            <button className="h-max w-max rounded-full bg-white p-2 text-blue-950 hover:bg-red-600 hover:text-white">
              <FaRegHeart />
            </button>
            {data?.logo?.url && (
              <Image
                src={data?.logo?.url}
                alt="teacher"
                width={112}
                height={112}
                className="mt-5 h-28 w-28 rounded-full border-8 border-zinc-200 object-cover"
              />
            )}
          </div>
          <div className="">
            <h6 className="text-wrap font-medium">{data?.title}</h6>
            {data?.awardedTo && (
              <p className="text-wrap text-sm font-thin">
                <span className="text-blue-500">Awarded To:</span>{" "}
                {data?.awardedTo}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="text-medium flex flex-col gap-3 p-3 text-black capitalize">
        {/* line 1  */}
        {data?.date && (
          <p className="flex gap-2">
            <SlCalender className="text-blue-950/70 mt-[4px]" />
            <span>{data?.date}</span>
          </p>
        )}
        {data?.amount && (
          <p className="flex gap-2">
            <FaMoneyCheckDollar className="text-blue-950/70 mt-[4px]" />
            <span>{data?.amount}</span>
          </p>
        )}
        <p className="flex gap-2">
          <IoSchoolOutline className="text-blue-950/70 mt-[4px]" />
          <span>
            {data?.course?.map((item: any, index: number) => (
              <React.Fragment key={item}>
                {item}
                {index !== data?.course?.length - 1 && "/ "}
              </React.Fragment>
            ))}
          </span>
        </p>
        {/* line 4  */}
        <Link href={data?.slug || "#"}>
          <button className="cardButton2">View Details</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
