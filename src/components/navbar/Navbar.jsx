import React from 'react'


const Navbar = () => {
  return (
  <>
   <nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{backgroundColor:"#FFFFFF"}}>
  <div className="container-fluid" >
    <img src="/images/topRight.svg" className='topRightImg d-none d-md-block' alt="" />
{/* <div className="border right-nav-img d-flex flex-column align-items-center justify-content-between">
<div className="svgs">

</div>
<svg className='svg-img-header' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,112C320,107,400,53,480,53.3C560,53,640,107,720,122.7C800,139,880,117,960,144C1040,171,1120,245,1200,266.7C1280,288,1360,256,1400,240L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
<svg className='svg-img-header-rev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,112C320,107,400,53,480,53.3C560,53,640,107,720,122.7C800,139,880,117,960,144C1040,171,1120,245,1200,266.7C1280,288,1360,256,1400,240L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

</div> */}


    <a className="navbar-brand" href="/#home">
    <img src="/images/carelogo.png" alt="" width="auto" height="auto" />
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-4" aria-current="page" href="/#home"><strong>  Home</strong> </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-4"  href="/#about"><strong>About Us</strong></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-4 "  href="/#contact"><strong>Contact Us</strong></a>
        </li>
        
      </ul>
      <div className="me-sm-5 d-flex flex-column justify-content-center align-items-center text-center">
        <p className='text-md-white cursor'>DOWNLOAD THE APP</p>
        <img src="/images/appStore.png" className='cursor' width='150px' height='50px' alt="" />

     
      </div>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
