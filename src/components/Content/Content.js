import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo1 from "../image/Spotify-Black-Logo.wine.svg";
import logo2 from "../image/walmart-logo-black-transparent.png";
import logo3 from "../image/vodafone-logo-black-and-white-3.png";
import logo4 from "../image/canon-inc.-logo-black-and-white.png";
import companyLogo from "../image/toppng.com-office-365-684x170.png";
import companyLogo1 from "../image/pngegg (6).png";
import companyLogo2 from "../image/kisspng-xero-logo-scalable-vector-graphics-accounting-2-17-infoag-conference-app-apk-indir-android-i-5b7c17522a4df6.0164163415348590901733.png";
import companyLogo3 from "../image/Gmail-Logo.png";
import companyLogo4 from "../image/clipart1029458.png";
import companyLogo5 from "../image/google-logo-high-res-e1438171558377.png";
import companyLogo6 from "../image/PngItem_14798.png";
import companyLogo7 from "../image/klaviyo-vector-logo.svg";
import companyLogo8 from "../image/logo-salesforcepngpluspngcomlogotransparentbackground-salesforce-logo-text-symbol-label-alphabet-transparent-png-2975312.png";
import mainLogo from "../image/2560px-Slack_Technologies_Logo.svg.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
    const [count,setCount] = React.useState(0)
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
    setInterval(() => {
        setCount(pre => pre+1)
    },1000)
  }, []);

  useEffect(() => {
      if(count < 9){
        const getLogo = document.querySelectorAll('.rightMobile img')[count]
        const getLogo1 = document.querySelectorAll('.rightPc img')[count]
        getLogo.classList.add('animation')
        getLogo1.classList.add('animation')
      }else{
        document.querySelector('.rightMobile .mainLogo img').classList.add('addMainLogoAnimation')
        document.querySelector('.rightPc .mainLogo img').classList.add('addMainLogoAnimation')
      }
      if(count > 11){
        document.querySelector('.content .rightMobile').classList.add('lowHeight')
      }
  },[count])

  return (
    <div className="content">
      <div className="rightMobile right">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo1}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo2}
          alt=""
        />
        <img
          src={companyLogo3}
          alt=""
        />
        <img
          src={companyLogo4}
          alt=""
        />
        <img
          src={companyLogo5}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo6}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo7}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo8}
          alt=""
        />
        <div className="mainLogo">
          <img
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            src={mainLogo}
            alt=""
          />
        </div>
      </div>
      <div className="left">
        <h1>
          Integrate you stack <FontAwesomeIcon icon={faArrowRight} /> automate
          your work
        </h1>
        <p>
          Evolve at the speed and scale of your business with the leader in
          low-code automation
        </p>
        <button className="trial">Start free trial</button>
        <button className="demo">Get a demo</button>
        <div className="company">
          <p>Working with the best</p>
          <div className="companyLogo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
      </div>
      <div className="rightPc right">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo1}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo2}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo3}
          alt=""
        />
        <img
          src={companyLogo4}
          alt=""
        />
        <img
          src={companyLogo5}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo6}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo7}
          alt=""
        />
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          src={companyLogo8}
          alt=""
        />
        <div className="mainLogo">
          <img
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            src={mainLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
