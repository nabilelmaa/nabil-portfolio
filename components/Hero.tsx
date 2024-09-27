import React from "react";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section id="about-me">
      <div className="flex flex-col space-y-2">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
