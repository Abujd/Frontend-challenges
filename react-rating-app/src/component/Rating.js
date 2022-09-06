import react ,{useState} from 'react';
import { FaStar } from 'react-icons/fa';


export default function Rating() {

    const [rating, setRating] = useState(null);
    const [hover, setRatingOnHover] = useState(null);

    return (
    <>
        <div className='flex justify-center pt-[200px]'>
            {[...Array(5)].map((star, idx) => {
                const ratingValue = idx + 1;
                return (
                    <label>
                        <input 
                            className={'hidden'}
                            type='radio' 
                            name={`rating-star-{idx}`}
                            value={ratingValue}
                            onClick= {()=> setRating(ratingValue)}

                        />
                        <FaStar
                            className={`pl-4`}
                            size={100}
                            color={ratingValue <= (hover || rating) ? '#ffc107': '#e4e5e9'}
                            onMouseEnter={() => setRatingOnHover(ratingValue)}
                            onMouseLeave={() => setRatingOnHover(null)}
                        />
                    </label>
                );

            })}
        </div>
    </>
    );
}