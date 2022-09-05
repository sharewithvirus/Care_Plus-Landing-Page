import React from "react";


const Screen1 = () => {
  return (
    <>
      <div className="" id="home" >
        <section>
          <div className="row mt-5" id="home">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5 text-center">
              <img src="/images/mainLogo.png" width="300px" alt="" />

              <p className="h5 text-danger">Book Your Appointment Now Online</p>
              <p className="h2 mt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>


              <button
                className="p-2 mt-5"
                style={{
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: 600,

                  alignItems: "center",
                  textAlign: "center",
                  color: " #FFFFFF",

                  background:
                    "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%), #3E4095",
                  borderRadius: "58.1736px",
                  border: "none",
                }}
              >
                <p className="h2 m-1">Get Started</p>
              </button>


            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="/images/doctorImage.png" width="80%" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Screen1;
