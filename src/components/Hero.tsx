import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <div id='home' className='flex justify-between items-center flex-row  bg-[url(./assets/img/hero.jpg)] min-h-screen bg-cover bg-no-repeat px-5 lg:px-24 mt-10'>
        <div className='flex flex-col gap-4'>
        <h2 className='text-6xl font-bold text-neutral-300'>Elevate your inner foodie <br /> with each bite</h2>
        <p className='text-lg text-neutral-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et consequatur iure <br /> magni qui autem atque, itaque neque expedita cum.</p>
        </div>
    </div>
  )
}
