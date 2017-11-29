import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
// class Footer extends Component {
//     render () {
//       return(
//         <div class="row">
//             <div class="col s8">
//                 <p>s12 m6 l3</p></div>
//             <div class="col s4">
//                 <p> H Wholesale Inc.
//                     123 Somewhere Street, HK 892710
//                     +825 5555 5555
//                 </p>
//             </div>
//             <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
//             <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
//         </div>
//       )
//     }
//   }

  class Footer extends Component {
    state = {
      selectedIndex: 0,
    };
  
    select = (index) => this.setState({selectedIndex: index});
  
    render() {
      return (
        <div className="row">
            <div className="col s8">
                <Link to='/'>
                  <p className="footer-menu">
                  HOME
                </p> </Link>
                <Link to='/aboutus'>
                  <p className="footer-menu">
                  ABOUT
                </p> </Link>
                <Link to='/catalogue'>
                  <p className="footer-menu">
                  CATALOGUE
                </p> </Link>
                <Link to='/'>
                  <p className="footer-menu">
                  CONTACT US
                </p> </Link>

            </div>
            <div className="col s4" style={{textAlign: 'right'}}>
                <p> H Wholesale Inc.</p>
                <p>
                    123 Somewhere Street, HK 892710
                </p>
                <p>
                    +825 5555 5555
                </p>
            </div>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </div>
      );
    }
  }
  
export default Footer;
