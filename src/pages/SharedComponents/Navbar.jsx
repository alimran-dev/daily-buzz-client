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
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];
// const pages = [
//     {item: "Products",itemUrl:"/products"},
//     {item: "Pricing",itemUrl:"/pricing"},
//     {item: "Blog",itemUrl:"/blog"},
// ];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();

    const pages = [
        {item: "Home",itemUrl:"/"},
        {item: "Add Articles",itemUrl:"/addArticles"},
        {item: "All Articles",itemUrl:"/blog"},
        {item: "Subscription",itemUrl:"/blog"},
        {item: "Premium Articles",itemUrl:"/blog"},
    ];

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
    }
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{display: {xs: "none", md: "flex"}}}>
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
                  <MenuItem key={page.item} onClick={()=>handleNavLink(page.itemUrl)}>
                    <Typography textAlign="center">{page.item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{flexGrow: 1,display: {xs: "flex", md: "none"}}}>
                      <img src={logo} alt="" className="h-16 my-2" />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:"center" }}>
              {pages.map((page) => (
                <Button
                  key={page.item}
                  onClick={()=>handleNavLink(page.itemUrl)}
                  sx={{ my: 2,mx:1, color: "#131313", display: "block",fontSize:"14px" ,fontWeight:"600" }}
                >
                  {page.item}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
