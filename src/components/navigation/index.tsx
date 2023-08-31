import React from "react";
import Link from "next/link";
import "./navigation.css";

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="row">
        <div className="col-3 "></div>
        <ul className="col-6 nav-list d-flex justify-content-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">How it works</Link>
            <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
        </ul>

        <div className="col-3 "></div>
      </div>
    </section>
  );
};

export default Navigation;
