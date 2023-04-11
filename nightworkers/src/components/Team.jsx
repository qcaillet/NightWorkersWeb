import React, { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "@fontsource/silkscreen";
// import images from "../utils/images";
import "@fontsource/silkscreen";

export default class Team extends Component {
  render() {
    const images = [
      {
        name: "Herve",
        type: "Founder",
        src: require("../assets/team/herve.png"),
      },
      {
        name: "Amphaal",
        type: "CTO",
        src: require("../assets/team/amphaal.png"),
      },
      {
        name: "Elprofesor",
        type: "Engineer",
        src: require("../assets/team/elprofesor.png"),
      },
      {
        name: "LaoTseu",
        type: "Engineer",
        src: require("../assets/team/laoTseu.png"),
      },
      {
        name: "Selachi",
        type: "Engineer",
        src: require("../assets/team/selachi.png"),
      },
      {
        name: "Quentin",
        type: "Engineer",
        src: require("../assets/team/quentin.png"),
      },
      {
        name: "Theo",
        type: "Graphist ",
        src: require("../assets/team/theo.png"),
      },
      {
        name: "Yatchiru",
        type: "Community Manager",
        src: require("../assets/team/yatchiru.png"),
      },
    ];

    const avatars = images.map((image) => (
      <>
        <Grid
          key={image.name}
          item
          xs={6}
          sm={4}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
        >
          <Avatar
            key={image.name}
            sx={{ width: 75, height: 75 }}
            src={image.src}
            type={image.type}
          />
          <Grid
            key={image.type}
            xs={6}
            sm={4}
            md={4}
            flex={1}
            alignItems="baseline"
            justifyContent={"center"}
          >
            <Typography
              color={"white"}
              style={{
                textAlign: "center",
                // fontFamily: "silkscreen",
                fontWeight: "bold",
              }}
            >
              {image.name}
            </Typography>
            <Typography
              color={"white"}
              style={{
                textAlign: "center",
              }}
            >
              {image.type}
            </Typography>
          </Grid>
        </Grid>
      </>
    ));
    return (
      <>
        <h1 style={{ color: "white", fontFamily: "silkscreen" }}>Team</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} minHeight={160}>
            {avatars}
          </Grid>
        </Box>
        ;
      </>
    );
  }
}
