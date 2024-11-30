"use client";
import PartnersCard from "@/components/cards/PartnersCard";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 } from "@/asset";
import Wrapper from "@/components/Wrapper";

export default function PartnersSection({data, sData}:any) {
  const images = sData?.images?.data && [...sData?.images?.data];
  const FAST_DURATION = 10;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <section className="mx-auto my-5 w-full">
      <Wrapper className="relative overflow-x-hidden py-8">
        <h1 className="title1 mb-5 w-full text-center font-semibold">
          {sData?.title}
        </h1>
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-transparent to-gray-100"></div>
        <motion.div
          className=" mx-auto flex max-w-[1440px] gap-4"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {images && [...images, ...images, ...images, ...images, ...images,...images].map((item, idx) => (
            <PartnersCard image={item?.url} key={item?.id} />
          ))}
        </motion.div>
      </Wrapper>
    </section>
  );
}
