import { Link } from "react-scroll";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "./ui/sheet";
import { Button } from "./ui/button";

import { IoMdRestaurant } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-5 text-xl py-5 fixed top-0 z-10 bg-white shadow-xl">
      <div className="flex gap-1 items-center">
        <span>
          <IoMdRestaurant size={25} />
        </span>
        <h1 className="font-bold">Fooders</h1>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-3 items-center">
          <Link
            className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
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
          <Button
            variant={"outline"}
            className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <a
              href="https://github.com/ArctyZ"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <FaGithub size={20} />
              Github
            </a>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger>
            <IoIosMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <hr />
            </SheetHeader>
            <div className="flex flex-col mt-2 gap-3 items-center">
              <Link
                className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
                to="home"
                offset={-150}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
              >
                <SheetClose>Home</SheetClose>
              </Link>
              <Link
                className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
                to="dishes"
                offset={-150}
                spy={true}
                smooth={true}
                duration={500}
              >
                <SheetClose>Dishes</SheetClose>
              </Link>
              <Link
                className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
              >
                <SheetClose>About</SheetClose>
              </Link>
              <Link
                className="cursor-pointer hover:text-orange-500 duration-500 font-semibold"
                to="review"
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
              >
                <SheetClose>Reviews</SheetClose>
              </Link>
              <Button
                variant={"outline"}
                className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <a
                  href="https://github.com/ArctyZ"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaGithub size={20} />
                  Github
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
