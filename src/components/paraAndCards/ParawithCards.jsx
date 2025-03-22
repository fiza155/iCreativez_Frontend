import React, { useRef } from "react";
import "./ParawithCards.css";

const ParawithCards = () => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div id="wrapper">
      <div id="content">
        <section>
          <h1>Tucan's Life</h1>
          <p>
            Fusce id ipsum ultricies, vulputate leo id, interdum ex. Aenean vel
            auctor magna. Aenean ac interdum dui, ut dapibus libero. Duis non
            ligula non orci dapibus dictum. In eu tortor mauris.
          </p>
        </section>

        {/* Gallery Section */}
        <div className="gallery-container">
          <button className="scroll-btn left" onClick={scrollLeft}>
            ◀
          </button>
          <div className="gallery-wrapper">
            <div className="gallery" ref={galleryRef}>
              {[
                "https://images.unsplash.com/photo-1588617491022-023fa43c001d?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1595363530143-b913b4ea30dd?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1611788542170-38cf842212f4?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1617752041172-5fee314079e0?auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1584552356827-84601899716c?auto=format&fit=crop&w=800&q=60",
              ].map((src, index) => (
                <div className="gallery-box" key={index}>
                  <img src={src} alt="tucan" />
                </div>
              ))}
            </div>
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>
            ▶
          </button>
        </div>

        <section>
          <h1>Vestibulum ante ipsum</h1>
          <p>
            Fusce id ipsum ultricies, vulputate leo id, interdum ex. Aenean vel
            auctor magna. Aenean ac interdum dui, ut dapibus libero. Duis non
            ligula non orci dapibus dictum. In eu tortor mauris.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ParawithCards;
