import Footer from "@/app/landing/components/Home/footer/footer";
import Courses from "../../landing/components/Home/Course/Courses";
import HeroCourses from "@/app/landing/components/Courses/HeroCourses";

function CoursesPage() {
  return (
    <div>
      <HeroCourses/>
      <Courses />
      <Footer />
    </div>
  );
}

export default CoursesPage;
