import React, { Component } from 'react';
import { RaisedButton} from 'material-ui';

import './About.css'

class About extends Component {
    render() {
        return(
            <div className="container">
                <h2 className="about__main--header">The HNE Group Promise</h2>
                <p className="about-description">
                    HNE Group Limited was established in 2017 to provide clearance, development and distribution of quality brands to meet the needs of suppliers and consumers. Our understanding of the marketplace makes HNE Group Limited the number one name that comes to mind for multinational companies wanting a presence in Asia. We import and distribute for dozens of big name brands. Our product range includes the world’s biggest brands like Colgate, P &amp; G, Unilever, Cussons, and GSK, just to name a few.
                </p>
                <RaisedButton label="Contact Us" style={{margin: "0 auto", width: "220px", borderRadius: '8px', display: 'block'}} buttonStyle={{height: '100%', borderRadius: '8px'}}/>

            <div className="row"> 
                <div className="col s4 about__mask--bg img-sale"></div>
                <div className="col s8">
                    Our sales team consists of enthusiastic staff, all experienced in sourcing the best deals on popular branded and non-branded consumer products.
                </div>
                <div className="col s4 about__mask--bg img-warehouse"></div>
                <div className="col s8 ">
                    Our warehouse staff are experienced in order picking and stock consolidation providing efficient and speedy delivery. 
                </div>
            </div>
            </div>

        );
    }

}

export default About; 