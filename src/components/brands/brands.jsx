import React, { Component } from "react";
import http from "../../servicies/httpService";

class Brands extends Component {
  state = {
    brands: ["All Brands", "Brand 1", "Brand 2", "Brand 3"],
  };

  // async componentDidMount() {
  //   const { data } = await http.get();
  //   const brands = {{id : "", name :"All Brands"} , ...data}
  //   this.setState({ brands });
  // }
  render() {
    const { brands } = this.state;
    const { currentBrand, onBrandClick } = this.props;
    return (
      <ul
        className="list-group"
        style={{
          cursor: "pointer",
        }}
      >
        {brands.map((brand) => (
          <li
            key={brand}
            className={this.formateBrandClass(currentBrand, brand)}
            onClick={() => onBrandClick(brand)}
          >
            {brand}
          </li>
        ))}
      </ul>
    );
  }
  formateBrandClass(currentBrand, Brand) {
    let cls = "list-group-item";
    return (cls += currentBrand === Brand ? " active" : "");
  }
}

export default Brands;
