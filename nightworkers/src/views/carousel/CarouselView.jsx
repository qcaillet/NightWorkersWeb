import React, { Component } from "react";
import Carousel from "../../components/carousel/Carousel";

export default class CarouselView extends Component {
  render() {
    return (
      <Carousel show={4}>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Carousel>
    );
  }
}
