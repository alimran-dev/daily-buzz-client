import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";

const imgKey = import.meta.env.VITE_IMG_KEY;

const MyProfile = () => {
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [eye3, setEye3] = useState(true);
  const [passError, setPassError] = useState(null);
  const { user, updateUser, loginUser, updatePass } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoFile = form.photo.files[0];
    if (photoFile) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imgKey}`,
          { image: photoFile },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res?.data.success) {
            console.log(res?.data?.data?.display_url);
            updateUser(name, res?.data?.data?.display_url)
              .then(() => {
                window.location.reload();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    } else {
      updateUser(name, photoURL)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
    }
  };
  const handleChangePass = (e) => {
    e.preventDefault();
    setPassError(null);
    const form = e.target;
    const prevPass = form.prevPass.value;
    const newPass = form.newPass.value;
    const confirmPass = form.confirmPass.value;
    // eslint-disable-next-line no-useless-escape
    const regex = /^(.{0,5}|[^A-Z]*|[^!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*|\D*)$/;
    console.log(prevPass, newPass, confirmPass);
    if (newPass !== confirmPass) {
      setPassError("New Password and confirm password must be same.");
    } else if (regex.test(newPass)) {
      setPassError(
        "Password must have minimum 6 character,a capital letter,a special character and a number"
      );
    } else {
      loginUser(email, prevPass)
        .then((result) => {
          if (result.user) {
            updatePass(result.user, newPass)
              .then(() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Password changed successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((error) => {
                console.log(error);
                setPassError("Failed to change password");
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setPassError("Failed to change password");
        });
    }
  };
  return (
    <div className="flex my-5">
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
          Update Your Profile
        </h3>
        <form onSubmit={handleUpdate}>
          <div className="w-fit mx-auto">
            <img
              src={photoURL}
              alt=""
              className="w-28 h-28 rounded-full block mx-auto"
            />
            <input
              type="file"
              name="photo"
              id=""
              className="w-fit ml-10 my-4"
              accept=".jpg,.jpeg,.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mx-16">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={displayName}
                className="border py-1.5 px-3 rounded w-full"
                placeholder="Update your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="border py-1.5 px-3 rounded w-full"
                defaultValue={email}
                disabled
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#746C2E] py-1.5 px-4 font-semibold text-white rounded block mx-auto my-5"
          >
            Update
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
          Change Your Password
        </h3>
        <form onSubmit={handleChangePass} className="space-y-3">
          <div className="w-64 mx-auto">
            <label htmlFor="prevPass" className="block font-medium">
              Old Password<span className="text-red-400">*</span>
            </label>
            <div className="flex items-center h-10">
              <input
                type={eye1 ? "password" : "text"}
                name="prevPass"
                className="border h-full w-full px-3 py-1.5 rounded-l"
                required
                placeholder="Enter Current Password"
              />
              <span
                onClick={() => setEye1(!eye1)}
                className="border h-full text-xl flex items-center justify-center w-10 cursor-pointer rounded-r"
              >
                {eye1 ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
          </div>
          <div className="w-64 mx-auto">
            <label htmlFor="newPass" className="block font-medium">
              New Password<span className="text-red-400">*</span>
            </label>
            <div className="flex items-center h-10">
              <input
                type={eye2 ? "password" : "text"}
                name="newPass"
                className="border h-full w-full px-3 py-1.5 rounded-l"
                required
                placeholder="Enter New Password"
              />
              <span
                onClick={() => setEye2(!eye2)}
                className="border h-full text-xl flex items-center justify-center w-10 cursor-pointer rounded-r"
              >
                {eye2 ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
          </div>
          <div className="w-64 mx-auto">
            <label htmlFor="confirmPass" className="block font-medium">
              Confirm Password<span className="text-red-400">*</span>
            </label>
            <div className="flex items-center h-10">
              <input
                type={eye3 ? "password" : "text"}
                name="confirmPass"
                className="border h-full w-full px-3 py-1.5 rounded-l"
                required
                placeholder="Confirm Your Password"
              />
              <span
                onClick={() => setEye3(!eye3)}
                className="border h-full text-xl flex items-center justify-center w-10 cursor-pointer rounded-r"
              >
                {eye3 ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
          </div>
          <p className="text-center font-medium text-red-500 w-2/3 mx-auto">
            {passError}
          </p>
          <button
            type="submit"
            className="bg-[#746C2E] py-1.5 px-4 font-semibold text-white rounded block mx-auto my-5"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
