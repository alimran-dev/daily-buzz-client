import PropTypes from "prop-types";

const Modal = ({feedback,isOpen,setIsOpen}) => {
    return (
        <div
      onClick={() => setIsOpen(false)}
      className={`h-screen w-full fixed inset-0 z-20 flex items-center justify-center ${
        isOpen ? "visible bg-black bg-opacity-60" : "invisible"
      }`}
    >
            <div className="bg-white w-96 max-h-[70vh] pb-10 rounded-md overflow-scroll">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        Admin Feedback
                </h1>
                <p className="mx-10 p-5 rounded-md text-justify border">{feedback}</p>
      </div>
    </div>
    );
};

export default Modal;
Modal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    feedback: PropTypes.string,
  };