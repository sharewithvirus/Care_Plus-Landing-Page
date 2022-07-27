import React from "react";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

function header() {
  console.log(styles);
  return (
    <>
      <div>
        <div className={`d-flex justify-content-end ${styles.topImage}`}>
          <img src="/assets/top-right-background.svg" alt="right background" />
        </div>
        <Navbar />
        {/* <div className={`d-flex ${styles.bottomImg}`}>
        <img src="/assets/bottom-background.svg" alt="right background" />
      </div> */}
      </div>
    </>
  );
}

export default header;
