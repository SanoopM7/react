import { useState } from "react";
import React, { Component } from "react";
import "./Form.css";

//CLASS COMPONENT

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      firstNameChange: "",
      lastNameChange: "",
    };
  }

  handleChange_1 = (event) => {
    this.setState({
      ...this.state,
      firstName: event.target.value,
      firstNameChange: "y",
    });
  };
  handleChange_2 = (event) => {
    this.setState({
      ...this.state,
      lastName: event.target.value,
      lastNameChange: "y",
    });
  };
  updateData = (event) => {
    this.props.handleAdd({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  editData = (event) => {
    this.props.handleEdit(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
      this.props.index
    );
  };
  removeData = (event) => {
    this.props.handleRemove(this.props.index);
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={this.handleChange_1}
          value={this.state.firstName}
        ></input>
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={this.handleChange_2}
          value={this.state.lastName}
        ></input>
        {this.props.button === "Add" ? (
          <button
            disabled={!this.state.firstName || !this.state.lastName}
            onClick={() => this.updateData()}
          >
            {this.props.button}
          </button>
        ) : (
          <>
            <button
              disabled={!this.state.firstName || !this.state.lastName}
              onClick={this.editData}
            >
              Update
            </button>
            <button
              //   disabled={!this.state.firstName || !this.state.lastName}
              onClick={this.removeData}
            >
              Remove
            </button>
          </>
        )}
      </div>
    );
  }
}

//FUNCTIONAL COMPONENT

function Form_1(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  function handleChange_1(event) {
    setFirstName(event.target.value);
  }

  const [lastName, setLastName] = useState(props.lastName);

  function handleChange_2(event) {
    setLastName(event.target.value);
  }

  function updateData() {
    props.handleAdd({ firstName, lastName });
    setFirstName("");
    setLastName("");
  }

  function editData() {
    props.handleEdit({ firstName, lastName }, props.index);
  }
  function removeData() {
    props.handleRemove(props.index);
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={handleChange_1}
        value={firstName}
      ></input>
      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={handleChange_2}
        value={lastName}
      ></input>
      {props.button === "Add" ? (
        <button onClick={updateData}>{props.button}</button>
      ) : (
        <>
          <button onClick={editData}>{props.button}</button>
          <button onClick={removeData}>Remove</button>
        </>
      )}
    </div>
  );
}

export default Form;
