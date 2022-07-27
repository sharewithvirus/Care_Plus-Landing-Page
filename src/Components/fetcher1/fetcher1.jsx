/* eslint-disable no-unreachable */
import React from "react";
import styles from "./fetcher1.module.css";

function fetcher1() {
  return (
    <div className={`d-flex justify-content-evenly ${styles.fetcher1}`}>
      <div className="row">
        <div className="col-12 col-md-6 justify-content-center align-items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quo
            earum reiciendis quia, culpa quisquam libero consequuntur distinctio
            officia numquam totam minima expedita quos voluptate, hic molestiae
            vel iste sapiente!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fugit
            odit. Totam maiores repudiandae, blanditiis reiciendis praesentium ex
            corrupti obcaecati. Fuga quidem cumque laudantium ut possimus iusto
            necessitatibus, iste atque?
          </p>
        </div>
        <div className={`row d-flex flex-row col-md-6 align-items-center`}>
          <div className={`${styles.phones}`}>
            <img src="/assets/fetcher1Mockups.png" alt="Mockup 1" />
            {/* <img src="/assets/fetcherMockup2.png" alt="Mockup 2" className={`${styles.phone2}`} /> */}
          </div>
          {/* <div className={`${styles.phone2}`}>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default fetcher1;
