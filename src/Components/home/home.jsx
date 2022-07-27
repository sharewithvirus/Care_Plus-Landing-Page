import React from "react";
import styles from "./home.module.css";

function home() {
  return (
    <>
      <div className={`d-flex justify-content-evenly ${styles.homeDiv}`}>
        <div className="row">
          <div className="col-md-6">
            <div class="col d-flex flex-column align-items-center">
              <div
                className={`mt-5 d-flex flex-column align-items-center justify-content-center ${styles.logo}`}
              >
                <img src="/logo.svg" alt="carePlus" />
                <p>Book Your Appointment Now Online</p>
              </div>
              <div
                className={` d-flex flex-column text-center align-items-center justify-content-center ${styles.paragraph}`}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  aspernatur, adipisci iure placeat molestias totam est eius ex
                  aut nesciunt doloremque quisquam.
                </p>
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div
            className={`col-md-6 d-flex justify-content-center ${styles.docImgDiv}`}
          >
            <img src="/assets/mainDoc.gif" alt="doc" />
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
