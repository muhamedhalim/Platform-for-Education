import { coursesData } from "@/app/landing/data/data";
import Image from "next/image";
import CourseCard from "./Coursecard";

const Courses = () => {
    return ( 
        <div className="pt-16 pb-12 relative bg-gray-200">
            {/* Bounce ball */}
            <Image src="/images/cb.png" alt="image" width={800} height={800} className="absolute top-[30%] animate-bounce" />
            <div className="w-[80%] pt-8 pb-8 mx-auto">
                {/* title */}
                <h1 className="flex justify-center text-4xl md:text-5xl text-gray-900 font-bold"> Popular<span className=" text-amber-500"> Courses </span> </h1>
                {/* Courses */}
                <div className="md:mt-16 mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {coursesData.map((course,i) => {
                        return (
                            <div key={course.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-dalay={`${i*150}`}>
                                <CourseCard course={course}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Courses;