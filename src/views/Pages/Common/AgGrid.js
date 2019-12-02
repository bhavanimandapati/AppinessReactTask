import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

class AgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {
        animateRows: true,
        groupMultiAutoColumn: true,
        rowClass: "",
        getRowClass: function(params) {
          return "grid-alternate";
        }
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      columnDefs: nextProps.gridData != null && nextProps.gridData.columnDefs,
      rowData: nextProps.gridData != null && nextProps.gridData.rowData
    });
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    };
  };

  render() {
    return (
      <div className="ag-theme-material box-glow" style={{ height: "600px" }}>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}
          floatingFilter={false}
          suppressRowTransform={true}
          enableColResize={false}
          gridOptions={this.state.gridOptions}
          enableSorting={true}
          autof
          suppressMovableColumns={true}
        ></AgGridReact>
      </div>
    );
  }
}

export default AgGrid;
