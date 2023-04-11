import React, { Component } from "react";
import { Container, Grid } from "@mui/material";

export default class Casino extends Component {
  render() {
    const roulette = require("../assets/casino/roulette.png");
    const coinflip = require("../assets/casino/coinflip.png");

    return (
      <Container className="home-section" id="home">
        <Container className="home-content">
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "silkscreen",
              fontSize: 50,
            }}
          >
            Coming Soon
          </h1>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <p className="home-about-body" style={{ color: "white" }}>
                In order to help projects during their testnet, in addition to
                being a validator, we can deploy the smartcontract of our games.
                Deployment allows us to identify problems, provide relevant
                feedback and, in some cases, suggest solutions for improvement.
              </p>
            </Grid>
            <Grid xs={6}>
              <img
                src={roulette}
                alt="Games roulette"
                style={{ height: 300 }}
              />
              <img
                src={coinflip}
                alt="Games coinflip"
                style={{ height: 300 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}
