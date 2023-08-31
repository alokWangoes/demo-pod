import React from "react";
import Button from "../button";

const PlanCard = () => {
  return (
    <>
      <div className="col-3 p-2">
        <div className="pricingTable tw-flex tw-items-center tw-flex-col tw-py-14 tw-px-7">
          <div className="pricingTable-header tw-text-center tw-text-xl roboto-serif white-color	">
            $<span className="amount tw-text-5xl">0</span>
            Monthly
            <div className="price-value tw-pt-7 tw-text-4xl">Free</div>
          </div>
          <div className="w-100">
            <hr className="m-0" />
          </div>
          <div className="pricing-content row tw-h-80 tw-py-3	tw-items-center 	">
            <div className="listitem col-2 tw-mb-3 tw-flex tw-items-center   roboto">
              <div className="col-2_">
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </div>
            </div>
            <p className="col-10 mb-0 tw-text-base white-color	">
              5 daily tasks ( Uplaod, Design, Product, etc...)
            </p>
            <div className="listitem col-2 tw-mb-3 tw-flex tw-items-center  roboto ">
              <div className="col-2_">
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </div>
            </div>
            <p className="col-10 mb-0 tw-text-base white-color ">
              No need to download anything, it runs completely in the cloud.
            </p>

            <div className="listitem tw-mb-3 col-2 tw-flex tw-items-center  roboto ">
              <div className="col-2_">
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </div>
            </div>
            <p className=" col-10 mb-0 tw-text-base white-color">
              Lorem ipsum dolor sit amet consectetur. Consequat pellentesque
              magna et amet.
            </p>
          </div>
          <div className="pricingTable-signup ">
            <Button size="sm">
              <h5 className="aclonica  white-color m-0">Try now</h5>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
