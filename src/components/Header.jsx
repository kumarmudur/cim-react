import React from 'react';
import '../css/header.css';

const Header = () => {
        return(
           <div className="row">
            <div className="col-md-3 col-lg-3">
                <figure><img src={require('../assest/images/logo.png')} className="nav-logo"/></figure>
            </div>
           </div>
        );
};

export default Header;