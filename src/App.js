import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/Table/Table";

//CLASS COMPONENT

class App_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
    };
  }
  handleAdd = (data) => {
    this.setState({
      inputs: [...this.state.inputs, data],
    });
  };

  handleEdit = (data, index) => {
    let newData = this.state.inputs.map((item, i) => {
      if (index === i) {
        return data;
      } else {
        return item;
      }
    });
    this.setState({
      inputs: newData,
    });
  };

  handleRemove = (count) => {
    let newData = this.state.inputs.filter((item, index) => index !== count);
    this.setState({
      inputs: newData,
    });
  };

  render() {
    return (
      <div className="main">
        {this.state.inputs.map((item, index) => (
          <Form
            key={index + item.firstName}
            handleAdd={this.handleAdd}
            index={index}
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove}
            button="Edit"
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))}
        <Form
          handleAdd={this.handleAdd}
          button="Add"
          firstName=""
          lastName=""
        />
        <Table input={this.state.inputs} />
      </div>
    );
  }
}

//FUNCTIONAL COMPONENT

function App() {
  const [inputs, setInputs] = useState([]);

  const handleAdd = (data) => {
    setInputs([...inputs, data]);
  };

  const handleEdit = (data, index) => {
    let newData = inputs.map((item, i) => {
      if (index === i) {
        return data;
      } else {
        return item;
      }
    });
    setInputs(newData);
  };

  const handleRemove = (count) => {
    console.log("index", count);
    let newData = inputs.filter((item, index) => index !== count);
    setInputs(newData);
  };

  return (
    <div className="main">
      {inputs.map((item, index) => (
        <Form
          key={index + item.firstName}
          handleAdd={handleAdd}
          index={index}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          button="Edit"
          firstName={item.firstName}
          lastName={item.lastName}
        />
      ))}
      <Form handleAdd={handleAdd} button="Add" firstName="" lastName="" />
      <Table input={inputs} />
    </div>
  );
}

export default App_1;
