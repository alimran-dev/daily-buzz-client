import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ArticleRow = ({ article, id,refetch }) => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { _id, title, status, isPremium } = article || {};
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Deleted Succesfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                    }
                })
            }
          });
    }
    
    return (
        <>
            <tr className="grid grid-cols-9">
                <td className="border flex items-center justify-center font-medium">{id}</td>
                <td className="border col-span-3 text-center font-semibold py-2">{ title}</td>
                <td className="border flex items-center justify-center font-bold">{isPremium?"Yes":"No"}</td>
                <td className="border flex items-center justify-center"><span className="capitalize font-bold">{status}</span></td>
                            <td className="border flex items-center justify-center"><button onClick={()=>navigate(`/update/${_id}`)} className="bg-purple-700 text-white py-1.5 px-3 font-semibold rounded ">Update</button></td>
                            <td className="border flex items-center justify-center"><button onClick={()=>handleDelete(_id)} className="bg-red-600 py-1.5 px-3 text-white rounded font-semibold">Delete</button></td>
                            <td className="border flex items-center justify-center"><button onClick={()=>navigate(`/details/${_id}`)} className="bg-[#746C2E] py-1.5 px-3 font-semibold text-white rounded">Details</button></td>
                        </tr>
        </>
    );
};

export default ArticleRow;
ArticleRow.propTypes = {
    article: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    refetch: PropTypes.func.isRequired,
}