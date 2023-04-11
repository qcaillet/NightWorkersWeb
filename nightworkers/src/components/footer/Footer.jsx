import { Box, Grid, Typography, Link } from "@mui/material";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import "@fontsource/source-sans-pro";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box
      sx={{
        backgroundColor: "#0A0416",
        fontFamily: "Source Sans Pro",
        color: "white",
      }}
    >
      <Grid container spacing={2} className="footer">
        <Grid display="flex" alignItems="center">
          <Typography level="body2">
            {`© ${new Date().getFullYear()} Night workers Labs | All rights reserved`}
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center">
          <Link
            target="_blank"
            rel="noopener"
            href="https://discord.gg/XDMpfuCreN"
          >
            <FaDiscord className="social-icons" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://twitter.com/NightWorkersLbs"
          >
            <FaTwitter className="social-icons" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/NightworkersLabs"
          >
            <FaGithub className="social-icons" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://discord.gg/XDMpfuCreN"
          >
            <SiMedium className="social-icons" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
