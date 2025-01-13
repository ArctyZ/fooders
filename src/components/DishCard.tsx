import { Button } from "./ui/button"
import { RiStarSFill } from "react-icons/ri";


type Dish = {
    name: string;
    price: string;
    img: string;
}

export default function DishCard({name, price, img} : Dish) {
  return (
    <div id="dishes" className="flex flex-col gap-4 p-4 shadow-xl w-[280px] rounded-md items-center">
        <div className="w-[90%] rounded-md max-w-[250px] max-h-[150px]">
            <img src={img} alt="Dish Image" className="rounded-md w-full h-full object-cover"/>
        </div>
        {/* content */}
        <div className="flex flex-col gap-4 items-center w-full">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                    <RiStarSFill key={i} size={20} color="orange"/>
                ))}
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold">Rp{price}</span>
                <Button variant={'outline'} className=" hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500">Buy Now</Button>
            </div>
        </div>
    </div>
  )
}
