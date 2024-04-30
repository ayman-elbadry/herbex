import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Produit extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                    <h1 className="section-title">Our Core Services</h1>
                </div>
            </div>
        </div>
        <div className="row justify-content-center" >
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
    <div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ backgroundColor: '#ebedec' }}>
            <div className="modal-product-img">
                <img src={publicUrl + "assets/img/product/herbex_produit.png"} alt="#" id='img_produit' />
            </div>
        <div className="ltn__feature-info">
        <h3 style={{ fontSize: '19px', marginBottom: '0px' }}>Herbex Vitex</h3>
            <p style={{ color: '#071c15', fontSize: '20px' }}>350 DH</p>
            <a className="theme-btn-1 btn btn-effect-1" href="#/service" id="btn_produits">Plus de détails</a>
        </div>
    </div>
</div>


<div className="col-lg-3 col-md-6 col-sm-6 col-12">
    <div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ backgroundColor: '#ebedec' }}>
            <div className="modal-product-img">
                <img src={publicUrl + "assets/img/product/herbex_produit.png"} alt="#" id='img_produit' />
            </div>
        <div className="ltn__feature-info">
        <h3 style={{ fontSize: '19px', marginBottom: '0px' }}>Herbex Vitex</h3>
            <p style={{ color: '#071c15', fontSize: '20px' }}>350 DH</p>
            <a className="theme-btn-1 btn btn-effect-1" href="#/service" id="btn_produits">Plus de détails</a>
        </div>
    </div>
</div>

<div className="col-lg-3 col-md-6 col-sm-6 col-12">
    <div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ backgroundColor: '#ebedec' }}>
            <div className="modal-product-img">
                <img src={publicUrl + "assets/img/product/herbex_produit.png"} alt="#" id='img_produit' />
            </div>
        <div className="ltn__feature-info">
        <h3 style={{ fontSize: '19px', marginBottom: '0px' }}>Herbex Vitex</h3>
            <p style={{ color: '#071c15', fontSize: '20px' }}>350 DH</p>
            <a className="theme-btn-1 btn btn-effect-1" href="#/service" id="btn_produits">Plus de détails</a>
        </div>
    </div>
</div>


<div className="col-lg-3 col-md-6 col-sm-6 col-12">
    <div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ backgroundColor: '#ebedec' }}>
            <div className="modal-product-img">
                <img src={publicUrl + "assets/img/product/herbex_produit.png"} alt="#" id='img_produit' />
            </div>
        <div className="ltn__feature-info">
        <h3 style={{ fontSize: '19px', marginBottom: '0px' }}>Herbex Vitex</h3>
            <p style={{ color: '#071c15', fontSize: '20px' }}>350 DH</p>
            <a className="theme-btn-1 btn btn-effect-1" href="#/service" id="btn_produits">Plus de détails</a>
        </div>
    </div>
</div>

            
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
                <a className="theme-btn-1 btn btn-effect-1" href="#/service" >Découvrir HERBEXbio</a>
            </div>
        </div>
    </div>
</div>



        }
}

export default Produit