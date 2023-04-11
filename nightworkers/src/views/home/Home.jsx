import { Component } from "react";
import { Container, Grid, Divider } from "@mui/material";
import "./Home.css";
import "@fontsource/source-sans-pro";
import "@fontsource/silkscreen";
import Type from "../../components/Type";
import Team from "../../components/Team";
import CarouselView from "../carousel/CarouselView";

export default class Home extends Component {
  render() {
    const logo = require("../../assets/casino/roulette.png");

    return (
      <>
        <Container className="home-section" id="home">
          <Container className="home-content">
            <h1
              style={{
                textAlign: "left",
                color: "white",
                fontFamily: "silkscreen",
              }}
            >
              Bienvenue sur Night Workers Labs
            </h1>
            <h2
              style={{
                textAlign: "left",
                color: "white",
                fontFamily: "silkscreen",
              }}
            >
              <Type />
            </h2>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <p className="home-about-body" style={{ color: "white" }}>
                  NWL is the project of a group of Blockchain technology
                  enthusiasts, our team is made up of developers, a graphic
                  designer and a Community Manager.
                  <br />
                  We are DOX towards the projects with which we have signed
                  contracts as validators. We currently offer several features:
                  We can configure your nodes on testnets so that you get an
                  airdrop when launching selected projects You can become a
                  delegate by stacking your tokens in our validation nodes You
                  can try your luck and try to multiply your chips with our
                  provablyfare casino games You will soon be able to participate
                  in our P2E by minting our NFTs in order to generate $LOLLY
                  which will be our native token.
                </p>
              </Grid>
              <Grid xs={6}>
                <img src={logo} alt="Night Workers" style={{ height: 300 }} />
              </Grid>
            </Grid>
            <br />
            <Divider
              sx={{
                color: "white",
                borderColor: "white",
                border: 1,
                borderRadius: 5,
              }}
            ></Divider>
            <Team />
            <Divider
              sx={{
                color: "white",
                borderColor: "white",
                border: 1,
                borderRadius: 5,
              }}
            ></Divider>
            <div
              style={{
                maxWidth: 1200,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 64,
              }}
            >
              <CarouselView />
            </div>
          </Container>
        </Container>
      </>
    );
  }
}
