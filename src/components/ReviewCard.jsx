import { BiStar } from "react-icons/bi"
import PropTypes from 'prop-types';



const ReviewCard = ({ image, name, role, review, stars }) => {
    return (
      <div className="border  p-4 rounded-2xl w-[20rem] bg-white shadow-custom mb-12 ">
        <div className="flex  items-center gap-4 py-4">
          <div className="h-8 rounded-full">
            <img src={image} alt="" className="h-full" />
          </div>
          <p className="font-bold">
            {name}
            <span className="block font-normal">{role}</span>
          </p>
        </div>
        <div className="pb-6">
          <p className="pb-2">Awesome work</p>
          <p className="text-[#263959A6]">{review}</p>
        </div>
        <div className="flex justify-between max-w-[8rem] ">
          {Array(stars).fill(
            <BiStar 
            size='20'
            color='#1A906B'
            />
          )}
        </div>
      </div>
    );
  };

ReviewCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

export default ReviewCard;
