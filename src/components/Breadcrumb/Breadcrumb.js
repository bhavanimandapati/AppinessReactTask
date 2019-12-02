import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import routes from '../../routes';

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
   const paths = [];
  /*if (pathname === '/dashboard'){
           const paths = ['/'];
           return paths;
  }else if(pathname === '/dashboard/createuser' || pathname === '/dashboard/edituser'){
           paths.push("/");
  }else{
           const paths = [];
  } */

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const BreadcrumbsItem = ({...rest, match}) => {
  const routeName = findRouteName(match.url);
 /* const logedinuserrole = util.getData("userDetails").appRoleClientCompanies[0].role.name;*/
  if (routeName) {
    return (
      match.isExact ?
        (
          <BreadcrumbItem active>{routeName}</BreadcrumbItem>
        ) :
        (
          <BreadcrumbItem>
            <Link to={match.url} className="home_color">
              <i className="fa fa-home"></i>}{routeName}
            </Link>
          </BreadcrumbItem>
        )
    );
  }
  return null;
};


const Breadcrumbs = ({...rest, location : {pathname}, match}) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem}/>);
  const itemsLength = (items.length)-1;
  return (
    <Breadcrumb className="m-0">
       {items}
    </Breadcrumb>
  );
};

export default props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);
