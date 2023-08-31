import React from "react";
import "./plan.css";
import Button from "../button";
import PlanCard from "./plancard";

const Plan = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row ">
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>
    </section>
  );
};

export default Plan;
