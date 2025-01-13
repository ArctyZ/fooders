import { Button } from "./ui/button";
import AboutImage from '../assets/img/about.png'

export default function About() {
  return (
    <div id="about" className="flex flex-row gap-3 items-center justify-center w-[80%] m-auto mb-5 mt-10">
        {/* image */}
        <div className="w-[150%] hidden lg:block">
            <img src={AboutImage} alt="About Image" className=""/>
        </div>
        {/* content */}
        <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Why Choose Us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea architecto quas maiores facilis commodi laborum debitis incidunt deleniti itaque nihil mollitia porro in a, praesentium recusandae, fuga sequi reprehenderit earum.
            Quos, dolorum deleniti maiores dignissimos adipisci neque fugiat voluptatibus, exercitationem explicabo odio odit omnis sequi iste.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe non officia officiis quibusdam animi dignissimos nulla vitae eligendi veritatis, aspernatur labore alias possimus provident, pariatur ex voluptates vero ipsum.</p>
            <Button variant={'outline'} className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white w-fit">Learn More</Button>
        </div>
    </div>
  )
}
