// import React, { Component } from 'react';
// import {connect} from "react-redux";
// import { propTypes } from 'prop-types';
// import { AutosuggestElement } from "../../ui-kit";
// import { getProductType } from "../../actions";

// class DashboardFilter extends Component{
//         constructor(props){
//             super(props);
//             this.state={};
//         }


//     render(){
//         const {product}=this.props;

//         return(
//             <div className="left-filters"> 
//             <AutosuggestElement
//                 sugestionValue={products}
//                 placeholder="select Product"
//                 onChange={this.handlechange}
//             />

//             <button
//                 type="button"
//                 className="btn btn-info"
//                 onClick={this.handleApplyClick}
//             >
//                 <i className="fa fa-search" />
//             </button>
//         </div>

//         );
//     }

//     componentDidMount=()=>{
//         this.props.getProductType();
//     };

//     handlechange=filterData=>{
//         this.setState({filterData});
//     };

//     handleApplyClick=()=>{
//         const {filterData}=this.state;  

//         if(
//             filterData &&
//             filterData.suggestion.length !==0 &&
//             filterData.suggestion[0].name
//         )
//         {
//         this.props.handleApplyClick(filterData.suggestion[0].name);
//         }
//     };
// }

//  DashboardFilter.propTypes={
//      handleApplyClick: PropTypes.func.isRequired,
//      getProductType: PropTypes.func.isRequired,
//      Products:PropTypes.any
//  };

//  const mapStateToProps=(state)=>({
//      products: state.productdata.products
//  });
 
//  const mapDispatchToPrps={
//      getProductType
//  };
//  export default connect(mapDispatchToPrps,mapDispatchToPrps)(DashboardFilter);