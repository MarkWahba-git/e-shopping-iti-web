import React, { Component } from "react";
import axios from "axios";

class Categories extends Component {
  state = {
    categories: ["All Categories", "Odd Categories", "Even categories"],
  };

  // async componentDidMount() {
  //   const { categories } = await axios.get();
  //   this.setState({ categories });
  // }
  render() {
    const { categories } = this.state;
    const { onCategoryClick, currentCategory } = this.props;
    return (
      <ul
        className="list-group"
        style={{
          cursor: "pointer",
        }}
      >
        {categories.map((category) => (
          <li
            key={category}
            className={this.formateCategoryClass(currentCategory, category)}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    );
  }
  formateCategoryClass(currentCategory, category) {
    let cls = "list-group-item";
    return (cls += currentCategory === category ? " active" : "");
  }
}

export default Categories;
