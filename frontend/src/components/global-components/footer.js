import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {
        const $ = window.$;
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";
        document.body.appendChild(minscript);

        $('.go-top').find('a').on('click', function () {
            $(".quarter-overlay").fadeIn(1);
            $(window).scrollTop(0);
            setTimeout(function(){
                $(".quarter-overlay").fadeOut(300);
            }, 800);
        });

        $(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
            $('body').attr("style", "");
        });
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
            <footer className="ltn__footer-area  ">
				
				<div className="footer-top-area section-bg-2 plr--6 d-flex align-items-center">
    <div className="container-fluid">
	<div className="row" style={{justifyContent: 'center'}}>
	<div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{ width: '20%', display: 'flex',  alignItems: 'center' }}>
    <div className="footer-logo">
        <div className="site-logo">
            <img src={publicUrl+"assets/img/logo-2.png"} alt="Logo" />
        </div>
    </div>
</div>

    
    <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{    width: '20%'}}>
        <div className="footer-widget footer-menu-widget clearfix">
            <div className="footer-menu go-top">
                <ul>
                    <li><Link to="/cart">À Propos</Link></li>
                    <li><Link to="/wishlist">Nos Produits</Link></li>
                    <li><Link to="/login">Vert Essentiel</Link></li>
                    <li><Link to="/checkout">contactez-Nous</Link></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{    width: '20%'}}>
        <div className="footer-widget footer-menu-widget clearfix">
            <div className="footer-menu go-top">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/my-account">My account</Link></li>
                    <li><Link to="/wishlist">Wish List</Link></li>
                    <li><Link to="/add-listing">Add listing</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{    width: '20%'}}>
        <div className="footer-widget footer-menu-widget clearfix">
            <div className="footer-menu go-top">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/my-account">My account</Link></li>
                    <li><Link to="/wishlist">Wish List</Link></li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

    </div>
</div>

                <Copyright />
            </footer>
        )
    }
}

export default Footer_v1;
