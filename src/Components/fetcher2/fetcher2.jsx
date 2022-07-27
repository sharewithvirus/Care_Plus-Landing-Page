import React from "react";
import styles from "./fetcher2.module.css";

function fetcher2() {
  return (
    <div className={`d-flex justify-content-evenly ${styles.fetcher2}`}>
      <div className="row">
        <div
          className={`col-12 col-md-6 d-flex justify-content-center align-items-center ${styles.mockup}`}
        >
          <img
            className="mx-auto"
            src="/assets/fetcher2Mockup.png"
            alt="Mockup 1"
          />
        </div>
        <div
          className={`row d-flex flex-row col-md-6 align-items-center ${styles.aboutText}`}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quo ut repellat illum veniam iusto amet placeat fugit
              obcaecati est, consequuntur nostrum nobis, repudiandae velit
              mollitia! Explicabo dolorum similique animi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fetcher2;
