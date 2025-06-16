"use client";

import Hero from "./Hero/hero";
import About from "./About/about";
import Courses from "./Course/Courses";
import Feature from "./feature/feature";
import Review from "./review/review";
import Article from "./article/article";
import HomeCourses from "../HomeCourses/HomeCourses"; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const coursesData = [
  {
    id: 1,
    image: "/course1.jpg",
    title: "React for Beginners",
    price: 49,
    author: "John Doe",
    reviewNumber: 120,
    lessons: 15,
    students: 300,
    category: "Development",
  },
  {
    id: 2,
    image: "/course2.jpg",
    title: "Advanced CSS",
    price: 39,
    author: "Jane Smith",
    reviewNumber: 85,
    lessons: 12,
    students: 220,
    category: "Design",
  },
  {
    id: 3,
    image: "/course3.jpg",
    title: "Node.js API Mastery",
    price: 59,
    author: "Alex Johnson",
    reviewNumber: 98,
    lessons: 18,
    students: 260,
    category: "Backend",
  },
  {
    id: 4,
    image: "/course4.jpg",
    title: "UI/UX Design Bootcamp",
    price: 45,
    author: "Emma Watson",
    reviewNumber: 112,
    lessons: 14,
    students: 320,
    category: "Design",
  },
  {
    id: 5,
    image: "/course5.jpg",
    title: "TypeScript Deep Dive",
    price: 55,
    author: "Chris Lee",
    reviewNumber: 77,
    lessons: 20,
    students: 210,
    category: "Development",
  },
  {
    id: 6,
    image: "/course6.jpg",
    title: "Next.js in Practice",
    price: 69,
    author: "Sophie Green",
    reviewNumber: 133,
    lessons: 22,
    students: 400,
    category: "Frontend",
  },
];

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      });
    };
    initAos();
  }, []);

  return (
    <div className="">
      <Hero />
      <About />
      <HomeCourses courses={coursesData} /> 
      <Feature />
      <Review />
      <Article />
    </div>
  );
};

export default Home;
