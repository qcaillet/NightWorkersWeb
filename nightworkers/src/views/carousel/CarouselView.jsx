import React, { Component } from "react";
import Carousel from "../../components/carousel/Carousel";
export default class CarouselView extends Component {
  render() {
    return (
      <Carousel show={4}>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src={require("../../assets/projectValidate/ok.png")}
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src={require("../../assets/projectValidate/goracle.png")}
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src={require("../../assets/projectValidate/qBlockchain.png")}
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src={require("../../assets/projectValidate/t.png")}
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src={require("../../assets/projectValidate/t.png")}
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
      </Carousel>
    );
  }
}
