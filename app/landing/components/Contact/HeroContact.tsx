import Image from 'next/image';

export default function HeroContact() {
  return (
    <div className="relative w-full h-[200px] mt-23 md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* blur */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroContact.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="filter blur-md brightness-50"
        />
      </div>

      {/* Text*/}
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-8 h-1 bg-yellow-500"></div>
          <p className="uppercase text-sm tracking-wider">Contact Us</p>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Lets Get In Touch & Connected <br /> With Our Team Work.
        </h1>
      </div>
    </div>
  );
}