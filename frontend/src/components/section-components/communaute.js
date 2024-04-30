import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CommunauteV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-120 pb-90" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                    <h1 className="section-title">Participez à Notre Communauté</h1>
                </div>
            </div>
            <div className="about-us-info-wrap">
    <div className="row" style={{ marginBottom: '5vh' }}>
        <div className="col-lg-12 text-center">
            <div className="custom-box">
                <p style={{color:'#fff' ,fontSize: '18px', marginBottom: '0px'}} >Rejoignez les événements, ateliers et initiatives d'HERBEXbio pour partager, apprendre et grandir ensemble vers un bien-être collectif.</p>
            </div>
        </div>
    </div>
    <div className="row" style={{ marginBottom: '5vh' }}>
        <div className="col-lg-12 text-center">
            <div className="custom-box">
                <p style={{color:'#fff' ,fontSize: '18px',marginBottom: '0px'}}>Atelier Bien-être : Découvrez nos prochains ateliers sur les bienfaits des produits naturels et comment les intégrer dans votre quotidien.</p>
            </div>
        </div>
    </div>
    <div className="row" style={{ marginBottom: '5vh' }}>
        <div className="col-lg-12 text-center">
            <div className="custom-box">
                <p style={{color:'#fff' ,fontSize: '17px',marginBottom: '0px'}}>Rencontres Communautaires : Partagez vos expériences et apprenez des autres lors de nos rencontres dédiées à la santé naturelle et au bien-être.</p>
            </div>
        </div>
    </div>
    <div className="row" style={{ marginBottom: '5vh' }}>
        <div className="col-lg-12 text-center">
            <div className="custom-box">
                <p style={{color:'#fff' ,fontSize: '18px',marginBottom: '0px'}}>Initiatives Vertes : Engagez-vous avec nous dans des actions pour un avenir plus durable et respectueux de l'environnement.</p>
            </div>
        </div>
    </div>
    <div className="row" style={{ marginBottom: '5vh' }}>
        <div className="col-lg-12 text-center">
            <div className="custom-box">
                <p style={{color:'#fff' ,fontSize: '17px',marginBottom: '0px'}}>Votre participation fait toute la différence. Ensemble, construisons une communauté soudée autour des valeurs de santé naturelle et de durabilité.</p>
            </div>
        </div>
     </div>
</div>

        </div>
    </div>
</div>


        }
}

export default CommunauteV1