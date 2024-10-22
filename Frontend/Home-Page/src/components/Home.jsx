import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cdn.marvel.com/content/1x/marvel-mystic-mayhem-announcement-article-card.jpg",
    "https://cdn.marvel.com/content/1x/iron_man_1_card.jpg",
    "https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg",
  ];

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ backgroundColor: "rgb(32, 32, 32)" }}>
      {/* nav */}
      <div
        className="homeHeader"
        style={{ backgroundColor: "rgb(32, 32, 32)" }}
      >
        <ul className="nav justify-content-center fs-6">
          <div className="flex-grow-1 border-bottom"></div>
          <div className="nav p-1 border-start border-bottom">
            <li className="nav-item p-1 d-flex align-items-center">
              <small className="text-white">
                <span style={{ fontSize: "0.8em" }}>
                  <strong>LOG IN</strong>
                </span>
              </small>
            </li>
            <li className="nav-item p-1 d-flex align-items-center">
              <small className="text-white">
                <span style={{ fontSize: "0.8em" }}>
                  <strong>|</strong>
                </span>
              </small>
            </li>
            <li className="nav-item p-1 d-flex align-items-center">
              <small className="text-white">
                <span style={{ fontSize: "0.8em" }}>
                  <strong>JOIN</strong>
                </span>
              </small>
            </li>
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center border-start border-end border-bottom">
            <svg
              width="130"
              height="52"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect fill="#EC1D24" width="100%" height="100%"></rect>
              <path
                fill="#FEFEFE"
                d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
              ></path>
              <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
              <path
                fill="#FEFEFE"
                d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
              ></path>
            </svg>
          </div>
          <div className="p-1 border-bottom">
            <li className="nav-item p-1 d-flex align-items-center">
              <small className="text-white">
                <span style={{ fontSize: "0.8em" }}>
                  <strong>MARVEL AI CHAT</strong>
                </span>
              </small>
            </li>
          </div>
          <div className="flex-grow-1 border-start border-bottom"></div>
        </ul>
      </div>

      {/* nav-2 */}
      <div>
        <ul
          className="nav justify-content-center align-items-center"
          style={{ backgroundColor: "rgb(32, 32, 32)", height: "40px" }}
        >
          {["NEWS", "UPDATES", "CHAT AI", "CHARACTER CHAT", "MORE"].map(
            (item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{ fontSize: "0.85rem" }}
                >
                  <strong>{item}</strong>
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* latest news */}
      <div
        className="d-flex justify-content-center align-items-center mb-1"
        style={{ backgroundColor: "rgb(32, 32, 32)", height: "20px" }}
      >
        <span className="text-white" style={{ fontSize: "0.8em" }}>
          <strong> Chat with new Character "WOLVERINE" </strong>
        </span>
      </div>

      {/* body */}
      <div
        className="pt-2"
        style={{ height: "100vh", backgroundColor: "rgb(32, 32, 32)" }}
      >
        {/* Image Slider */}
        <div
          className="image-slider-container"
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="image-slider"
            style={{
              width: "100%",
              maxWidth: "1140px",
              position: "relative",
              height: "540px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              />
            ))}
          </div>
          <div
            className="image-selector"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  background:
                    index === currentIndex
                      ? "rgba(236, 29, 36, 0.8)"
                      : "rgb(32, 32, 32)", // Change background color for active button
                  color: "white",
                  border: "0.2px solid white",
                  borderRadius: "7px",
                  cursor: "pointer",
                  fontWeight: index === currentIndex ? "bold" : "normal",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            {/* Logo Column */}
            <div className="col-md-4 mb-3">
              <svg
                width="100"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                <path fill="#FEFEFE" d="M0 0h30v40H0z"></path>
                <path
                  fill="#EC1D24"
                  d="M31.5 37V3H24l-3 17.5L18 3H11v34h6V20.5L20 37h3l3-16.5V37z"
                ></path>
              </svg>
            </div>

            {/* Links Column */}
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                {["Home", "Characters", "Comics", "Movies"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center">
                {["facebook-f", "twitter", "instagram", "youtube"].map(
                  (icon) => (
                    <a href="#" className="text-light me-3" key={icon}>
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
