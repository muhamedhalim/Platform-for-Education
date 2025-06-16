import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
   <div className="pt-20 pb-12 bg-black">
  {/* grid */}
  <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
    
    {/* 1st footer */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Image src="/images/logo.png" alt="logo" height={100} width={100} />
      <p className="text-white text-opacity-50 mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      {/* social icons */}
      <div className="flex space-x-4 mt-4">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="w-6 h-6 text-blue-600" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 text-sky-500" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-6 h-6 text-red-700" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 text-pink-600" />
        </Link>
      </div>
    </div>

    {/* 2nd column */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-white font-semibold text-lg mb-4">Popular</h1>
      {["Web Development", "Hacking", "UI/UX Design", "App Development", "Desktop Development", "Digital Marketing"].map((item, index) => (
        <Link href="/pages/Courses" key={index} className="text-white opacity-80 hover:text-pink-400 transition-all duration-300 cursor-pointer mb-2">
            <p  key={index} className="text-white opacity-80 hover:text-pink-400 transition-all duration-300 cursor-pointer mb-2">
          {item}
            </p>
        </Link>
      ))}
    </div>

    {/* 3rd column */}
   <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <h1 className="text-white font-semibold text-lg mb-4">Quick Links</h1>
  {[
    { label: "Home", path: "/" },
    { label: "About", path: "/pages/About" },
    { label: "Courses", path: "/pages/Courses" },
    { label: "Teacher", path: "/pages/Teacher" },
    { label: "Profile", path: "/pages/profile" },
    { label: "Privacy Policy", path: "/pages/privacy-policy" },
  ].map((item, index) => (
    <Link
      key={index}
      href={item.path}
      className="text-white opacity-80 hover:text-pink-400 transition-all duration-300 cursor-pointer mb-2"
    >
      {item.label}
    </Link>
  ))}
</div>


    {/* 4th column */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-white font-semibold text-lg mb-4">Subscribe to our Newsletter</h1>
      <input
        type="text"
        placeholder="Enter your email"
        className="px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white mb-3"
      />
      <button className="px-6 py-2 rounded-lg outline-none bg-rose-700 w-full text-white hover:bg-rose-800 transition">
        Subscribe
      </button>
    </div>
  </div>

  <p className="text-center mt-4 text-base text-white opacity-70">
    © Copyright 2025 by Halim
  </p>
</div>

  );
};

export default Footer;
