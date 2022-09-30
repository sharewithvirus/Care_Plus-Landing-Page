import React from "react";

const Screen5 = () => {
  return (
    <>
      <div className="row d-flex justify-content-center ">
        <div
          className=" container-fluid row container-fluid  d-flex"
          style={{
            backgroundImage: "url(/images/fifth.png)",

            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }}
        >
          <div className="col-md-6 p-5 mt-md-5 ">
            <h3 className="mt-5 text-para">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <img src="/images/mobileOne.png" height="500px" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen5;
