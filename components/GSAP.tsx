"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

function GSAP() {
  useEffect(() => {
    // This function will be triggered when the component mounts
    const animateBox = () => {
      gsap.to(".box", { rotation: 180, x: 100, duration: 1 });
    };
    animateBox();
  }, []); 

  return (
    <div className="py-20">
      <p className="text-blue-200 text-center">GSAP</p>
      <div className="box bg-blue-500 w-20 h-20 m-auto rounded-lg"></div>
    </div>
  );
}

export default GSAP;
