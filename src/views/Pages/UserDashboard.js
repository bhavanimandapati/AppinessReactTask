import React, { Component } from "react";
import { connect } from 'react-redux';
import AgGrid from '../Pages/Common/AgGrid';
import * as _ from 'lodash';
import {Form } from "reactstrap";
 
const styles = {
  customWidth: {
    width: 90,
  },
};
var BS = require('react-bootstrap');
@connect((store) => {
  return {
    userDetails:store.userDetailsReducer.userDetails
  };
})

class UserDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {columnDefs:[],rowData:{user:[]}}
  }

  componentDidMount(){
    this.state.rowData = this.props.userDetails!=undefined?(this.props.userDetails):{user:[]}
    this._columns();
}
_columns = () => {
  var columns = [
    { field: 'id', headerClass: 'gridHeader',   headerName: 'Id', floatingFilterComponentParams: { suppressFilterButton: true } },
    { field: 'name', headerClass: 'gridHeader' ,   cellStyle: { fontWeight: "bold" }, headerName: 'Name', floatingFilterComponentParams: { suppressFilterButton: true } },
    { field: 'age', headerClass: 'gridHeader',  cellStyle: { fontWeight: "bold" }, headerName: 'Age', floatingFilterComponentParams: { suppressFilterButton: true } },
    { field: 'gender', headerClass: 'gridHeader',   cellStyle: { fontWeight: "bold" }, headerName: 'Gender', floatingFilterComponentParams: { suppressFilterButton: true } },
    { field: 'email', headerClass: 'gridHeader',   headerName: 'Email', floatingFilterComponentParams: { suppressFilterButton: true } },
    { field: 'phoneNo', headerClass: 'gridHeader',   headerName: 'Phone Number', floatingFilterComponentParams: { suppressFilterButton: true } },
     
  ];
  this.setState({ columnDefs: columns,rowData:this.state.rowData.user})
}
   
  
  render() {

    return (
      <div className="animated fadeIn">

        <Form >

        <AgGrid gridData={this.state}/>

          
        </Form>
      </div>
    )
  }
}

export default UserDashboard;

 