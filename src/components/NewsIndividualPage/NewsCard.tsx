"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: any;
}

interface NewsCardProps {
  items: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  return (
    <div className="mx-auto max-w-[1300px] overflow-hidden p-3">
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className="flex items-center p-4">
                  <Image
                    src={item.image}
                    alt="News image"
                    width={100}
                    height={100}
                    className="mr-4 h-20 rounded-lg object-fill"
                  />
                  <div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <h2 className="mt-1 text-lg font-semibold">{item.title}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={prevItem}>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md">
              &#8592;
            </button>
          </CarouselPrevious>
          <CarouselNext onClick={nextItem}>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md">
              &#8594;
            </button>
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default NewsCard;
