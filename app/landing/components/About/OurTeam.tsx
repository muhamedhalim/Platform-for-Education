'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { FaBehance, FaGithub, FaLinkedin, } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohammed",
    role: "Team Leader Teacher",
    image: "/images/our2.jpg",
    // socialLinks: {
    //   linkedin: "https://www.linkedin.com/in/abdelrahman-hisham-a84267255", 
    // },
  },
  {
    name: "maraim",
    role: "Team Leader",
    image: "/images/our1.jpg",
    // socialLinks: {
    //   linkedin: "https://www.linkedin.com/in/gehad-salem-2a20b2250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    //   behance: "https://www.behance.net/gehadsalem99", 
    //   github: "https://github.com/GehadSalem", 
    // },
  },
  {
    name: "Amira",
    role: "Teacher",
    image: "/images/our.jpg",
    // socialLinks: {
    //   linkedin: "https://www.linkedin.com/in/mohamed-halem-3875242b5/",
    //   github: "https://github.com/muhamedhalim", 
    // },
  },
];

const TeamSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 text-center">
        <p className="text-blue-500 font-semibold flex items-center space-x-2 uppercase tracking-wide mb-6 justify-center">
            <span className="text-2xl text-blue-500">&#9711;</span>
            <span className="text-blue-500">Our Team</span>
        </p>
        <h2 className="text-black text-4xl font-bold mb-12">
            Meet the Experts Behind Our Success
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={index}
                    className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out w-80 mx-4 ${selected === index ? "border-4 border-blue-500 scale-110 shadow-blue-400/50" : ""}`}
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.6)",
                        borderColor: "#372AAC",
                        borderWidth: "4px",
                    }}
                    whileTap={{
                        scale: 1.12,
                        filter: "brightness(1.4)",
                    }}
                    onClick={() => setSelected(selected === index ? null : index)}
                >
                    {/* Hover */}
                   <motion.div
                        className="relative w-full h-80 overflow-hidden border border-transparent transition-all duration-300"
                        whileHover={{
                            borderColor: "#3B82F6", 
                        }}
                        >
                        <Image
                            src={member.image}
                            alt={`Profile of ${member.name}`}
                            layout="responsive"
                            width={320}
                            height={400}
                            className="w-full h-full object-contain transition-all duration-300"
                            priority
                            />
                    </motion.div>

                    {/* Social */}
                    {/* <div className="absolute top-4 left-4 flex space-x-4">
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <div className="bg-green-500 p-2 rounded-full shadow-md hover:scale-110 transition">
                                <FaLinkedin className="text-black" />
                            </div>
                        </a> */}
                        {/* Add Behance only if it exists */}
                        {/* {member.socialLinks.behance && (
                            <a href={member.socialLinks.behance} target="_blank" rel="noopener noreferrer">
                                <div className="bg-green-500 p-2 rounded-full shadow-md hover:scale-110 transition">
                                    <FaBehance className="text-black" />
                                </div>
                            </a>
                        )}
                        {member.socialLinks.github && (
                            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <div className="bg-green-500 p-2 rounded-full shadow-md hover:scale-110 transition">
                                    <FaGithub className="text-black" />
                                </div>
                            </a>
                        )}
                    </div> */}
                    {/* Info */}
                    <div className="bg-black p-6">
                        <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                        <p className="text-blue-500 mt-1">{member.role}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default TeamSection;
