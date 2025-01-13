import pic1 from '../../public/pic1.png'
import pic2 from '../../public/pic2.png'
import pic3 from '../../public/pic3.png'
import ReviewCard from './ReviewCard'

const userReview = [
    {
        name: "Alisa",
        photo: pic1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur iure magni qui autem atque, itaque neque expedita cum."
    },
    {
        name: "John Doe",
        photo: pic2,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur iure magni qui autem atque, itaque neque expedita cum."
    },
    {
        name: "Katy",
        photo: pic3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequatur iure magni qui autem atque, itaque neque expedita cum."
    }
]

export default function ReviewBox() {
  return (
    <div id='review' className='my-5'>
        <h2 className='text-4xl font-bold text-black text-center my-10'>Customer's Review</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 m-auto w-full justify-items-center'>
            {userReview.map((review, index) => <ReviewCard key={index} name={review.name} photo={review.photo} review={review.review}/>) }
        </div>
    </div>
  )
}
