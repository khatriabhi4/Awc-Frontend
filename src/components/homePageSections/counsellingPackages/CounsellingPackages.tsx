"use client";
import Wrapper from "@/components/Wrapper";
import PackageCardSlider from "@/components/cards/PackageCard";
import React, { useState } from "react";

export default function CounsellingPackages({ data, sData }: any) {
  return (
    <section className="my-10 w-full">
      <Wrapper isMaxWidthChangeRequired="max-w-[1500px]">
        {sData?.title && (
          <h1 className="title1 mb-8 text-center">{data?.title}</h1>
        )}
        {sData?.CounsellingPackagesCards && (
          <div className="Package relative w-full">
            <PackageCardSlider data={sData?.CounsellingPackagesCards} />
          </div>
        )}
      </Wrapper>
    </section>
  );
}
