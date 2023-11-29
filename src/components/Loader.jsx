import { ThreeCircles } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loader = ({isLoading}) => {
  return (
    <div className={`bg-gray-800 bg-opacity-50 z-10 fixed top-0 left-0 h-screen w-full flex items-center justify-center ${isLoading?"visible":"hidden"}`}>
      <ThreeCircles
        height="90"
        width="90"
        color="#746C2E"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
