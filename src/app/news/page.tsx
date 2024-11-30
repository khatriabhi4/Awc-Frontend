"use client";
import NewsCard from "@/components/NewsIndividualPage/NewsCard";
import HeroSection from "@/components/newss/HeroSection";
import LatestArticlesMain from "@/components/newss/LatestArticles/LatestArticlesMain";
import LatestNewsMain from "@/components/newss/LatestNews/LatestNewsMain";
import MostSearch from "@/components/newss/MostSearch";
import MostViewedMain from "@/components/newss/MostViewed/MostViewedMain";
import React from "react";
import MainImage from "@/asset/image 254.png";

function page() {
  const newsItems = [
    {
      id: 1,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 2,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 3,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 4,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
  ];
  return (
    <div>
      <HeroSection />
      <MostSearch />
      <LatestNewsMain />
      <MostViewedMain />
      <LatestArticlesMain />
      <NewsCard items={newsItems} />
    </div>
  );
}

export default page;
