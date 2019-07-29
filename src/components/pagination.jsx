import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropsTypes from 'prop-types';

class Pagination extends Component {
    state = {  }
    handlePage = (page) => {
        this.props.onPageChange(page);
    }
    getActivePageClass = (page) => {
        return (this.props.currentPage === page) ? "page-item active" : "page-item"
    }
    render() {
        const {count, pageSize} = this.props;
        const pageCount = Math.ceil(count/ pageSize);
        const pages = _.range(1, pageCount + 1);
        if (pageCount === 1) {
            return null;
        }
        
        return ( 
            <nav aria-label="Page navigation example">
            <ul className="pagination">
            {pages.map(pageNumber => (
                <li key={pageNumber}
                    onClick={() => {
                    this.handlePage(pageNumber);
                }} className={this.getActivePageClass(pageNumber)}><span className="page-link" href="#">{pageNumber}</span></li>

            ))}
            </ul>
            </nav>
         );
    }
}
Pagination.propTypes = {
    count: PropsTypes.number,
    pageSize: PropsTypes.number
}

const mapDispatchToProps = (dispatch) => {
   return {
       onPageChange: (pageNumber) => dispatch({type: 'PAGE_UPDATED', value: pageNumber})
   }
}
const mapStateToProps = (state) => {
    return {
        currentPage: state.pageNumber
    }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);