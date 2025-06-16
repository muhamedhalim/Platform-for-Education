// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/HeroSection.jpg" 
          alt="Learner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"/>
      </div>

      {/* Content Box */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 md:px-16">
        <div className="bg-blue-800 bg-opacity-50 text-white max-w-xl py-15 px-10 rounded-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands Of Learners<br />Achieving Fluency Now.
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-yellow-400 text-blue-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 transition">
            Join Now →
          </button>
        </div>
      </div>
    </section>
  );
}
