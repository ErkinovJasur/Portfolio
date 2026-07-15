import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import logo from "./assets/logo.png";
import house from "./assets/house.png";
import deco from "./assets/deco.png";
import deco1 from "./assets/deco1.png";
import deco2 from "./assets/deco2.png";
import dangildama from "./assets/dangildama.png";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <h1>
              <img src={logo} alt="" /> Logo
            </h1>
            <ol>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <button>
                <Phone color="white" size={20} /> Request a call
              </button>
            </ol>
          </nav>
        </div>
      </header>
      <main>
        <section className="bgCard">
          <div className="container">
            <div className="main">
              <h1>YOUR DREAM HOME</h1>
              <p>IS ONE CLICK AWAY</p>
              <div className="bottom-div">
                <div className="div1">
                  <div className="whiteCard">
                    <h2>ALL UNITS</h2>
                  </div>
                  <div className="blueCard">
                    <h2>FOR RENT</h2>
                  </div>
                  <div className="blueCard">
                    <h2>FOR SALE</h2>
                  </div>
                </div>
                <div className="div2">
                  <div>
                    <h2>LOOKING FOR</h2>
                    <input type="text" placeholder="Property Type" />
                  </div>
                  <div>
                    <h2>LOCATION</h2>
                    <input type="text" placeholder="All Cites" />
                  </div>
                  <div>
                    <h2>PROPERTY SIZE</h2>
                    <input type="text" placeholder="Bedrooms" />
                  </div>
                  <div>
                    <h2>BUDGET</h2>
                    <input type="text" placeholder="Max. Price" />
                  </div>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>Explore Our Properties</h1>
          <p>Enjoy the variety of 100+ Different properties in the market!</p>
          <div className="container">
            <div className="cards">
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
              <div className="card">
                <img src={house} alt="" />
                <h3>Light and modern house</h3>
                <p>
                  <i data-lucide="map-pin"></i>7409 Knollwood Cove, Austin, TX,
                  78731{" "}
                </p>
              </div>
            </div>
            <button>Load More</button>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="hero3">
              <div className="card1">
                <img src={deco} alt="" />
              </div>
              <div className="card2">
                <div className="card-1">
                  <img src={deco1} alt="" />
                  <h1>Wide Selection Of Properties</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                </div>
                <div className="card-2">
                  <div>
                    <img src={deco2} alt="" />
                  </div>
                  <div>
                    <img src={deco1} alt="" />
                    <img src={deco1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bgCard2">
          <div className="container">
            <div className="login">
              <div className="login1">
                <h1>Why Our Service Is The Perfect Choice?</h1>
              </div>
              <div className="login2">
                <h2>Real Estate Inquiry Form</h2>
                <p>Inquiry Type</p>
                <input type="number" />
                <p>Name</p>
                <input type="text" placeholder="Name" />
                <p>Email</p>
                <input type="email" placeholder="email" />
                <p>Phone</p>
                <input type="tel" placeholder="phone" />
                <p>Message</p>
                <textarea placeholder="message"></textarea>
                <button>Sumbit</button>
              </div>
            </div>
          </div>
        </section>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
            <div>
              <img src={dangildama} alt="" />
              <h2>Light and modern house</h2>
              <p>7409 Knollwood Cove, Austin, TX, 78731 </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <footer>
          <div className="footer-wrap">
            <div className="topLine"></div>

            <div className="newsletter">
              <h2>Newletter Signup</h2>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="footer-grid">
              <div className="footer-brand">
                <div className="logo-row">
                  <div className="logo-dot"></div>
                  <h2>Logo</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod.
                </p>
              </div>

              <div>
                <h3>Explore</h3>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>

              <div>
                <h3>Services</h3>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>

              <div>
                <h3>Contact</h3>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              © Lorem Ipsum - All rights reserved
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
