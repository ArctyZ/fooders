import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaShareAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col gap-20 py-10 px-20 bg-black text-white rounded-t-3xl justify-between">
        <div className="flex  gap-4 flex-col">
            <h1 className="text-xl font-bold">Fooder</h1>
            <p>Indulge in a symphony of flavors, <br />where each plate is a canvas for <br />culinary excellence.</p>
        </div>
        <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Menu</span>
            <div className="flex flex-col gap-3 ">
          <Link
            className="cursor-pointer  hover:text-orange-500 duration-500 font-semibold"
            to="home"
            offset={-150}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
            to="dishes"
            offset={-150}
            spy={true}
            smooth={true}
            duration={500}
          >
            Dishes
          </Link>
          <Link
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
          >
            Reviews
          </Link>
        </div>
        </div>
        <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Contact Us</span>
            <div className="flex flex-col gap-2 ">
                <span>Fooder@emai.com</span>
                <span>+1 234 567 890</span>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Socials</span>
            <div className="flex gap-4 justify-between">
                <FaLinkedin size={30} className="cursor-pointer hover:text-orange-500 duration-500" />
                <FaGithub size={30} className="cursor-pointer hover:text-orange-500 duration-500" />
                <FaShareAlt size={30} className="cursor-pointer hover:text-orange-500 duration-500" />
            </div>
        </div>
    </div>
  )
}
