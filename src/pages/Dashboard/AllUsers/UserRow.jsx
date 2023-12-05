import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserRow = ({ user, id, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { name, email, photo, role } = user || {};
    const handleAdmin = () => {
        axiosSecure.patch(`/makeAdmin?email=${email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Admin access provided",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
        })
    }
  return (
    <>
      <tr className="grid grid-cols-5">
        <td className="border flex items-center justify-center font-medium">
          {id}
        </td>
        <td className="border text-center font-semibold py-2 flex items-center justify-center">
          {name}
        </td>
        <td className="border flex items-center justify-center font-bold">
          <img src={photo} alt="" className="w-12 h-12 rounded-full" />
        </td>
        <td className="border flex items-center justify-center">
          <span className="px-5 py-4">{email}</span>
        </td>
              <td className="border flex items-center justify-center">
                  {
                      role==='admin'?<span className="font-medium">Admin</span>:
          <button onClick={handleAdmin} className="bg-[#746C2E] py-1.5 px-2 font-semibold text-white rounded">
            Make Admin
          </button>
                  }
        </td>
      </tr>
    </>
  );
};

export default UserRow;
UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
