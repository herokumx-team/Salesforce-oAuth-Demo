/* This is the login component, this will be a button
* that calls the /login URL from express for forwarding into
* the Salesforce oAuth flow.
* Adam Sellers
* asellers@salesforce.com
* 12th April 2018 */

import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, RaisedButton } from 'material-ui';
import axios from 'axios';

// now we build the component
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authInfo: {}
    }
  };

  // function to handle the login click
  handleClick(event) {
    //do nothing for the moment
    console.log('click!');
    const clientId = process.env.REACT_APP_CLIENTID;
    console.log('clientID is: ' + clientId);
    // setup the vars for the auth
    const clientSecret = process.env.REACT_APP_CLIENTSECRET;
    const callbackUrl = process.env.REACT_APP_CALLBACKURL;
    const tokenUrl = 'http://localhost:3001/login';

    // use the vars above to redirect to login service
    axios.get(tokenUrl)
      .then(res => {
        console.log('got something back: ' + JSON.stringify(res));
      });
  }

  // render the component
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login Button" />
            <RaisedButton
              label="Login"
              primary={true}
              style={style}
              onClick={(event) => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
// setup the styles
const style = {
  margin: 15,
  padding: 15
};