import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className='header'>
            {/* Header logo */}
            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon.png"/>
           </Link>
            {/* Header search */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* Header fields */}
             <div className="header__nav">
                 {/* 1st link */}
                 <Link to="/" className="header__link">
                   <div className="header__option"> 
                 <span className="header__span1">Hello Kresa</span>
                 <span className="header__span2">Sign In</span>
                 </div> 
                 </Link>
                 {/* 2nd link */}
                 <Link to="/" className="header__link">         
                 <div className="header__option"> 
                    <span className="header__span1">Returns</span>
                    <span className="header__span2">& orders</span>
                    </div>
                 </Link>
                 {/* 3rd link */}
                 <Link to="/" className="header__link">
                     <div className="header__option">
                        <span className="header__span1">Your</span>
                        <span className="header__span2">Prime</span>
                    </div>
                
                    
                 </Link>
                 {/* 4th link */}
                 <Link to="/" className="header__link">
                     <div className="header__option__basket">
                    <ShoppingBasketIcon className="header_basketIcon" />

                     <span>0</span>
                     </div>
                        
                        
                 </Link>
             </div>
            
        </nav>
    )
}

export default Header
