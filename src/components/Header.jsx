import React from 'react';

const Header = (props) => {
        return(
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                       <div className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                       </div>
                    </div>
                </div>
            </div>
        );
};

export default Header;