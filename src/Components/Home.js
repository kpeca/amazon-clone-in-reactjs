import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className ="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/* Product id, title, price, rating and image */}
            <div className="home__row">
            <Product
             id ="2412515"
             title= "The Lean Startup: How innovation Creates "
             price={11.95}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/71kUi5nz%2BHL._AC_SL1500_.jpg"
             />
             <Product
             id ="2412515"
             title= "The Lean Startup: How innovation Creates "
             price={11.95}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/71kUi5nz%2BHL._AC_SL1500_.jpg"
             />
             </div>
        </div>
    )
}

export default Home
