import React, { useState } from "react";
import { Typography, Toolbar, Box, AppBar, Link } from "@mui/material";
import "./NavBar.css";
import "@fontsource/silkscreen";

const NavBar = () => {
  const [navColour, updateNavbar] = useState(false);
  const logo = require("../../assets/image.png");

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

          <Box className="link" defaultActiveKey="#home">
            <Link underline="hover">The Lab</Link>
            <Link underline="hover">Casino</Link>
            <Link underline="hover">P2E</Link>
            <Link underline="hover">delegate validation</Link>
            <Link underline="hover">DAPP</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
