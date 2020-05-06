import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { productsCount, pageSize, onPageChange, currentPage } = this.props;
    const pagesCount = productsCount / pageSize;
    const pages = _.range(1, pagesCount + 1);
    if (pagesCount <= 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className={this.currentPageClass(page)}>
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}{" "}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  currentPageClass = (page) => {
    let cls = "page-item";
    return (cls += this.props.currentPage === page ? " active" : "");
  };
}

export default Pagination;
