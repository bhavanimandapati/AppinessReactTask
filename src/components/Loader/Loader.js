import React, {Component} from 'react';
import { connect } from 'react-redux';



@connect( (store) => {
  return{
    isLoading:store.spinnerReducer.isLoading,
  };
})
class Loader extends Component {
  
 render() {
     return (
      <div>
      { this.props.isLoading && <div className="bgoverlay">
             <div className="spinner"><i className="fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i> </div>
           </div>
       }
      </div>
    );
  }
}

export default  Loader;
