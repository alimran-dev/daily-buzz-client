import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ArticleRow = ({ article, id, refetch }) => {
    const axiosSecure = useAxiosSecure();
  const {_id,
    title,
    publisher,
    author_name,
    author_email,
    author_photo,
    date,
    status,
    isPremium,
    } = article || {};
    const handleApprove = () => {
        axiosSecure(`/update/status?status=approved&id=${_id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Article status approved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    };
    const handleDecline = () => {
        
    }
  return (
    <>
      <tr className="grid grid-cols-7">
        <td className="border flex items-center justify-center font-medium p-5">
          {id}
        </td>
        <td className="border flex items-center justify-center font-medium p-5">
          {title}
        </td>
        <td className="border flex items-center justify-center font-medium p-5">
                  <div className="w-full overflow-hidden">
                      <img src={author_photo} alt="" className="w-12 h-12 rounded-full mx-auto block" />
                      <p>Name:{author_name}</p>
                      <p className="w-full">Email:<br/>{author_email}</p>
          </div>
        </td>
        <td className="border flex items-center justify-center font-medium p-5">
          {date}
        </td>
        <td className="border flex items-center justify-center font-medium p-5">
          {status}
        </td>
        <td className="border flex items-center justify-center font-medium p-5">
          {publisher}
        </td>
        <td className="border flex flex-col gap-3 items-center justify-center font-medium p-5">
          <button onClick={handleApprove} className={`bg-blue-700 text-white py-1.5 px-3 rounded disabled:bg-opacity-50`}>Approve</button>
          <button onClick={handleDecline} className={`bg-orange-700 text-white py-1.5 px-3 rounded disabled:bg-opacity-50`}>Decline</button>
          <button className={`bg-red-500 text-white py-1.5 px-3 rounded disabled:bg-opacity-50`}>Delete</button>
          <button className={`bg-cyan-700 text-white py-1.5 px-3 rounded disabled:bg-opacity-50`} disabled={isPremium}>Premium</button>
        </td>
       </tr>
    </>
  );
};

export default ArticleRow;
ArticleRow.propTypes = {
  article: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
