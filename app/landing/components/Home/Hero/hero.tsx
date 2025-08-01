import HeroImage from "./heroimage";
import HeroContent from "./herocontent";

const Hero = () => {
    return ( 
        <div className="w-full mt-26 justify-center items-center pt-[4vh] md:pt-[12vh] min-h-screen bg-indigo-950 overflow-hidden">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <HeroContent/>
                    <HeroImage/>
                </div>            
            </div>
        </div>
     );
}
export default Hero;