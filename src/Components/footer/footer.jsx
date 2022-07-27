import React from "react";
import styles from "./footer.module.css";

function footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className="row">
        <div
          className={`col-md-6 d-flex flex-colum justify-content-center align-items-center p-20`}
        >
          <div className={`${styles.subDivText}`}>
            <p>Subscribe to email alerts. We promise not to spam your inbox.</p>
            <div>
              <input
                className={`${styles.emailInput}`}
                type="email"
                placeholder="Email Address*"
              />
              <button className={`${styles.subButton}`}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className={`${styles.downDivText}`}>
            <p>DOWNLOAD THE APP</p>
            <img src="/assets/googlePlay.png" alt="Download Now" />
            <div
              className={`col-4 d-flex flex-row justify-content-end ${styles.socialDiv}`}
            >
              <div className={`${styles.socialIcon}`}>
                <a href="https://www.facebook.com">
                  <img src="/assets/socialFacebook.png" alt="facebook" />
                </a>
              </div>
              <div className={`${styles.socialIcon}`}>
                <a href="https://www.twitter.com">
                  <img src="/assets/socialTwitter.png" alt="Twitter" />
                </a>
              </div>
              <div className={`${styles.socialIcon}`}>
                <a href="https://www.instagram.com">
                  <img src="/assets/socialInstagram.png" alt="Instagram" />
                </a>
              </div>
              <div className={`${styles.socialIcon}`}>
                <a href="https://www.youtube.com">
                  <img src="/assets/socialYouTube.png" alt="youtube" />
                </a>
              </div>
              <div className={`${styles.socialIcon}`}>
                <a href="https://www.linkedin.com">
                  <img src="/assets/socialLinkedIn.png" alt="Linked In" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
