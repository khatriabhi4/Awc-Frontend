import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const searchItems = [
  "NEET Exams",
  "UPSC Exams",
  "IIT JEE Advanced / Mains",
  "LAW Exams",
  "ILETS Abroad Exams",
  "LAW Exams",
];

const MostSearch: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1300px] p-3">
      <Carousel className="w-full">
        <CarouselContent className="ml-5 flex space-x-2">
          <h2 className="mb-2 text-lg font-semibold">Most Searched Items :</h2>
          {searchItems.map((item, index) => (
            <CarouselItem key={index} className=" max-w-fit">
              <div className="cursor-pointer rounded-full border border-gray-300 bg-blue-100 px-4 py-1 text-sm">
                {item}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MostSearch;
