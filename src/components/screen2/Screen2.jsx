import React from "react";


const Screen2 = () => {
  return (
    <>
      <div className="row mt-5 m-2" id="about">
        <div className="col-md-6 p-5 mt-md-5 ">
        <div className="row ">
        
        <div className="col d-flex align-items-center">
        <div
              className=" me-3"
              style={{
                width: "25%",
                height: "10px",
                backgroundColor: "#000",
                borderRadius: "10px",
              }}
            ></div>

<div className="" >
              <h1
                style={{
                  color: "#000000",
                  textAlign: "center",
                  // marginTop: "20%",
                }}
              >
                About CarePlus
              </h1>
            </div>
            <div
              className="ms-3"
              style={{
                width: "25%",
                height: "10px",
                backgroundColor: "#000",
                borderRadius: "10px",
              }}
            ></div>


        </div>
        
        
        </div>



<h3 className="text-para" >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</h3>
<h3 className="mt-4 text-para">
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
</h3>

          
        </div>
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
          <img src="/images/mobileOne.png" height="500px" alt="" />
        </div>
      </div>
    </>
  );
};

export default Screen2;
