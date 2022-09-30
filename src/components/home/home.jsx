import React, { useState } from "react";
import Screen1 from "../screen1/Screen1";
import Screen2 from "../screen2/Screen2";
import Screen3 from "../screen3/Screen3";
import Screen4 from "../screen4/Screen4";
import Screen5 from "../screen5/Screen5";

const Layout = () => {
  return (
    <>
      <div className="container-fluid mt-5 pt-5 ">
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
      </div>
    </>
  );
};

export default Layout;
