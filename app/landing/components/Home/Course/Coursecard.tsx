"use client";

import Image from 'next/image';
import { FaFile, FaStar } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

type Props = {
    course: {
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
};

const CourseCard = ({ course }: Props) => {
    return (
        <Tilt>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <div className="relative w-full h-60">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-3 right-3 z-10 h-16 w-16 flex items-center justify-center text-lg font-bold rounded-full bg-rose-700 text-white shadow-md">
                        ${course.price}
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex items-center mt-2 space-x-4">
                        <span className="text-lg text-black text-opacity-70">{course.category}</span>
                        <span className="text-base text-gray-600">{course.author}</span>
                    </div>
                    <h1 className="text-xl text-black font-bold mt-2">{course.title}</h1>

                    <div className="flex mt-2 items-center space-x-2">
                        <div className="flex items-center">
                            {Array(5).fill(0).map((_, i) => (
                                <FaStar key={i} className="w-4 h-4 text-yellow-600" />
                            ))}
                        </div>
                        <span className="text-base text-orange-800 font-semibold">
                            ({course.reviewNumber} Reviews)
                        </span>
                    </div>

                    <div className="mt-6 mb-4 h-[1px] bg-gray-300 opacity-50" />

                    <div className="flex mb-2 items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <FaFile className="w-4 h-4 text-orange-600" />
                            <p className="text-base font-semibold text-gray-800">{course.lessons} Lessons</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaUserGroup className="w-4 h-4 text-orange-600" />
                            <p className="text-base font-semibold text-gray-800">{course.students} Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default CourseCard;
