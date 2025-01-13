import DishCard from "./DishCard"


const Dishes = [
    {name: "Pizza", price: '20.000', img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Lasagna", price: '35.000', img: "https://plus.unsplash.com/premium_photo-1671559021019-0268c54511b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Rum Tart", price: '25.000', img: "https://images.unsplash.com/photo-1720117944128-fa348a40b54e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Spaghetti", price: '10.000', img: "https://images.unsplash.com/photo-1713561058969-793049b01712?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Risotto", price: '30.000', img: "https://images.unsplash.com/photo-1612204078213-a227dba74093?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Steak", price: '60.000', img: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]

export default function DishesBox() {
  return (
    <div className="w-[80%] m-auto">
        <h2 className="text-4xl font-bold text-black text-center my-5">Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 m-auto w-full justify-items-center">
            {Dishes.map((dish, index) => <DishCard key={index} name={dish.name} price={dish.price} img={dish.img}/>) }
        </div>
    </div>
  )
}
