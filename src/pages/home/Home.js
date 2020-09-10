import React from "react";
import "./Home.css";
import Product from "./Product";
import { Helmet } from "react-helmet";
import FlipMove from "react-flip-move";

function Home() {
  return (
    <div className="home">
      <Helmet title="Home | Amazon Clone" />

      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Image"
        />

        <FlipMove typeName={null}>
          <div className="home__row">
            <Product
              id="1231341"
              title="The Lean Startup: How Constant innovation Creates Radically Successful
          Businesses Paperback"
              price={19.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product
              id="4953809"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="2314356"
              title="SAMSUNG LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              rating={2}
            />
            <Product
              id="9324638"
              title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              image="https://media.very.co.uk/i/very/PGLTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              rating={5}
            />
            <Product
              id="43581724"
              title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX386_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="42395832"
              title="SAMSUNG LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WqHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </FlipMove>
      </div>
    </div>
  );
}

export default Home;
