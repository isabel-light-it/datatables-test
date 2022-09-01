import React, { useState } from "react";
//tables
import AGGrid from "./Datatables/AG-Grid";
import KATable from "./Datatables/KA-Table";
import MUIGrid from "./Datatables/MUI-Grid";
import TanStack from "./Datatables/TanStack/TanStack";
import ReactDOM from "react-dom";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";

import { makeData } from "./utilities/makeData";
import PivotTable from "./Datatables/PivotTable";
import ReactPivotContainer from "./Datatables/ReactPivotContainer";
import ReactDataGridContainer from "./Datatables/ReactDataGrid/ReactDataGridContainer";

function App() {
  const [data, setData] = useState(() => makeData(100000));
  return (
    <div>
      {/* <MUIGrid data={data}/> */}
      {/*  <AGGrid data={data}/> */}
      {/*  <KATable data={data}/> */}
      {/*  <PivotTable/> */}
      {/* <ReactPivotContainer/> */}
      <ReactDataGridContainer data={data}/>
    </div>
  );
}

export default App;
