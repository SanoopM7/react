import React, { Component } from "react";
import "./Table.css";

//CLASS COMPONENT

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.input.map((input, index) => (
            <tr key={index + input.firstName}>
              <td>{index + 1}</td>
              <td>{input.firstName}</td>
              <td>{input.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
