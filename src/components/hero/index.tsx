import React from "react";
import Header from "@/components/header";
import "./hero.css";
import Button from "../button";

const HeroSection = () => {
  return (
    <section className="container-fluid back-image">
      <div className="container">
        <Header />
        <div className="row tw-py-16">
          <div className="hero_left_section col-7 ">
            <div className="banner-content h-100 tw-grid">
              <div className="tw-self-end">
                <h1 className="make baskerville tw-text-7xl tw-tracking-wider tw-font-light tw-pb-6	">
                  Make your&nbsp;
                  <span className="own chela-one primary-color tw-text-7xl tw-font-light">
                    own
                  </span>
                </h1>
                <h1 className="make baskerville tw-text-7xl tw-tracking-wider tw-font-light tw-pb-6">
                  signature&nbsp;
                  <span className="own chela-one primary-color tw-text-7xl tw-font-light">
                    style
                  </span>
                </h1>
                <p className="common-content roboto-serif liberty-color tw-text-2xl ">
                  Lorem ipsum dolor sit amet consectetur. Id
                  <br />
                  rhoncus a curabitur massa aliquet ipsum velit
                  <br />
                  convallis lacus. Orci magna enim arcu orci
                  <br />
                  amet.
                </p>
              </div>
              <div className="tw-self-end">
                <Button>
                  <h5 className="aclonica  white-color m-0">Try now</h5>
                </Button>
              </div>
            </div>
          </div>
          <div className="hero_right_section col-5">
            <div className="banner-image">
              <img src="/banner.png" alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
