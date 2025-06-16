import Head from "next/head";
import Image from "next/image";

const services = [
  {
    title: "One-On-One Language Training",
    description: "Learn at your own pace with personalized guidance.",
    icon: "/icons/one-on-one.svg",
    image: "/b1.jpg",
  }, 
  {
    title: "Group Language Classes",
    description: "Engage and learn collaboratively in dynamic group sessions.",
    icon: "/HeroSection.jpg",
    image: "/HeroSection.jpg",
  },
  {
    title: "Corporate Language Training",
    description: "Tailored programs for teams to thrive in global business.",
    icon: "/about.jpg",
    image: "/images/about.jpg",
  },
  {
    title: "Language Certifications",
    description: "Prepare for official exams with expert training.",
    icon: "/icons/certificate.svg",
    image: "/images/service4.jpg",
  },
  {
    title: "Immersion And Conversation",
    description: "Speak fluently with immersive real-world practice.",
    icon: "/icons/conversation.svg",
    image: "/images/service5.jpg",
  },
  {
    title: "Kids’ Language Learning",
    description: "Fun and engaging programs designed for children.",
    icon: "/icons/kids.svg",
    image: "/images/service6.jpg",
  },
];

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70 group-hover:bg-opacity-50 transition duration-300 z-10" />

      {/* Content */}
      <div className="relative z-20 p-6 text-white flex flex-col items-center text-center h-full">
        <div className="w-12 h-12 mb-4 relative">
          <Image src={service.icon} alt={service.title} fill className="object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-sm mb-4">{service.description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Our Learning Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-16 px-4">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 leading-tight">
          We Offer Learning Services That <br /> Meet Your Needs.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </main>
    </div>
  );
}
