
type ReviwCardProps = {
    name:string;
    photo:string;
    review: string;
}

export default function ReviewCard({name, photo, review} : ReviwCardProps) {
  return (
    <div className="flex flex-col gap-4 shadow-xl w-[280px] rounded-lg items-center p-5">
        <div>
            <p className="text-center">{review}</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div>
                <img src={photo} alt="User Photo"  className='rounded-full w-24'/>
            </div>
            <span className="font-semibold">{name}</span>
        </div>
    </div>
  )
}
