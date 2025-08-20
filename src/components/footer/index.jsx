import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const Scroll = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    // Load TermsFeed cookie script dynamically
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src =
      "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.onload = () => {
      if (window.cookieconsent) {
        window.cookieconsent.run({
          notice_banner_type: "simple",
          consent_type: "express",
          palette: "light",
          language: "en",
          page_load_consent_levels: ["strictly-necessary"],
          notice_banner_reject_button_hide: false,
          preferences_center_close_button_hide: false,
          page_refresh_confirmation_buttons: false,
          website_name: "Hakata Kitaro Sushi",
          website_privacy_policy_url: "https://github.com/", // replace with your real policy URL
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-body-tertiary pt-5">
      <div className="container">
        <div className="row">
          {/* Logo + Description */}
          <div className="col-md-4">
            <div className="footerLogo">
              <img src={logo} alt="Hakata Kitaro Sushi Logo" className="pb-3" />
              <p>
                Hakata Kitaro Sushi welcomes you to experience authentic
                Japanese dining in the heart of Fukuoka. From traditional sushi
                to chef’s specials, we take pride in serving fresh flavors with
                warm hospitality.
              </p>
              <p>
                Japan, 〒810-0004 Fukuoka, Chuo Ward, Watanabedori, 5
                Chome−2−9 1F
              </p>
              <p>Phone: +81 92-406-8682</p>
              <p>Email: info@example.com</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 px-md-5">
            <h4 className="py-3">Useful Links</h4>
            <p>
              <a href="#" className="text-decoration-none text-black">
                Home
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-black">
                About
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-black">
                Menu
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-black">
                Blog
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-black">
                Contact
              </a>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4">
            <h4 className="py-3">Opening Hours</h4>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            <p>Holidays: Closed</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="col-md-4">
            <div className="text-center py-3">
              <p className="mb-0">
                © 2023 Hakata Kitaro Sushi. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-md-8 py-3 text-center">
            <span>
              <Link
                to="/cookies"
                className="text-decoration-none text-black px-2"
                onClick={Scroll}
              >
                Cookies Policy
              </Link>
              |
              <Link
                to="/privacy"
                className="text-decoration-none text-black px-2"
                onClick={Scroll}
              >
                Privacy Policy
              </Link>
              |
              <Link
                to="/disclaimer"
                className="text-decoration-none text-black px-2"
                onClick={Scroll}
              >
                Disclaimer
              </Link>
              |
              <Link
                to="/terms&conditions"
                className="text-decoration-none text-black px-2"
                onClick={Scroll}
              >
                Terms & Conditions
              </Link>|
            </span>
            {/* Update cookies preferences link */}
            <div className="text-center py-2 d-inline">
              <a
                href="#"
                id="open_preferences_center"
                className="text-decoration-none text-black"
              >
                Update cookies preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
