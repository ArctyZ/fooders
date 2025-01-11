import {Link} from "react-scroll"
import { IoMdRestaurant } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-5 text-xl py-5 fixed top-0 z-10 bg-white">
        <div className="flex gap-1 items-center">
            <span><IoMdRestaurant size={25}/></span>
            <h1 className="font-bold">Fooders</h1>
        </div>
        <div className="hidden md:block">
            <div className="flex gap-3 items-center">
                <Link className="cursor-pointer hover:text-orange-500 duration-500 font-semibold" to="home"  spy={true} smooth={true}  duration={500} activeClass="active">Home</Link>
                <Link className="cursor-pointer hover:text-orange-500 duration-500 font-semibold" to="home"  spy={true} smooth={true}  duration={500}>Dishes</Link>
                <Link className="cursor-pointer hover:text-orange-500 duration-500 font-semibold" to="home"  spy={true} smooth={true}  duration={500}>About</Link>
                <Link className="cursor-pointer hover:text-orange-500 duration-500 font-semibold" to="home"  spy={true} smooth={true}  duration={500}>Reviews</Link>
                <Button variant={"outline"}><a href="https://github.com/ArctyZ" target="_blank" className="flex gap-1 items-center"><FaGithub size={20}/>Github</a></Button>
            </div>
        </div>
    </div>
  )
}
