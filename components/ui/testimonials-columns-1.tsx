"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
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
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(122,0,255,0.05)] bg-[#0c0c12] max-w-xs w-full text-white backdrop-blur-md" 
                  key={i}
                >
                  <div className="text-gray-300 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border border-crealix-purple/30 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight text-white text-sm">{name}</div>
                      <div className="text-xs text-crealix-blue font-medium mt-0.5 uppercase tracking-wider">{role}</div>
                    </div>
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
