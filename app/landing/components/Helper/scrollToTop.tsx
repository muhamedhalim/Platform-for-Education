"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 40; 
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  return (
    showScroll && (
      <button
        onClick={smoothScrollToTop}
        className="fixed bottom-6 right-6 bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all hover:bg-blue-600 z-[9999] border-2 border-white"
        style={{ zIndex: 9999 }}
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
