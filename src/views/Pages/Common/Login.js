import React, { Component } from "react";
import history from "../../../router/history";
import logo from "../../../images/appinesslogo.png";
import userLogo from "../../../images/userIcon.png";
import {
  Container,
  Row,
  Col,
  Card,
  Form
} from "reactstrap";
import * as util from "../../../util/appiness-util";
import * as _ from "lodash";
import routes from "../../../constants/Routes";
import TextField from "material-ui/TextField";
import muithemes from "../../../muithemes/MUIThemes";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email:"",password:"",error:""};
    this.style = {
      width: 200
    };
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      ele.classList.add("available");
      setTimeout(() => {
      }, 2000);
    }
  }
 
  handleChange(e) {
    this.state.error = "";
    const value = e.target.value;
    this.setState({ [e.target.name]: value.trim() });
  }

  authenticateUser = () => {
    if (this.state.email.toLowerCase() === "hruday@gmail.com" && this.state.password.toLowerCase() === "hruday123" ) {
          util.setData("userDetails",this.state)
          this.props.history.push(routes.DASHBOARD.path);
    } else {
      this.setState({
        error: "Incorrect username or password !"
      });
    }
  };
 

  getMandatoryDetails = value => {
    return (
      <div>
        <span className="mandatory">*</span> <span>{value}</span>
      </div>
    );
  };

  render() {
    if (util.isAuthenticated()) {
      history.push(routes.DASHBOARD.path);
    }

    return (
      <div className="app_background">
        <Container className="container-appinesslogo">
          <Card className="card-logo">
            <Row className="sidebar-login">
              <Col md="6" sm="6" xs="6" className="background-logo">
                <Row>
                  <Col xs="3" md="3"></Col>
                  <Col xs="3" md="3">
                    <img src={logo} id="appiness-logo" />
                  </Col>
                </Row>
              </Col>

              <Col md="5" sm="5" xs="5" id="margin-left">
                <br />
                <br />
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    this.authenticateUser();
                  }}
                >
                  <Row>
                    <Col md="3" sm="3" xs="3"></Col>
                    <Col md="2" sm="2" xs="2">
                      <img src={userLogo} id="imageadjustment" />
                    </Col>
                    <Col md="7" sm="7" xs="7">
                      <h3 className="fontOrangeColor">
                        User Login
                      </h3>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <TextField
                      floatingLabelText={this.getMandatoryDetails("Email")}
                      autoComplete="off"
                      floatingLabelStyle={muithemes.styles.floatingLabelStyle}
                      underlineFocusStyle={muithemes.styles.underlineStyle}
                      floatingLabelFocusStyle={
                        muithemes.styles.floatingLabelFocusStyle
                      }
                      fullWidth={true}
                      hintText="example@gmail.com"
                      maxLength="100"
                      name = "email"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this)}
                      autoFocus={1 == 1}
                    />
                  </Row>
                  <Row>
                    <TextField
                      floatingLabelText={this.getMandatoryDetails("Password")}
                      autoComplete="off"
                      floatingLabelStyle={muithemes.styles.floatingLabelStyle}
                      underlineFocusStyle={muithemes.styles.underlineStyle}
                      floatingLabelFocusStyle={
                        muithemes.styles.floatingLabelFocusStyle
                      }
                      name= "password"
                      fullWidth={true}
                      hintText="**********"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this)}
                    />
                  </Row>
                 
                  <Row>
                    {this.state.error!="" && (
                      <div style={muithemes.styles.errormsg}>
                        {" "}
                        {this.state.error}
                      </div>
                    )}
                  </Row>
                  <br/>
                  <Row>
                    <Col xs="8">
                      <button type="submit" className="btn-orange">
                        Login
                      </button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Login;
