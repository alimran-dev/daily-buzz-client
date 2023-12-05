import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgKey = import.meta.env.VITE_IMG_KEY;
const AddPublisher = () => {
  const axiosSecure = useAxiosSecure();
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const logoFile = form.logo.files[0];
    console.log(name, logoFile);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${imgKey}`,
        { image: logoFile },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          axiosSecure
            .post("/addPublisher", { name, logo: res?.data?.data?.display_url })
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Publisher added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                form.reset();
              }
              console.log(res.data);
            });
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text">
        Add Publisher
      </h1>
      <form onSubmit={handleAdd}>
        <div className="space-y-4 mt-10">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Publisher Name
            </label>
            <input
              type="text"
              name="name"
              className="border py-1.5 px-3 rounded w-full"
              placeholder="Enter publisher name"
              required
            />
          </div>
          <div>
            <label htmlFor="logo" className="block text-lg font-medium">
              Logo
            </label>
            <input
              type="file"
              name="logo"
              className="border py-1.5 px-3 rounded w-full"
              accept=".jpg, .png, .jpeg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#746C2E] py-1.5 px-3 text-lg font-semibold text-white rounded block mx-auto"
          >
            Add Publisher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPublisher;
