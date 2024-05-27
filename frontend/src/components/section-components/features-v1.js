import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return (
    <div className={customClass} id='avantage'>
   <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title-area ltn__section-title-2--- text-center">
        <h1 className="section-title">Avantages HERBEXbio</h1>
      </div>
    </div>
  </div>
  <div className="row ltn__custom-gutter--- justify-content-center go-top">
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
	<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 active" style={{ borderTopLeftRadius: '100px' }}>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="ltn__feature-icon">
              <img src={publicUrl + "assets/img/icons/icon-img/21.png"} alt="#" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
		  <div className="ltn__feature-info" style={{ textAlign: 'left' }}> {/* Ajout du style textAlign */}
              <h3><Link to="/service-details">Acheter une maison</Link></h3>
              <p>Plus de 1 million de maisons à vendre disponibles sur le site, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 active">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="ltn__feature-icon">
              <img src={publicUrl + "assets/img/icons/icon-img/22.png"} alt="#" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
		  <div className="ltn__feature-info" style={{ textAlign: 'left' }}> {/* Ajout du style textAlign */}

              <h3><Link to="/service-details">Louer une maison</Link></h3>
              <p>Plus de 1 million de maisons à louer disponibles sur le site, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Ajoutez d'autres éléments similaires ici pour chaque paire */}
	<div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 active">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="ltn__feature-icon">
              <img src={publicUrl + "assets/img/icons/icon-img/22.png"} alt="#" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
		  <div className="ltn__feature-info" style={{ textAlign: 'left' }}> {/* Ajout du style textAlign */}

              <h3><Link to="/service-details">Louer une maison</Link></h3>
              <p>Plus de 1 million de maisons à louer disponibles sur le site, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	<div className="col-lg-6 col-md-6 col-sm-6 col-12">
	<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1 active" style={{ borderBottomRightRadius: '100px' }}>



        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="ltn__feature-icon">
              <img src={publicUrl + "assets/img/icons/icon-img/22.png"} alt="#" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
		  <div className="ltn__feature-info" style={{ textAlign: 'left' }}> {/* Ajout du style textAlign */}
              <h3><Link to="/service-details">Louer une maison</Link></h3>
              <p>Plus de 1 million de maisons à louer disponibles sur le site, nous pouvons vous proposer une maison que vous voudrez appeler chez vous.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
}
export default FeaturesV1;