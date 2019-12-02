import React, { Component } from "react";
import { connect } from "react-redux";
import * as util from "../util/appiness-util";
import history from "../router/history";
import { Container } from "reactstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Aside from "../components/Aside/";
import UserDashboard from "../views/Pages/UserDashboard";
import routes from "../constants/Routes";
import appiness from "../images/appinesslogo.png";
import {Dropdown,DropdownMenu, DropdownItem, Nav,  NavItem, DropdownToggle,Breadcrumb} from 'reactstrap';
 

@connect(store => {
  return {};
})
class Home extends Component {
 constructor(props){
   super(props);
    this.state= {dropdownOpen: false,}
 }
  componentDidMount(){
    this.applicationLevelSpinner();
  }
  applicationLevelSpinner = () => {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {}, 2000);
      }
    });
  };
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  componentDidMount() {
    this.applicationLevelSpinner();
  }

  toggle = ()=> {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logout = ()=>{
    util.clearSessionData();
    history.push(routes.LOGIN.path);
  }

  render() {
    if (!util.isAuthenticated()) {
      util.clearSessionData();
      history.push(routes.LOGIN.path);
      return <div></div>;
    } else {
      return (
        <div className="app">
          <header className="app-header navbar">
            <span className="navbar-brand pl-0">
              <img src={appiness} />
            </span>

            
            <Nav className="ml-auto" navbar>
              <NavItem className="mright-20">Hyderabad</NavItem>
              <NavItem>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="dropdown" className="mdm">
              <DropdownToggle className="nav-link dropdown-toggle menu-ellipsis shadow-none" id="dropdowns">
              <img src={"/img/user.png"} className="img-avatar" /> :
                <span className="d-md-down-none" style={{ color: "white" }}>
                  {" "}
                  Bhavani M
                </span>
                <i className="fas fa-ellipsis-v ml-3"></i>
              </DropdownToggle>

               <DropdownMenu right className="side-nav-effect">
                
                <DropdownItem onClick={this.logout}><i className="icon-logout icons"></i>Logout</DropdownItem>
                
              </DropdownMenu>
            </Dropdown>
          </NavItem>
            </Nav>
          </header>
          <div className="app-body">
            <Sidebar {...this.props} />
            <main className="main">
              <Container fluid>
                <div className="">
                <Breadcrumb className="m-0">
                   Dashborad
                  </Breadcrumb>
                </div>
               
                <UserDashboard />
              </Container>
            </main>
            <Aside />
          </div>
        </div>
      );
    }
  }
}

export default Home;
