import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";

const Screen6 = () => {
  return (
    <>
      <div className="" style={{}}>
        <div className="" style={{ backgroundColor: "#DCF1EC" }}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.9" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,192C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className="container-fluid "
          style={{ backgroundColor: "#0099ff" }}
        >
          <div className="row">
            <div className="col-md-6 text-center p-5">
              <p
                className="h5"
                style={{
                  fontWeight: "bold",
                }}
              >
                Subscribe to email alerts. We promise not to spam your inbox.
              </p>

              <div className="row mt-4 p-3 d-flex flex-column animate_animated animate_fadeInUp">
                <div className="col">
                  <input
                    type="text "
                    className="input-email"
                    placeholder="Email Address*"
                    required
                  />

                  <button type="button" className="btn btn-primary email-btn  ">
                    SUBSCRIBE
                  </button>
<div className="row">
  <div className="col d-flex justify-content-center mt-3">
  <button type="button" className="btn btn-primary email-btn-sm  ">
                    SUBSCRIBE
                  </button>
  </div>
</div>


                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center ">
              <p className=" active cursor">
                {" "}
                <strong>DOWNLOAD THE APP</strong>{" "}
              </p>
              <img
                src="/images/appStore.png"
                className="cursor"
                width="200px"
                height="60px"
                alt=""
              />
              <h5>
                <Stack direction="row" className="mt-4" sx={{}} spacing={2}>
                 
                    <FacebookIcon className="cursor text-black" onClick={() => window.open("https://www.facebook.com/login/ ", "_blank")} />
           

                  
                    <TwitterIcon className="cursor" onClick={() => window.open("https://twitter.com/i/flow/login","_blank")} />{" "}
                
                 
                    <InstagramIcon className="cursor" onClick={() => window.open("https://www.instagram.com/accounts/login/","_blank")} />{" "}
               
                    <YouTubeIcon className="cursor" onClick={() => window.open("https://www.youtube.com/","_blank")} />{" "}
         
                  
                    <LinkedInIcon className="cursor" onClick={() => window.open("https://www.linkedin.com/feed/", "blank")} />{" "}
              
                </Stack>
              </h5>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen6;
