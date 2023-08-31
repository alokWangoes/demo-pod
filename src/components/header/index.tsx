"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css";
import { useState } from "react";
import Navigation from "../navigation";

type HeaderProps = {
  open: boolean;
  language: string;
  val: string;
  languageImage: any;
  icon: {
    src: string;
    alt: string;
  }[];
  isNav: { isNav: boolean };
};

const languageImages: HeaderProps["languageImage"] = {
  EN: "/Flags.png",
  NL: "/flag-1.svg",
  FR: "/flag-2.svg",
  DE: "/flag-3.svg",
};

const iconsData: HeaderProps["icon"] = [
  {
    src: "/bxl_linkedin.svg",
    alt: "linkedin-icon",
  },
  {
    src: "/ri_facebook-fill.svg",
    alt: "facebook-icon",
  },
  {
    src: "/mdi_twitter.svg",
    alt: "twitter-icon",
  },
];
export default function Header() {
  const [open, setOpen] = useState<HeaderProps["open"]>(false);
  const [language, setLanguage] = useState<HeaderProps["language"]>("EN");

  const languageSelector = (val: HeaderProps["val"]) => {
    setLanguage(val);
    setOpen(!open);
  };
  return (
    <header className="header_section ">
      <div className="row align-items-center justify-content-around pt-4">
        <div className="col-3 logo-img px-4 mb-4">
          <Image width={316} height={76} src="/logo.svg" alt="logo-img" />
        </div>
        <div className="col-6 top-wrp px-4 py-1 d-flex justify-content-between">
          <div className="social-icons d-flex">
            {iconsData &&
              iconsData.map((item: any) => {
                return <img key={item.src} src={item.src} alt={item.alt} />;
              })}
          </div>
          <div className="flag-wrp position-relative d-flex align-items-center">
            <img
              src={languageImages[language] || languageImages.EN}
              alt="flag"
            />
            <h5
              className="en mb-0 aclonica px-1"
              onClick={() => setOpen(!open)}
            >
              {language}
            </h5>
            <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
            <div
              className="setting-dropdown"
              style={{ display: open ? "block" : "none" }}
            >
              <div className="languages-header">
                <div
                  className="inner-language-div d-flex"
                  onClick={() => {
                    languageSelector("NL");
                  }}
                >
                  <Image
                    width={18}
                    height={14}
                    src="/flag-1.svg"
                    alt="flag1"
                    className="mt-1"
                  />
                  <div className="text px-1">NL</div>
                </div>
                <div
                  className="inner-language-div d-flex"
                  onClick={() => {
                    languageSelector("FR");
                  }}
                >
                  <Image
                    width={18}
                    height={14}
                    src="/flag-2.svg"
                    alt="flag2"
                    className="mt-1"
                  />
                  <div className="text px-1">FR</div>
                </div>{" "}
                <div
                  className="inner-language-div d-flex"
                  onClick={() => {
                    languageSelector("DE");
                  }}
                >
                  <Image
                    width={18}
                    height={14}
                    src="/flag-3.svg"
                    alt="flag3"
                    className="mt-1"
                  />
                  <div className="text px-1">DE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 button-group  d-flex align-items-center justify-content-around">
          <Link href="/">
            <button className="button-primary">LOG IN </button>
          </Link>
          <Link href="/">
            <button className="button">SIGN UP</button>
          </Link>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
