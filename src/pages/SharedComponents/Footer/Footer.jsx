import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import FooterMenus from "./components/FooterMenus";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const quickLinks = [
  { item: "Home", itemUrl: "/" },
  { item: "All Articles", itemUrl: "/allArticles" },
  { item: "Career", itemUrl: "/career" },
];

const Footer = () => {
  const footerStyle = { boxShadow: "0px 0px 10px gray" };
  return (
    <div style={footerStyle}>
      <div className="grid md:grid-cols-4 gap-5 p-12">
        <div className="col-span-2 space-y-2">
          <img src={logo} alt="" className="h-24 " />
          <p className="font-medium opacity-90">
            <span className="text-lg opacity-80">Head Office:</span> <br />{" "}
            24/ka Shahid Minar Road, Kalyanpur, Dhaka
          </p>
          <p className="opacity-90 flex items-center gap-2">
            <IoMdMail />{" "}
            <a
              href="mailto:support@tdb.com"
              className="hover:underline cursor-pointer"
            >
              support@tdb.com
            </a>
          </p>
          <p className="opacity-90 flex items-center gap-2">
            <IoCall />{" "}
            <a
              href="tel:+8801234567890"
              className="hover:underline cursor-pointer"
            >
              +8801234567890
            </a>
          </p>
        </div>
        <FooterMenus menuLinks={quickLinks} title="Quick Links" />
        <FooterMenus menuLinks={quickLinks} title="Product" />
      </div>
      <hr className="border-t-2 border-gray-400 mx-12" />
      <div className="flex items-center justify-between gap-2 mx-12">
        <p className="text-center py-3 font-medium opacity-80">
          &copy; {moment().format("YYYY")}; The Daily Buzz. All Rights Reserved.
        </p>
        {/* Social Links */}
        <div className="flex gap-3 text-xl">
          <Link to={"/"}>
            <BsFacebook />
          </Link>
          <Link to={"/"}>
            <BsGithub />
          </Link>
          <Link to={"/"}>
            <BsTwitter />
          </Link>
          <Link to={"/"}>
            <BsInstagram />
          </Link>
          <Link to={"/"}>
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
