import React from "react";
import ReactDOM from "react-dom";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { makeData } from "./TanStack/makeData";

// see documentation for supported input formats
const headers = ["first name", "age", "status","visits"];
const persons = makeData(100000  );
const personData = persons.map((person) => [
  `${person.firstName}`,
  `${person.age}`,
  `${person.status}`,
  `${person.visits}`,
]);
const data = [headers, ...personData];
console.log(data)

class PivotTable extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <PivotTableUI
        data={data}
        onChange={(s) => this.setState(s)}
        {...this.state}
      />
    );
  }
}

export default PivotTable;
