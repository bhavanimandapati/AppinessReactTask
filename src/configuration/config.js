  
//prod
  
    //  export const SERVICE_PATH =  "https://sso-service.pushinnovationlive.com/analytics" ;
    // export const SERVICE_SSO_PATH = "https://sso-service.pushinnovationlive.com";
    // export const SERVICE_ORDER_PATH = "https://sso-service.pushinnovationlive.com";

 
 

//dev

  // export const SERVICE_PATH =  "http://sso-service-dev.us-west-1.elasticbeanstalk.com/analytics" ;
  // export const SERVICE_SSO_PATH = "http://sso-service-dev.us-west-1.elasticbeanstalk.com";
  // export const SERVICE_ORDER_PATH = "http://sso-service-dev.us-west-1.elasticbeanstalk.com";
  

//export const SERVICE_PATH = "http://sso-service-env.us-west-1.elasticbeanstalk.com";
 

export const SERVICE_PATH ="http://localhost:5757/analytics";
export const SERVICE_SSO_PATH = "http://localhost:5757";
export const SERVICE_ORDER_PATH = "http://localhost:5757";



 //export const SERVICE_PATH ="http://192.168.203.102:5757";

 

 
 

export const GET_LOCATION_API_PEFIX='https://ipapi.co/';
export const USER_API_PREFIX = '/userservice/api/user';
// export const CLIENT_API_PREFIX = '/api/client';
export const ROLE_API_PREFIX = '/userservice/api/role';
//export const CREATE_NEWORDER_API_PREFIX = '/api/order';
 export const CREATE_NEWORDER_API_PREFIX = '';
export const PERMISSION_API_PREFIX = '/userservice/api/permission';
export const PERMISSIONCATEGORY_API_PREFIX = '/userservice/api/permissioncategory';
export const AGENTGROUP_API_PREFIX = '/userservice/api/agentgroup';
 //export const ORDER_API_PREFIX = '';
 export const ORDER_API_PREFIX = '/api/order';
 //export const REPORTS_API_PREFIX = '';
 export const REPORTS_API_PREFIX = '/reports';
// export const REPORTS_API_PREFIXFOR_CALLDATA = '/api/order';
export const ROLELEVEL_API_PREFIX = '/api/order/rolelevel';
export const UNSECURED_API_PREFIX = '/userservice/api/unsecured';
export const UNSECURED_PREFIX = '/api/unsecured';
export const RESOURCE_API_PREFIX = '/userservice/api/application';
export const USER_INFO='/userservice/api/user/getuserinfo';
export const AUTH_API_PREFIX = '/api/auth';
export const SAML_API = "/api/saml/SingleSignOnService";
export const LIMELIGHT_API = "/api/saml/SingleSignOnService";
export const KONNEKTIVE_API = "/api/saml/SingleSignOnService";
export const MERCHANT_PREFIX = "/merchant";
export const AGENT_PROGRAM = "/api/order/agentprogram";
export const SSO_API_PREFIX = '/api/user';
export const CLIENT_API_PREFIX = '/userservice/api/clientcompany';
export const APPLICATION_PREFIX = "/userservice/api/application";
 
  export const SSO_PREFIX = "http://localhost:9000/#";
  //export const SSO_PREFIX="http://ec2-13-56-84-83.us-west-1.compute.amazonaws.com/ssoui/#"
  //dev
 // export const SSO_PREFIX="http://sso-dev.pushinnovationlive.com/#";
 //prod
   // export const SSO_PREFIX ="https://sso.pushinnovationlive.com/#";

export const LOGOUT = "/logout";
export const LOGIN = "/login"