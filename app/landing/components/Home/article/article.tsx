import { articleData } from "@/app/landing/data/data";
import Articlecard from "./articlecard";
const article = () => {
    return ( 
        <div className="pt-20 pb-20 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">Latest Article</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articleData.map((article,i)=>{
                        return <div key={article.id} data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-dalay={`${i*150}`}>
                            <Articlecard article={article}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default article;