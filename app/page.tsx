"use client";

import Hero from "./landing/components/Home/Hero/hero";
import About from "./landing/components/Home/About/about";
import Courses from "./landing/components/Home/Course/Courses";
import Feature from "./landing/components/Home/feature/feature";
import Review from "./landing/components/Home/review/review";
import Article from "./landing/components/Home/article/article";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./landing/components/Home/footer/footer";
import HomeCourses from "./landing/components/HomeCourses/HomeCourses";

const coursesData = [
  {
    id: 1,
    image: "/images/c1.jpg",
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
    image: "/images/c2.jpg",
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
    image: "/images/c3.jpg",
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
    image: "/images/c4.jpg",
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
    image: "/images/c5.jpg",
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
    image: "/images/c6.jpg",
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
    useEffect(()=>{
        const initAos= async()=>{
            await import('aos')
            AOS.init({
                duration:1000,
                easing:"ease",
                once:true,
                anchorPlacement:"top-bottom"
            })
        }
        initAos();
    },[])
    return ( 
        <div className="">
            <Hero />
            <About />
            <HomeCourses courses={coursesData}/>
            <Feature />
            <Review/>
            <Article/>
            <Footer/>
        </div>
     );
}
 
export default Home;