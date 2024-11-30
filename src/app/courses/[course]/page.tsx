import AreYouConfused from "@/components/AreYouConfused";
import HeroSection from "@/components/courseDetailPageSections/heroSection/HeroSection";
import InformationSection from "@/components/courseDetailPageSections/informationSection/InformationSection";
import Faqs from "@/components/faqs/Faqs";
import PageNavbarDetails from "@/components/pageNavbarDetails/PageNavbarDetails";
import TopCourses from "@/components/topCourses/TopCourses";
import { courseDetailsPage } from "@/data/courseData";
import React from "react";

export default function CourseDetailPage() {
  return (
    <>
      <HeroSection data={courseDetailsPage?.bTech?.homeBanner} />
      <PageNavbarDetails data={courseDetailsPage?.bTech?.courseDetails} />
      <Faqs data={courseDetailsPage?.bTech?.faqs} />
      {/* Similar Courses  */}
      <TopCourses data={courseDetailsPage?.bTech?.similarCourses} />
      <InformationSection data={courseDetailsPage?.bTech?.moreCourses} />
      <AreYouConfused />
    </>
  );
}
