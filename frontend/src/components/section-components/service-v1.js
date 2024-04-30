import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

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
        <div className="row justify-content-center" style={{ backgroundColor: '#047c72', borderTopLeftRadius: '100px', borderBottomLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '100px' }}>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ marginBottom: '30px' }}>
    <div className="ltn__feature-icon">
        <span><i className="flaticon-house" /></span>
    </div>
    <div className="ltn__feature-info" style={{ backgroundColor: 'rgba(255, 255, 255, -1)' }}>
	<h3 style={{ color: '#fff' }}>Property Management</h3>
<p style={{ color: '#fff' }}>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

    </div>
</div>

            </div>
			<div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ marginBottom: '30px' }}>

    <div className="ltn__feature-icon">
        <span><i className="flaticon-house" /></span>
    </div>
    <div className="ltn__feature-info" style={{ backgroundColor: 'rgba(255, 255, 255, -1)' }}>
	<h3 style={{ color: '#fff' }}>Property Management</h3>
<p style={{ color: '#fff' }}>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

    </div>
</div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ marginBottom: '30px' }}>
    <div className="ltn__feature-icon">
        <span><i className="flaticon-house" /></span>
    </div>
    <div className="ltn__feature-info" style={{ backgroundColor: 'rgba(255, 255, 255, -1)' }}>
	<h3 style={{ color: '#fff' }}>Property Management</h3>
<p style={{ color: '#fff' }}>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

    </div>
</div>

            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="ltn__feature-item ltn__feature-item-6 text-center" style={{ marginBottom: '30px' }}>
    <div className="ltn__feature-icon">
        <span><i className="flaticon-house" /></span>
    </div>
    <div className="ltn__feature-info" style={{ backgroundColor: 'rgba(255, 255, 255, -1)' }}>
	<h3 style={{ color: '#fff' }}>Property Management</h3>
<p style={{ color: '#fff' }}>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

    </div>
</div>

            </div>
        </div>
    </div>
</div>



        }
}

export default ServiceV5