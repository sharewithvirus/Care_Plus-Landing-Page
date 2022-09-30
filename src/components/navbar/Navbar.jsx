import React from "react";

const Navbar = (props) => {
  const changeTo = async (x) => {
    props.changeView(x);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light  fixed-top"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid">
          <img
            src="/images/topRight.svg"
            className="topRightImg d-none d-md-block"
            alt=""
          />
          <a className="navbar-brand" href="/#home">
            <img
              src="/images/carelogo.png"
              alt=""
              width="auto"
              height="auto"
              onClick={() => changeTo("")}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active ms-4"
                  aria-current="page"
                  href="/#home"
                  onClick={() => changeTo("")}
                >
                  <strong> Home</strong>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ms-4" href="/#about">
                  <strong>About Us</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ms-4 " href="/#contact">
                  <strong>Contact Us</strong>
                </a>
              </li>
            </ul>
            <div className="me-sm-5 d-flex flex-column justify-content-center align-items-center text-center">
              <p className="text-md-white cursor">DOWNLOAD THE APP</p>
              <img
                src="/images/appStore.png"
                className="cursor"
                width="150px"
                height="50px"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
