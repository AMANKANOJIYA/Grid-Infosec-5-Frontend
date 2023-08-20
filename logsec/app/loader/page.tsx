import React from "react";
import { useState } from "react";

export default function Loader() {
  return (
    <>
      <div className="navbar">
        <img src="/flipkart.png" alt="Logo" className="logoimage" />
      </div>
      <div className="loaderContainer">
        <img src="/comp_3.gif" alt="Logo" className="loader" />
      </div>
    </>
  );
}
