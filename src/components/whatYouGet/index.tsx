import React, { useState } from "react";
import "./whatYouGet.css";
import Card from "../card";
import Image from "next/image";
import Button from "@/components/button";

const WhatYouGet = () => {
  const cardContain = [
    {
      id: 1,
      image: "/Frame-29.png",
      title: "Connect multiple provider together",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissi turpis integer gravida sed.",
    },
    {
      id: 2,
      image: "/image-2.png",
      title: "Automate your print on demand",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Urna eget lectus tempor massa rutrum pellentesque.",
    },
    {
      id: 3,
      image: "/image-3.png",
      title: "Automate your print on demand",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. A donec mauris faucibus luctus mauris vitae orci.",
    },
    {
      id: 4,
      image: "/image-4.png",
      title: "Multiple print on demand providers",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Fames magna amet mattis morbi sit nunc.",
    },
    {
      id: 5,
      image: "/image-5.png",
      title: "Create your own automation flow",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Fames magna amet mattis morbi sit nunc.",
    },
    {
      id: 6,
      image: "/image-6.png",
      title: "Multiple print on demand providers",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Fames magna amet mattis morbi sit nunc.",
    },
  ];
  return (
    <section className="container-fluid what-you-get-bg py-5">
      <div className="container">
        <div className="d-flex align-items-end justify-content-center">
          <h1 className="text-center aclonica liberty-color">
            What do you get with &nbsp;
          </h1>
          <Image src="/logo.svg" alt="logo" width={300} height={60} />
          <h1 className="text-center aclonica liberty-color">&nbsp;?</h1>
        </div>

        <div className="row">
          {cardContain.map((cardEl) => (
            <div className="col-12 col-md-6 col-xl-4 p-5" key={cardEl.id}>
              <Card card={cardEl} />
            </div>
          ))}
        </div>
        <div className="subscribe-section-bg ">
          <div className="subscribe-section p-5 row !tw-flex-col-reverse lg:!tw-flex-row	">
            <div className="col-12 col-lg-8 lg:!tw-pl-20 primary-color d-flex flex-column justify-content-evenly">
              <h1 className="roboto">
                <strong>Lorem ipsum dolor sit amet consectetur.</strong>
              </h1>
              <h2 className="roboto-serif pt-2">
                Lorem ipsum dolor sit amet consectetur. Ante leo odio luctus
                urna est risus euismod. Semper quis porttitor lorem malesuada
                nisl a non imperdiet. Fames aenean cursus at netus.
              </h2>
              <div className="d-flex justify-content-center">
                <Button>
                  <h3 className="aclonica text-uppercase white-color m-0">
                    Subscribe
                  </h3>
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <Image
                src="/img-2.svg"
                alt="Subscribe"
                height={518}
                width={427}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
