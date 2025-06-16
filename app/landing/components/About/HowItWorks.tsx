'use client';

import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="bg-[#0356A6] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <div className="mb-4">
            <span className="text-sm tracking-widest text-white font-medium relative before:absolute before:w-10 before:h-1 before:bg-orange-400 before:-bottom-1 before:left-0">
              HOW ITS WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Streamlined <br /> Language <br /> Learning Process.
          </h2>
          <p className="text-lg text-white/80 border-l-2 border-white/30 pl-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition">
            Learn More →
          </button>
        </div>

        {/* Image + Steps */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg max-w-md mx-auto">
            <Image
              src="/images/about.jpg" 
              alt="How it works"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="bg-[#044b90] rounded-2xl p-6 md:p-8 text-left space-y-8">
            <Step number="01" title="Choose Your Course" />
            <Step number="02" title="Connect With Your Tutor" />
            <Step number="03" title="Start Speaking Confidently" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title }: { number: string; title: string }) {
  return (
    <div className="border-b border-white/30 pb-4 last:border-0 last:pb-0">
      <div className="flex items-start gap-4">
        <span className="text-yellow-400 text-xl font-bold">{number}</span>
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-white/70 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing
          </p>
        </div>
      </div>
    </div>
  );
}
