export  function setData(serviceName, data){
	window.localStorage.setItem(serviceName, JSON.stringify(data));
}

export   function getData(serviceName){
	var retData = window.localStorage.getItem(serviceName);
	if(retData != null)
		return JSON.parse(retData);
	return  null;
}
 
export function isAuthenticated(){
      let  auth_details  = getData("userDetails");
      if(auth_details)
      {
        return true;
      }else{
        return false;
      }
}

export  function clearSessionData(){
   localStorage.clear();
 }