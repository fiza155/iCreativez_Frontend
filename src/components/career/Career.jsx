import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Career.css";
// import Image from "../../assets/images/your-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(
      image,
      { width: "100vw", height: "100vh" },
      {
        width: "50vw",
        height: "auto",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );

    gsap.fromTo(
      text,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="animated-section" ref={sectionRef}>
      <div className="image-container" ref={imageRef}>
        <img src={Image} alt="Meeting" />
      </div>
      <div className="text-container" ref={textRef}>
        <h4>CAREERS</h4>
        <h1>Human-first is our foundation.</h1>
        <p>
          Join a culture that celebrates excellence and diversity, globally!
        </p>
        <button className="join-btn">Join Us</button>
      </div>
    </div>
  );
};

export default Career;
