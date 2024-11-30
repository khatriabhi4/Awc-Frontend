import React from "react";
import AbroadCollegeListSection from "@/components/studyAbroadListingPageSections/abroadCollegeListSection/abroadCollegeListSection";
import {
  abroadColleges,
  studyAbroadData,
  studyAbroadListingPage,
} from "@/data/studyAbroadPageData";
import HeroSection from "@/components/studyAbroadListingPageSections/heroSection/HeroSection";
export default function examsPage() {
  return (
    <>
      <HeroSection data={studyAbroadListingPage?.bannerSection} />
      <AbroadCollegeListSection
        collegeDataArray={abroadColleges}
        filterBy={studyAbroadListingPage?.filterBy}
      />
    </>
  );
}
