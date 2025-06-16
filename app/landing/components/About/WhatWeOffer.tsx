"use client";

import Image from "next/image";
import React, { useState } from "react";

const WhatWeOffer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Tailored Lessons for Every Student",
      description:
        "Our lessons are designed based on the unique needs and pace of each student to ensure effective learning.",
    },
    {
      title: "Advanced Learning Tools",
      description:
        "We provide cutting-edge tools such as AI-powered feedback, interactive quizzes, and speech recognition.",
    },
  ];

  const toggleFeature = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* img*/}
 <div className="space-y-6">
  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/images/succ.jpg"
      alt="Background"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/images/succ2.jpg"
      alt="Background"
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>


        {/* Text*/}
        <div className="text-left">
          <h2 className="text-lg font-semibold text-yellow-400 uppercase mb-2">
            What We Offer
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Platform Offers The Best In Language Learning.
          </h3>
          <p className="text-gray-300 max-w-md mb-6">
            Explore personalized language instruction, engaging tools, and an
            immersive learning environment tailored to your needs.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFeature(index)}
                  className={`flex items-center justify-between w-full text-left py-4 px-6 rounded-full text-white font-semibold transition-all ${
                    activeIndex === index ? "bg-orange-500" : "bg-blue-600"
                  } hover:bg-opacity-90`}
                >
                  <span>{feature.title}</span>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        className="w-5 h-5 transform rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeIndex === index && feature.description && (
                  <p className="text-gray-300 mt-3 pl-6">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
