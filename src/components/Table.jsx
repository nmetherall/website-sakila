import React, { Component } from "react";
import "../App.css";
import testData from "../testData.json";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: testData
    };
    this.getRequest = this.getRequest.bind(this);
  }

  getRequest() {
    console.log("anything?");

    fetch("http://localhost:5000/api_v2/film")
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        this.setState({ info: data });
      });
  }

  render() {
    const info = this.state.info;
    const columnNames = Object.keys(info[1]);
    return (
      <div>
        <button onClick={this.getRequest}>Button</button>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          {columnNames.map((el, index) => {
            return (
              <input
                style={{ height: 20.5, width: 145, backgroundColor: "red" }}
                key={`columns ${index}`}
                type="text"
                value={el}
                readOnly
              />
            );
          })}
        </div>
        {info.map((el, index) => {
          return <Row key={`${index}`} rowValues={Object.values(el)} />;
        })}
      </div>
    );
  }
}
//

//
function Row(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      {props.rowValues.map((el, index) => {
        return <input key={`${el} ${index}`} type="text" defaultValue={el} />;
      })}
    </div>
  );
}

export default Table;
