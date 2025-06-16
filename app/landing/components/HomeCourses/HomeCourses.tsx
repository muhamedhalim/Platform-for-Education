"use client";

import CourseCard from "../Home/Course/Coursecard";

type Course = {
  id: number;
  image: string;
  title: string;
  price: number;
  author: string;
  reviewNumber: number;
  lessons: number;
  students: number;
  category: string;
};

type Props = {
  courses: Course[];
};

const HomeCourses = ({ courses }: Props) => {
  const displayedCourses = courses.slice(0, 6);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Top Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/pages/Courses" 
          className="px-6 py-3 text-white bg-rose-700 hover:bg-rose-800 rounded-full font-semibold transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HomeCourses;
