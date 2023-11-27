import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterMenus = ({menuLinks,title}) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-500">{title}</h3>
          {menuLinks?.map((menu) => (
            <Link
              to={menu.itemUrl}
              className="block font-medium opacity-90 hover:underline"
              key={menu.item}
            >
              {menu.item}
            </Link>
          ))}
        </div>
    );
};

export default FooterMenus;
FooterMenus.propTypes = {
    menuLinks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}