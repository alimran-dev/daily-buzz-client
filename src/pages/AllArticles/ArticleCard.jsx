import PropTypes from "prop-types";

const ArticleCard = ({ article }) => {
  const { _id, img, title, publisher, description } = article || {};
  // console.log(_id)
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
      <div className="bg-slate-50 p-3 space-y-3 border flex-grow flex flex-col justify-between">
        <p className="bg-gray-300 w-fit px-2 py-1 font-semibold rounded my-2 text-xs">
          {publisher}
        </p>
        <p>
          {description.length > 200
            ? `${description.split(" ").slice(0, 40).join(" ")}.....`
            : description}
        </p>
        <button className="bg-[#746C2E] w-fit px-3 py-1 text-white font-medium rounded">
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
