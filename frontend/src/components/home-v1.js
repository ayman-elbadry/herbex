import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Aboutv1 from './section-components/about-v1';
import ServiceV1 from './section-components/service-v1';
import Produit from './section-components/produits';
import Aboutv2 from './section-components/about-v2';
import NewsLettre from './section-components/newslettre';
import Testimonial from './section-components/testimonial-v1';
import CommunauteV1 from './section-components/communaute';
import Footer from './global-components/footer';



const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Aboutv1 />
        <ServiceV1 />
        <Produit />
        <Testimonial />
        <Aboutv2 />
        <NewsLettre />
        <CommunauteV1 />
        <Footer />
    </div>
}

export default Home_V1

