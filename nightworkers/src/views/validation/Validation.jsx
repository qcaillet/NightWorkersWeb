import { Container } from "@mui/system";
import React, { Component } from "react";
import SimplePaper from "../../components/Paper";
import "./Validation.css";

export default class Validation extends Component {
  render() {
    return (
      <Container className="home-section" id="home">
        <Container className="home-content">
          <SimplePaper />
        </Container>
      </Container>
    );
  }
}
