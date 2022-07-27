import React from "react";
import styles from "./about.module.css";

function about() {
  return (
    <div className={`d-flex justify-content-evenly ${styles.aboutDiv}`}>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div class="row d-flex flex-column align-items-center">
            <div
              className={`d-flex flex-column align-items-center mt-5 ${styles.about}`}
            >
              <div className={`row ${styles.divText}`}>
                <div className="col-sm-2 col-md-2">
                  <span className={styles.line1}></span>
                </div>
                <div className="col-sm-8 col-md-8">
                  <h4 className={styles.about}>About Care Plus</h4>
                </div>
                <div className="col-sm-2 col-md-2">
                  <span className={styles.line2}></span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                {" "}
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-6 d-flex ${styles.docImgDiv}`}>
          <div>
            <img src="/assets/mobileMockup01.png" alt="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
