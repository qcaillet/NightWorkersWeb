import React, { Component } from "react";
import { Container, Grid } from "@mui/material";
import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";

export default class RiskToEarn extends Component {
  render() {
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
            Coming Soon !
          </h1>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <p className="home-about-body" style={{ color: "white" }}>
                Night workers is an NFT-based strategy game, you can mint random
                PIMPS or HOOKERS. Owning a PIMP NFT will guarantee you discounts
                on our node setup services. Staking your NFTs will generate a
                return in $LOLLY (our native token) in greater or lesser
                quantities depending on the characteristics of your NFTs.
                Coin-flip, Roulette, lottery and others will be an integral part
                of the game and will aim to maintain the price of our token
                $LOLLY From the launch of our $LOLLY token, validation services
                will only be payable in $LOLLY and 30% of the amount of payments
                via this service will be burned.
              </p>
            </Grid>
            <Grid xs={6}>
              <SwipeableTextMobileStepper />
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}
