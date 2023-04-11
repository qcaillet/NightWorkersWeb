import React, { useState } from "react";
import { Typography, Toolbar, Box, AppBar, Link } from "@mui/material";
import "./NavBar.css";
import "@fontsource/silkscreen";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navColour, updateNavbar] = useState(false);
  const logo = require("../../assets/logo.png");

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ borderRadius: 1 }}
        className={navColour ? "sticky" : "navbar"}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
          <img src={logo} alt="Night Workers" style={{ height: 30 }} />
          {/* </IconButton> */}
          {/* a enlever */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Box className="link">
            <NavLink to="/" className="link" underline="hover">
              The Lab
            </NavLink>
            <NavLink to="/validation" className="link" underline="hover">
              delegate validation
            </NavLink>
            <NavLink to="casino" className="link" underline="hover">
              Casino
            </NavLink>
            <NavLink to="RiskToEarn" className="link" underline="hover">
              R2E
            </NavLink>
            <Link
              className="link"
              underline="hover"
              target="_blank"
              rel="noopener"
              href="https://nightworkers.vercel.app/"
            >
              DAPP
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
