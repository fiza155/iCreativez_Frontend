import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SucessAwards.css";
const SuccessAwards = () => {
  const cards = [
    {
      title: "Case Study",
      desc: "Enabling Seamless Resale Operations Across E-Commerce",
      img: "image1.jpg",
    },
    {
      title: "Blogs",
      desc: "Custom Web Application Development: Everything You Need to Know",
      img: "image2.jpg",
    },
    {
      title: "Case Study",
      desc: "Empowering XQUIC for Automated Financial Accuracy",
      img: "image3.jpg",
    },
    {
      title: "Blogs",
      desc: "How Cloud Computing Can Transform Small Businesses",
      img: "image4.jpg",
    },
    {
      title: "Blogs",
      desc: "Trends of Mobile Design: What's Next for Your Business?",
      img: "image5.jpg",
    },
    {
      title: "Case Study",
      desc: "KUDO’s Journey to Bridging Global Communications",
      img: "image6.jpg",
    },
    {
      title: "Blogs",
      desc: "How Generative AI is Transforming Business Operations",
      img: "image7.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 text-content">
          <h6>FEATURED INSIGHTS</h6>
          <h2>Stories of our transformations across Services and Industries</h2>
          <p>From Concept to Completion</p>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="col-lg-6">
          <Swiper
            direction="vertical" // 👈 Ye important hai
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2000 }}
            style={{ height: "500px" }} // 👈 Scrollable height set karo
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card-item"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="overlay">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessAwards;
