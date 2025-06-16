'use client';

import Image from 'next/image';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { GiBookshelf, GiPartyPopper } from 'react-icons/gi';

export default function StatisticsSection() {
  return (
    <section className="relative w-full h-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-blue-900/80 backdrop-brightness-75"></div>
      </div>
      {/* Main Content */}
      <div className="px-6 md:px-20 py-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Box */}
        <div className="bg-[#0356A6] rounded-3xl p-8 max-w-md">
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            Trusted By Leading <br /> Organizations Worldwide.
          </h3>
          <p className="text-white/90 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis.
          </p>
          <div className="space-y-4">
            <ProgressBar title="Successfully Lesson" value={98} />
            <ProgressBar title="Expert Tutors" value={100} />
          </div>
        </div>

        {/* Right Stats */}
   <div className="grid grid-cols-2 gap-6">
  <StatBox
    icon={<FaUserGraduate className="text-yellow-300 text-4xl" />}
    number="150K"
    title="Students Registered"
  />
  <StatBox
    icon={<GiBookshelf className="text-yellow-300 text-4xl" />}
    number="25K"
    title="Lessons Delivered"
  />
  <StatBox
    icon={<FaChalkboardTeacher className="text-yellow-300 text-4xl" />}
    number="10K"
    title="Tutors Worldwide"
  />
  <StatBox
    icon={<GiPartyPopper className="text-yellow-300 text-4xl" />}
    number="50K"
    title="Student Satisfaction"
  />
</div>
      </div>
    </section>
  );
}

function ProgressBar({ title, value }: { title: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold">
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2 mt-1">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

function StatBox({
  icon,
  number,
  title,
}: {
  icon: ReactNode;
  number: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <div className="text-yellow-300 text-3xl">{icon}</div>
      <h4 className="text-2xl font-bold mt-1">{number}</h4>
      <p className="font-semibold mt-1">{title}</p>
      <p className="text-sm text-white/80 mt-1">
        Lorem ipsum dolor sit amet
      </p>
    </div>
  );
}
