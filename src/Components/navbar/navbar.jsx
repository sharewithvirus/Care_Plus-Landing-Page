import React from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";

function navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className={`container-fluid`}>
          <a className={`navbar-brand ${styles.brandImg}`} href={`#Home`}>
            <img src={`/logo.svg`} alt={`CarePlus`} />
          </a>
          <button
            className={`navbar-toggler btn btn-danger ${styles.nav_Button}`}
            type={`button`}
            data-bs-toggle={`collapse`}
            data-bs-target={`#navbarSupportedContent`}
            aria-controls={`#navbarSupportedContent`}
            aria-expanded={false}
            aria-label={`Toggle navigation`}
          >
            <span className={`navbar-toggler-icon`}>
              {/* <img src="/assets/menuIcon.png" alt="menuIcon" /> */}
            </span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id={`navbarSupportedContent`}
          >
            <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.ulList}`}>
              <li className={`nav-item`}>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className={`d-flex`}>
              <img src={`/assets/googlePlay.png`} alt={`Play Store`} />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
