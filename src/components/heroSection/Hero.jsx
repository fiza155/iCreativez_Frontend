import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroImg from "../../assets/images/it-outsourcing-company-worldwide.jpg";
import "./Hero.css";
import Button from "../button/Button";

const Hero = () => {
  const heroImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroImageRef.current,
      { scale: 1.4 }, // Start zoomed in
      { scale: 1, duration: 12, ease: "power2.out", yoyo: true, repeat: -1 } // Zoom out and back in continuously
    );
  }, []);

  return (
    <div className="hero-container">
      <img ref={heroImageRef} src={HeroImg} alt="Hero" className="hero-image" />
      <button className="primary-btn  ">Get in Touch</button>
    </div>
  );
};

export default Hero;
