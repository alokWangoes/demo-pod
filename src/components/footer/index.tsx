import React from "react";
import "./index.css";
import Image from "next/image";

type footerProps = {
  email: any;
  icon: {
    src: string;
    alt: string;
    className: string;
  }[];
  links: string[];
};

const iconsData: footerProps["icon"] = [
  {
    src: "/linkedin.svg",
    alt: "linkedin-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/facebook.svg",
    alt: "facebook-icon",
    className: "footer-social-icons-img",
  },
  {
    src: "/twitter.svg",
    alt: "twitter-icon",
    className: "footer-social-icons-img",
  },
];

const footerLink1: footerProps["links"] = [
  "Home",
  "Contact",
  "FAQs",
  "Pricing",
  "Documentation",
];
const footerLink2: footerProps["links"] = [
  "Etsy",
  "Walmart",
  "eBay",
  "Lorem",
  "",
];

export default function Footer() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(newsLetterSchema),
  //   defaultValues: {
  //     email: "",
  //   },
  // });

  const sendEmail = (data: footerProps["email"]) => {
    console.log(data, "sendEmail");
  };
  return (
    <footer className="footer_section">
      <div className="container-fluid bg-image">
        <div className="container pt-5">
          <div className="row  d-flex align-items-center">
            <div className="col-4 left_section">
              <Image width={316} height={76} src="logo.svg" alt="logo" />
            </div>
            <div className="col-7 right_sectioin px-5  d-flex align-items-center justify-content-between">
              <div className="col-3 quick-links">
                <span className="quick"> Quick Links</span>
              </div>
              <div className="col-7 sec d-flex justify-content-between">
                <div className="footer-stay">
                  <span className="quick"> Stay updated</span>
                </div>
                <div className="footer-icons d-flex">
                  {iconsData &&
                    iconsData.map((item: any) => {
                      return (
                        <img
                          key={item.className}
                          src={item.src}
                          alt={item.alt}
                          className={item.className}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4 left_section1  pt-5 ">
              Lorem ipsum dolor sit amet
              <br />
              consectetur. Luctus tincidunt neque
              <br />
              quis sit tristique. Elementum a vitae
              <br />
              augue condimentum augue ipsum
              <br />
              nec.
            </div>
            <div className="col-7 right_section2  d-flex  justify-content-between ">
              <div className="col-4 left d-flex justify-content-around">
                <div className="footer_link1 ">
                  <ul>
                    {footerLink1 &&
                      footerLink1.map((item: any) => {
                        return (
                          <li key={item} className="list pt-3">
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="footer_link1">
                  <ul>
                    {footerLink2 &&
                      footerLink2.map((item: any) => {
                        return (
                          <li key={item} className="list pt-3">
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className="col-7 right px-2">
                <div className="email-input-wrapper">
                  <div className="email-title-heading">
                    Please enter your email
                  </div>
                  <form
                  //   onSubmit={handleSubmit((data) => {
                  //     sendEmail(data);
                  //   })}
                  >
                    <div className=" input-group  rounded-5 ">
                      <input
                        // {...register("email")}
                        type="text"
                        className="form-control py-2  "
                        placeholder="Email"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="button btn-outline-secondary d-grid gap-2 col-4 text-light"
                        type="button"
                        id="button-addon2"
                      >
                        submit
                      </button>
                    </div>

                    <div className="text-danger error-msg">
                      {" "}
                      {/* {errors.email?.message} */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
