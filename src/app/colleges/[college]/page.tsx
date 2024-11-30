import HeroSection from "@/components/collegeDetailsPageSections/heroSection/HeroSection";
import InformationSection from "@/components/collegeDetailsPageSections/InformationSection";
import HighlightsSlider from "@/components/collegeDetailsPageSections/highlightsSlider/HighlightsSlider";
import Section3 from "@/components/collegeDetailsPageSections/section3/Section3";
import { collegeDetailsPage } from "@/data/collegeDetail";
import { global } from "@/data/globalData";
import React from "react";
import TopColleges from "@/components/topColleges/TopColleges";
import Section10 from "@/components/Section10";
import AreYouConfused from "@/components/AreYouConfused";
import CollegeDetail from "@/components/collegeDetailsPageSections/collegeDetail/CollegeDetail";
import Faqs from "@/components/faqs/Faqs";

export default function CollegeDetails() {
  return (
    <>
      <HeroSection data={collegeDetailsPage} />
      <CollegeDetail data={collegeDetailsPage?.collegeDetails} />
      <Section3 data={collegeDetailsPage} />
      <HighlightsSlider data={collegeDetailsPage} />
      <InformationSection data={collegeDetailsPage?.topRecruiters} />
      <Section10 data={collegeDetailsPage?.brochureSection} />
      <InformationSection data={collegeDetailsPage?.reviews} />
      <TopColleges data={global?.topColleges} />
      <InformationSection data={collegeDetailsPage?.photoGallery} />
      <InformationSection data={collegeDetailsPage?.videoGallery} />
      <Faqs data={collegeDetailsPage?.faqs} />
      <AreYouConfused />
    </>
  );
}
