"use client";
import React from "react";
import { motion } from "framer-motion";
import { FanIcon } from "lucide-react";
interface Prop {
  id: number;
  title: string;
  icon: JSX.Element;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Prop[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ id, title, icon }, i) => (
                <div
                  key={id}
                  className="p-6 rounded-lg border border-white/20 bg-black/50 backdrop-blur-sm max-w-xs w-56 hover:border-white/40 transition-colors duration-300 flex flex-col items-center "
                >
                  <>{icon}</>
                  <div className="text-white/80 text-sm leading-relaxed mb-4">
                    {title}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
