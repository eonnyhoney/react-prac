import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");

    let data = this.props.data;
    let i = 0;
    let lists = [];
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
