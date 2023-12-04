import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useIsPremium from "../../hooks/useIsPremium";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const premiumCheck = useIsPremium();
  const { _id, img, title, publisher, description,isPremium } = article || {};
  console.log(premiumCheck)
  return (
    <div className="flex flex-col">
      <div className="w-ful relative">
        <img
          src={img}
          alt=""
          className="w-full h-56 rounded-md"
          loading="lazy"
        />
        <div className="absolute left-0 bottom-0 w-full h-full flex items-end bg-gradient-to-t from-black via-black/30 to-transparent">
          <h2 className=" text-white px-2 ml-3 mb-3 border-l-4 border-[#746c2e] font-medium">
            {title}
          </h2>
        </div>
      </div>
      <div className={`p-3 space-y-3 border flex-grow flex flex-col justify-between ${isPremium?"bg-red-200":"bg-slate-50"}`}>
        <p className="bg-gray-300 w-fit px-2 py-1 font-semibold rounded my-2 text-xs">
          {publisher}
        </p>
        <p>
          {description.length > 200
            ? `${description.split(" ").slice(0, 40).join(" ")}.....`
            : description}
        </p>
        <button onClick={()=>navigate(`/details/${_id}`)} className="bg-[#746C2E] w-fit px-3 py-1 text-white font-medium rounded disabled:bg-opacity-60" disabled={isPremium && !premiumCheck}>
          Details
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};
