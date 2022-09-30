import React from "react";

const Screen4 = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div
          className=" container-fluid row container-fluid  d-flex"
          style={{
            backgroundImage: "url(/images/bgForFourthScreen.png)",

            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }}
        >
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start ps-md-5">
            <img src="/images/leftMobile.png" height="500px" alt="" />
          </div>
          <div className="col-md-6 p-5 mt-md-5 d-flex align-items-center ">
            <h3 className="text-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen4;
