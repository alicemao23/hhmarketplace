import React, { Component } from 'react';
import {AppBar, Tabs, Tab, RaisedButton, IconButton} from 'material-ui';
import { Link } from 'react-router-dom';

const tabStyle = {
    margin: 'auto 24px', 
    flex: '1 1 0', 
    fontSize: '18px', 
    letterSpacing: '1px'
  }
  
const NavHeader = () => {
    return <AppBar title="Wholesale" iconElementLeft={<IconButton><img src='./H.svg'/></IconButton>}>
          <Tabs style={{flex: "1 1 0"}} inkBarStyle={{display: 'none'}} tabItemContainerStyle={{height: '100%'}}> 
              <Tab label="Home" style={tabStyle}/> 
              <Tab label="About" style={tabStyle}/> 
              <Tab label="Catalogue" style={tabStyle}/> 
          </Tabs>
          <RaisedButton label="Contact Us" style={{margin: "10px 24px", width: "220px", borderRadius: '8px'}} buttonStyle={{height: '100%', borderRadius: '8px'}}/>
        </AppBar> 
}

export default NavHeader;