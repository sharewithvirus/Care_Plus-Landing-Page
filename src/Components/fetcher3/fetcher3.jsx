import React from "react";
import styles from "./fetcher3.module.css";

function fetcher3() {
  return (
    <div className={`d-flex justify-content-evenly ${styles.fetcher3}`}>
      <div className="row">
        <div className="col-md-6 justify-content-center algins-items-center">
          <div
            className={`row d-flex align-items-center ${styles.fetcher3Text}`}
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quo ut repellat illum veniam iusto amet placeat
                fugit obcaecati est, consequuntur nostrum nobis, repudiandae
                velit mollitia! Explicabo dolorum similique animi.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`col-md-6 d-flex justify-content-center ${styles.docImgDiv}`}
        >
          <div>
            <img src="/assets/mobileMockup01.png" alt="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default fetcher3;
