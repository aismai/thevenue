import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  persentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.persentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.persentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets before 20th JUNE</h3>
              <p>
                Phasellus sit amet elit urna. Pellentesque volutpat massa non
                tincidunt tempor. Morbi ac aliquam enim. Mauris a odio eget
                lacus gravida eleifend. Sed imperdiet molestie accumsan. Duis
                est risus, euismod eu viverra vel, blandit vel odio. Mauris id
                fringilla nisl. Sed sodales, dolor at mattis tristique, urna
                ligula ornare arcu, quis posuere ex odio in nulla.
              </p>

              <div>
                <MyButton
                  text="Purchase ticket"
                  background="#ffa800"
                  color="#fff"
                  link="https://google.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
