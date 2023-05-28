import b1 from "../assets/images/b1.webp";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";

const Home = () => {
  return (
    <>
      {/* carousel area start  */}
      <div className="carousel-wrapper">
        <div className="container">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={b1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={b2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={b3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={b4} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* carousel area end */}
    </>
  );
};

export default Home;
