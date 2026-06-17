import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

interface IProps {
    rating: number;
    number?: number;
}

const Rating = ({ rating, number = 0 }: IProps) => {
    return (
        <div className="flex items-center text-black text-sm sm:text-xl mt-1">
            {[1, 2, 3, 4, 5].map((star) => {
                if (rating >= star) {
                    return <IoStar key={star} />;
                }

                if (rating >= star - 0.5) {
                    return <IoStarHalf key={star} />;
                }

                return <IoStarOutline key={star} />;
            })}
            <span className="text-red-300 pl-2">({number} customer reviews)</span>
        </div>
    );
};

export default Rating;