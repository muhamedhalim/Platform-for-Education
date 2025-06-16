"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

const HeroImage = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={2500}
    >
      {/* mobile*/}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="block lg:hidden w-full max-w-[350px] mx-auto overflow-hidden"
      >
        <Image
          src="/images/hero.png" 
          alt="Hero Mobile"
          width={350}
          height={350}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* dicktop*/}
      <div
        data-aos="fade-left"
        data-aos-delay="1050"
        className="hidden lg:block w-full overflow-hidden"
      >
        <Image
          src="/images/hero.png"
          alt="Hero Desktop"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
    </Tilt>
  );
};

export default HeroImage;
