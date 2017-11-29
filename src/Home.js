import React, { Component } from 'react';
import Card from './Card';

const logos = [
    'Anheuser-Busch.svg', 
    'coca-cola-seeklogo.com.svg', 
    'Frito-Lay.svg', 
    'General_Mills.svg', 
    'Johnson__and__Johnson.svg', 
    'Kimberly-Clark.svg', 
    'Kraft.svg', 
    'L_Oreal.svg',
    'mccormick-company-seeklogo.com.svg', 
    'Nestle.svg', 
    'P_G.svg', 
    'Topco.svg', 
    'Unilever.svg'
  ]

const total = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]; 

class Logo extends Component {
render () {
    return(
    <div className="home__logo--spacing">
    <img src={`./brand-logo/${this.props.data}`}/>
    </div>
    )
}
}

class Home extends Component {

    render () {
        let logoJSX = logos.map((el)=> {
            return <Logo data={el} />
        })
        let CardJSX = total.map(()=>{
            return <Card />
        })
        return (
            <div className="container">            
                <h4 className="home__mainheader--center">Hello, Welcome to the H Warehouse </h4>
                <p  className="home__jumbotron--copy">
                    We are a global wholesaler based out of Hong Kong with over 20 years of experience in the industry. Our robust catalog of products span home, health, food, and beauty. We have all the brands your customers love packaged in all the ways you want to receive it. Browse our website for the items you have in mind and reach out to us. 
                </p>

                <div className="home__jumbotron--background">
                <h5 className="home__container--Header">Brands we ship</h5>
                <p className="home__brand--copy">
                    We have over 400 brands and over 80,000 unique products from household favorites to specialty finds. Below are just a few of the notable brands we ship. If you don’t see a brand you’re interested in within the catalog, please contact us for more information. 
                </p>
                {logoJSX}
                </div>
            
                <h5 className="home__container--Header">Why order from H Wholesale?</h5>
                
                <div className="row">
                <div className="col s4">
                    <div className="shopping home__mask--background"></div>
                    <p className="home__column--copy"> Guaranteed value in the products you order. We understand the challenges of running a business and we provide the best prices. </p>
                </div>
                <div className="col s4">
                    <div className="handshake home__mask--background "></div>
                    <p className="home__column--copy">With over 80,000 unique products, we offer choice and variety. Let us know if something is not in the catalog, we may still be able to help you. </p>
                </div>
                <div className="col s4">
                    <div className="calculate home__mask--background"></div>
                    <p className="home__column--copy">We have been in the business for over 20 years and you can trust us. We will get your shipment right and it will reach you on time. </p>
                    </div>
                </div>

            <div> 
                <h5 className="home__container--Header"> Frequently Asked Questions</h5>
                {CardJSX}
            </div>
        </div>
        )
    }
}

export default Home;