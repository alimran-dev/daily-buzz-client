import { useContext, useState } from "react";
import { IoLogoGoogle, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../components/Loader";

const Login = () => {
  const [eye, setEye] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        setUser(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setError("Wrong email or password");
        setIsLoading(false);
      });
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
  return (
    <div>
      <Loader isLoading={isLoading} />
      <form
        onSubmit={handleLogin}
        className="w-96 border m-10 mx-auto px-8 py-5 space-y-3"
      >
        <h2 className="text-3xl font-bold text-[#746C2E] py-3 text-center">
          Please Login
        </h2>
        <button
          onClick={handleGoogle}
          className="bg-[#746c2e] text-white w-full py-1.5 flex items-center justify-center gap-2 rounded-md"
        >
          Login with <IoLogoGoogle />
        </button>
        <p className="text-center font-medium my-1">Or</p>
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
        <p className="text-center text-red-500 font-medium">{error}</p>
        <button
          type="submit"
          className="bg-[#746C2E] text-white py-1.5 px-5 font-medium rounded block mx-auto"
        >
          Login
        </button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to={"/signUp"} className="text-blue-500">
            Sign Up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
