import { notFound } from "next/navigation";
import HeroContact from "@/app/landing/components/Contact/HeroContact";
import { coursesData } from "@/app/landing/data/data";
import { ReactNode } from "react";

type Props = {
  params: {
    id: string;
  };
};

type Course = {
  duration: ReactNode;
  id: number;
  image: string;
  title: string;
  price: number;
  author: string;
  reviewNumber: number;
  lessons: number;
  students: number;
  category: string;
  description?: string;
  whatYouLearn?: string[];
  difficulty?: string[];
};

export default function Page({ params }: Props) {
  const course = (coursesData as Course[]).find(
    (c) => c.id === Number(params.id)
  );

  if (!course) return notFound();

  return (
    <>
      <HeroContact />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{course.description}</p>

            {/* Course Info Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Category: {course.category}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Duration: {course.duration}
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                Lessons: {course.lessons}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Students: {course.students}+
              </span>
            </div>

            {/* What You Will Learn */}
            {Array.isArray(course.whatYouLearn) && course.whatYouLearn.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                  What You'll Learn
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Card */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-10 border border-gray-200">
              {/* Course Image */}
              {course.image && (
                <div className="mb-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">Join This Course</h3>
              <p className="text-gray-600 mb-4">
                Start learning today with over {course.students}+ learners!
              </p>

              {/* Difficulty */}
              <div className="mb-4">
                <p className="text-gray-600 mb-2 font-medium">Difficulty:</p>
                <div className="flex gap-2 flex-wrap">
                  {course.difficulty?.map((level, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  ${course.price.toLocaleString()}
                </p>
                <p className="text-gray-500 text-sm">
                  Inclusive of all taxes
                </p>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-3">
                Enroll Now
              </button>

              <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium">
                Add to Cart
              </button>

              <p className="text-center text-gray-500 mt-4 text-sm">
                30-Day Money Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
