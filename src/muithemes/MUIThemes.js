import {orange500,red500,white,black} from 'material-ui/styles/colors';
  
export default {
 styles : {
				radioButton: {
					marginBottom: 16,
					color:orange500,
				},
				radioButtonLabel: {
					fontSize: '14px',
					fontWeight: 'bold !important'
				},
				radioButtonLabelColor: 	{
						fill: '#FE6F08'
					},
					radioButtonUnchecked:
					{ fill: '#7B7D7F' },
		    underlineStyle: {
	           borderColor: orange500,
	        },
	        floatingLabelFocusStyle: {
	           color: orange500,
	           fontSize: "17px"
	        }, 
	        floatingLabelStyle:{
	        	color: black,
	        	fontSize: "15px"
	        },
	        togglestyle: {
		      block: {
		        maxWidth: 250,
		      },
		      toggle: {
		        marginBottom: 16,
					},
					toggleCeridian: {
						marginBottom: 16,
						cursor: 'not-allowed'
					},
				
		      thumbOff: {
		        backgroundColor: '#ffcccc',
		      },
		      trackOff: {
		        backgroundColor: '#ff9d9d',
		      },
		      thumbSwitched: {
		        backgroundColor: orange500,
					},
				   trackSwitched: {
		        backgroundColor: orange500,
		      },
		      labelStyle: {
		        color: orange500,
		      }
          },
           
           tabTemplateStyle:{
						backgroundColor: '#FFFFFF',
           	color:white
           },
          errormsg:{
          	color: red500,
          },
           headline: {
                    fontSize: 24,
                    paddingTop: 16,
                    marginBottom: 12,
                    fontWeight: 400,
                    fontColor:"#FF8100"
                  },
           tabItemContainer: {
                    background: 'none'
           },
           inkBarStyle:{
              color:"#000000"
           },
	     
          tabItemContainerStyle:{
            backgroundColor: '#FFFFFF',
           },
           containerStyle:{
           	height:"600px",
           },
           containerMediumStyle:{
           		height:"350px",
					 },
					 containerSmallStyle:{
						height:"150px",
				}
        
		 },
		 succNotification:{
			padding: "5px",
			color: "#119411",
		 },
		 succnotification:{
			padding: "5px",
			color: "#119411",
			fontSize: "20px",
			paddingLeft:"2rem"
		 },
		 backgroundLogo:{
			backgroundColor:  "linear-gradient(to right, #ff6700 16%,#ff9900 100%)"
		}

 }