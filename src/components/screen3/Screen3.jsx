import React from "react";

const Screen3 = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div
          className=" container-fluid row container-fluid mt-5 d-flex"
          style={{
            backgroundImage: "url(/images/bgForThirdScreen.png)",

            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }}
        >
          <div className="col-md-6 p-5 mt-md-5 ">
            <h3 className="text-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>

            <h3 className="mt-5 text-para">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-5" >
<img src="/images/10DMobile.png" height='500px' alt="" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Screen3;
