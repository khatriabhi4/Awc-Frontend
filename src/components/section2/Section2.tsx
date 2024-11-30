import Image from "next/image";
import React from "react";

export default function Section2({ data, sData }: any) {
  return (
    <section className="my-5 w-full">
      <div className="flex w-full max-md:flex-col mx-auto">
        <Card
          bgColor="bg-blue-950"
          title={sData?.card1?.title}
          text={sData?.card1?.text}
          icon={sData?.card1?.icon?.url}
        />
        <Card
          bgColor="bg-[#165bae]"
          title={sData?.card2?.title}
          text={sData?.card2?.text}
          icon={sData?.card2?.icon?.url}
        />
        <Card
          bgColor="bg-sky-500"
          title={sData?.card3?.title}
          text={sData?.card3?.text}
          icon={sData?.card3?.icon?.url}
        />
      </div>
    </section>
  );
}

function Card({ bgColor, title, text, icon }: any) {
  return (
    <div
      className={`md:flex-center flex  [flex:1] max-md:gap-5 md:flex-col ${bgColor} p-3 text-white max-md:pl-5 md:p-5`}
    >
      {icon && <Image src={icon} width={60} height={60} alt="icon" className="w-50" />}
      <div className="md:text-center">
        <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
