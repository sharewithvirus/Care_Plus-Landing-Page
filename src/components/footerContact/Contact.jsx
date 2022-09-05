import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

const Contact = () => {
  return (
    <>
      <div className="container-fluid pb-3" style={{ backgroundColor: "#0099ff" }} id="contact">
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-4 d-md-flex justify-content-md-center  d-none d-md-block  ">
            <img src="/images/doctors.png" className="img-fluid" style={{backgroundColor:"#0099ff"}} alt="" />
          </div>
          <div className="col-md-7 text-center ">
            <div className="row">
              <div className="col-md-7  px-5">
                <h1 className="my-4" style={{fontSize:'2.5rem'}}>Contact Us</h1>

                <div className="mb-3">
                  <input
                    type="text"
                    className=" input-email input-contact font-s"
                    id="exampleFormControlInput1"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className=" input-email input-contact font-s"
                    id="exampleFormControlInput1"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3" >
                  <textarea
                    className=" input-email input-contact font-s"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Message"
                    style={{height:'auto'}}
                  ></textarea>
                </div>


<div className="row">
    <div className="col">
    <button type="button" class="btn btn-dark">Contact Us</button>
    </div>
</div>


              </div>
              <div className="col-md-4  d-flex flex-column justify-content-center align-items-center py-3  ">
      <p> <strong>
      Contact
      </strong> </p>

      <p> <strong>
      hi@gmail.com
      </strong> </p>

      <p> <strong>
      +91-xxxx-xxxxxx
      </strong> </p>

    
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
        <div className="row d-flex justify-content-center mb-4 ">
              <div className="col-md-5 text-center text-white ">
                <h6>
                  PRIVACY POLICY - TERMS OF USE - COOKIES POLICY © 2022 CarePlus
                  | ALL RIGHTS RESERVED
                </h6>
              </div>
            </div>
      </div>
    </>
  );
};

export default Contact;
