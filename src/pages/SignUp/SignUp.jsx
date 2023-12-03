import axios from "axios";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../components/Loader";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const imgKey = import.meta.env.VITE_IMG_KEY;
const SignUp = () => {
  const [eye, setEye] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const { user, googleLogin, signUp, updateUser, setUser, auth } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0];
    // eslint-disable-next-line no-useless-escape
    const regex = /^(.{0,5}|[^A-Z]*|[^!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*|\D*)$/;
    if (regex.test(password)) {
      setError(
        "Password must have minimum 6 character,a capital letter,a special character and a number"
      );
      setIsLoading(false);
    } else {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imgKey}`,
          { image: photo },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data?.success) {
            signUp(email, password)
              .then((result) => {
                console.log(result.user);
                updateUser(name, res?.data?.data?.display_url)
                  .then(() => {
                    setUser(auth.currentUser);
                    axiosPublic.post('/users',{name,email,photo:res?.data?.data?.display_url})
                      .then(res => {
                      console.log("user created",res.data);
                        setIsLoading(false);
                    })
                  })
                  .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                  });
              })
              .catch((error) => {
                console.error(error);
                setIsLoading(false);
              });
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(user);
  return (
    <div>
      <Loader isLoading={isLoading} />
      <form
        onSubmit={handleSignUp}
        className="w-96 border m-10 mx-auto px-8 py-5 space-y-3"
      >
        <h2 className="text-3xl font-bold text-[#746C2E] py-3 text-center">
          Create Your account
        </h2>
        <button
          onClick={handleGoogle}
          className="bg-[#746c2e] text-white w-full py-1.5 flex items-center justify-center gap-2 rounded-md"
        >
          Sign Up with <IoLogoGoogle />
        </button>
        <p className="text-center font-medium my-1">Or</p>
        <div>
          <label htmlFor="name" className="block font-medium">
            Name<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="border w-full px-3 py-1.5 rounded"
            required
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email<span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="border w-full px-3 py-1.5 rounded"
            required
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">
            Password<span className="text-red-400">*</span>
          </label>
          <div className="flex items-center h-10">
            <input
              type={eye ? "password" : "text"}
              name="password"
              className="border h-full w-full px-3 py-1.5 rounded-l"
              required
              placeholder="Enter 6 Digit Password"
            />
            <span
              onClick={() => setEye(!eye)}
              className="border h-full text-xl flex items-center justify-center w-10 cursor-pointer rounded-r"
            >
              {eye ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="photo" className="block font-medium">
            Profile Picture<span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            name="photo"
            className=""
            required
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <p className="text-center text-red-500 font-medium">{error}</p>
        <button
          type="submit"
          className="bg-[#746C2E] text-white py-1.5 px-5 font-medium rounded block mx-auto"
        >
          Sign Up
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
