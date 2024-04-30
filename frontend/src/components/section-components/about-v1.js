import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV1 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/';

        // Style commun pour les éléments avec du texte justifié à gauche
        const textAlignLeft = {
            textAlign: 'left'
        };

        return (
            <div className="ltn__about-us-area pt-120 pb-90" id='about'>
                <div className="container">
                    {/* Contenu de la première partie */}
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-img-wrap about-img-left">
                                <img src={publicUrl+"assets/img/others/2.jpg"} alt="About Us Image" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">
                                    <h1 className="section-title">À Propos de HERBEXbio </h1>
                                    <p>l'alliance de la tradition marocaine et de la science nutritionnelle moderne. Nos produits 100% bio sont le fruit de cette synergie unique. Pour en savoir plus, visitez notre page À Propos.</p>
                                </div>
                                <div className="btn-wrapper animated go-top">
                                    <Link to="/service" className="theme-btn-1 btn btn-effect-1">Découvrez HERBEXbio </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contenu de la deuxième partie */}
                    <div className={this.props.customClass} id='avantage'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h1 className="section-title" style={{marginTop: '27vh'}}>Avantages HERBEXbio</h1>
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
                </div>
            </div>
        );
    }
}

export default AboutV1