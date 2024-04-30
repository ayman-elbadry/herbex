import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewsLettre extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

        return (
            <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" style={{ backgroundColor: '#eeeade' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h1 className="section-title">Inscription à la Newsletter</h1>
                                <p>Bienvenue dans Notre Cercle de Bien-être</p>
								<p>Plongez au cœur de HERBEXbio : nouveautés, promotions uniques, et secrets de santé naturelle vous attendent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
   						 <form id="#" method="get" action="#">
     						   <div className="search-container" style={ {width: '100%'}}>
       						     <input type="text" name="search"  placeholder="Search here..." id='txt_abonner' />
         						   <button type="submit" className="centered-button" id='s_abonner'>
									S'abonner
           						 </button>
       							 </div>
   						 </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsLettre;
