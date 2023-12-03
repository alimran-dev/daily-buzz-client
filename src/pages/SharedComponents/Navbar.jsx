import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = [
  { item: "My Profile", itemUrl: "/myProfile" },
  { item: "My Articles", itemUrl: "/myArticles" },
];

const LoggedNav = [
  { item: "Home", itemUrl: "/" },
  { item: "Add Articles", itemUrl: "/addArticles" },
  { item: "All Articles", itemUrl: "/allArticles" },
  { item: "Subscription", itemUrl: "/subscription" },
  { item: "Premium Articles", itemUrl: "/premiumArticles" },
];
const nav = [
  { item: "Home", itemUrl: "/" },
  { item: "All Articles", itemUrl: "/allArticles" },
  // {item: "All Articles",itemUrl: "/allArticles"},
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { user, logOut } = useContext(AuthContext);

  const pages = user ? LoggedNav : nav;

  useEffect(() => {
    axiosSecure.patch('/subscription',{ email: user?.email, plan: 0})
          .then(res => {
            console.log(res.data);
          })
    setTimeout(() => {
      setAnchorElUser(null)
    },1)
  },[axiosSecure, user])
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavLink = (itemUrl) => {
    navigate(itemUrl);
    setAnchorElNav(null);
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={logo} alt="" className="h-16 my-2" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.item}
                    onClick={() => handleNavLink(page.itemUrl)}
                  >
                    <Typography textAlign="center">{page.item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img src={logo} alt="" className="h-16 my-2" />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.item}
                  onClick={() => handleNavLink(page.itemUrl)}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "#131313",
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {page.item}
                </Button>
              ))}
            </Box>

            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={user?.photoURL}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting.item}
                      onClick={() => {
                        navigate(setting.itemUrl);
                        setAnchorElUser(null);
                      }}
                    >
                      <Typography textAlign="center">{setting.item}</Typography>
                    </MenuItem>
                  ))}
                  {user && (
                    <MenuItem onClick={handleLogout}>
                      <button>Log Out</button>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            ) : (
              <Link
                to={"/login"}
                className="bg-[#746C2E] py-1.5 px-5 font-semibold text-white rounded"
              >
                Login
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
