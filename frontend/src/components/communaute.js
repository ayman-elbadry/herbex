import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-120 pb-90" >
			  <div className="container">
			    <div className="row">
				<div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
					<h1 className="section-title">Blog et Conseils Santé <br /><span>Vert Essentiel</span></h1>

			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
					<div className="section-title-area ltn__section-title-2--- mb-30">
					<div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>


  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>

  <div className="row" style={{ marginBottom: '5vh' }}>
    <div className="col-lg-1" style={{ paddingRight: '0px' }}> 
      <img src={publicUrl + "assets/img/others/validericon.png"} alt="About Us Image" />
    </div>
    <div className="col-lg-11">
      <p>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
    </div>
  </div>
</div>
			          
			         
			        
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-right">
			          <img src={publicUrl+"assets/img/others/9.png"} alt="About Us Image" />
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

export default AboutV2