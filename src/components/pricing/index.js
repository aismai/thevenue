import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../utils/MyButton";

class index extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["balcony", "medium", "star"],
    desc: [
      "Mauris gravida est quam, sit amet laoreet nisi gravida eu. Proin elit risus, pellentesque et metus at, tincidunt dignissim est. Praesent mattis massa id lobortis vulputate.",
      "Pellentesque vulputate facilisis ex, a posuere odio lobortis vel. Sed laoreet, tellus in tincidunt interdum, ipsum lectus porta urna, sit amet hendrerit sem velit id turpis.",
      "Etiam blandit euismod sem, at vestibulum lectus bibendum ac. Phasellus rhoncus purus rhoncus, suscipit felis vitae, mollis ligula sed porta felis dolor sollicitudin odio."
    ],
    linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                background="#ffa800"
                color="#fff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default index;
