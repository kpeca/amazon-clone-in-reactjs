import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating and image */}
      <div className="home__row">
        <Product
          id="2412515"
          title="The Lean Startup: How innovation Creates "
          price={11.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71kUi5nz%2BHL._AC_SL1500_.jpg"
        />
        <Product
          id="2441421"
          title="Oculus Rift S PC-Powered VR Gaming Headset"
          price={299.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="2412564"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={349.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51nN7lYX8FL._SL1000_.jpg"
        />
        <Product
          id="2412511"
          title="Logitech C920x Pro HD Webcam"
          price={93.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
        />
        <Product
          id="2412452"
          title="Webcam with Microphone, AXUF 1080P HD"
          price={34.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51eTBqLoEJL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
