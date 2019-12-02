import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem} from 'reactstrap';
import classNames from 'classnames';
import adminnav from './_adminnav';

class Sidebar extends Component {
   
  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }
 

  activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';

  }
   
 callUrl=(url)=>{
  this.props.dispatch({type:'STORE_USERSEARCH_DATA',payload:null}); 
  this.props.dispatch({type:'EMPTY_ORDER_SEARCH_DATA'}); 
     if(url.length>4){
      let httpString = url.slice(0,4);
      if(httpString == "http"){
        window.location.href=url;
      }
     }
  }
 
  render() {

    const props = this.props;
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;

    // simple wrapper for nav-title item
    const wrapper = item => { return (item.wrapper && item.wrapper.element ? (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)): item.name ) };

    // nav list section title
    const title =  (title, key) => {
      const classes = classNames( "nav-title", title.class);
      return (<li key={key} className={ classes }>{wrapper(title)} </li>);
    };

    // nav list divider
    const divider = (divider, key) => (<li key={key} className="divider"></li>);

    // nav item with nav link
     const navItem = (item, key) => {
      const classes = classNames( item.class );
      
      return (
        <NavItem key={key} className="text-center">
          <div className="vrnav">
                 {navlinkImg(item.name,item)} 
           </div>
        </NavItem>
      )
    };
    
    // nav dropdown
    const navDropdown = (item, key) => {
      return (
        <li key={key} className={activeRoute(item.url, props)}>
          <a className="nav-link nav-dropdown-toggle text-center " href="#" onClick={handleClick.bind(this)}><i className={item.icon}></i>
         <div> {navlinkImg(item.name)}  </div>
          </a>
          <ul className="nav-dropdown-items text-center">
           <div>   {navChildren(item.children)} </div>
          </ul>
        </li>)
    };
     const navlinkImg = (name,item)=>{
      let activeClassName = "active"
       const variant = classNames( "nav-link", item.variant ? `nav-link-${item.variant}` : "");
        return <NavLink to={item.url}  className={variant}  activeClassName={activeClassName} onClick={()=>this.callUrl(item.url)}><i className="icon-chart icons"></i>  <p className="mb-0">{name}</p> </NavLink>
     } 

    // nav link
    const navLink = (item, idx) =>
      item.title ? title(item, idx) :
      item.divider ? divider(item, idx) :
      item.children ? navDropdown(item, idx)
                    : navItem(item, idx) ;

    // nav list
    const navList = () => {
        return adminnav.items.map( (adminitem, index) => navLink(adminitem, index) );
    };

     const navChildren = (items) => {
      return items.map( (item, index) => navLink(item, index) );
    };

    // sidebar-nav root
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <Nav className="side-nav-effect">
            {navList()}
          </Nav>
        </nav>
      </div>
    )
  }
}

export default Sidebar;