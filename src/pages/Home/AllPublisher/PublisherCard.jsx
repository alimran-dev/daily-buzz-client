import PropTypes from "prop-types";

const PublisherCard = ({ publisher }) => {
  const { name, logo } = publisher || {};
  return (
    <div className="flex flex-col items-center justify-center mx-5 border p-5">
      <div>
        <img src={logo} alt="" className="w-20 h-20 rounded-full" />
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default PublisherCard;
PublisherCard.propTypes = {
  publisher: PropTypes.object.isRequired,
};
