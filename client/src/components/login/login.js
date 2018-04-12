/* This is the login component, this will be a button
* that calls the /login URL from express for forwarding into
* the Salesforce oAuth flow.
* Adam Sellers
* asellers@salesforce.com
* 12th April 2018 */

import { MuiThemeProvider, AppBar, RaisedButton, TextField } from 'material-ui';

// now we build the component
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authInfo: {}
    }
  };

  // render the component
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            label="Login"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
// setup the styles
const style = {
  margin: 15
};