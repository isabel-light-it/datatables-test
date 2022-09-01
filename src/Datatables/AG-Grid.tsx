import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { AgGridReact } from "ag-grid-react";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Person } from "../models/Person";

interface Props {
  data: Person[];
}
const AGGrid = ({ data }: Props) => {
  const gridRef = useRef(null); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(data); // Set rowData to Array of Objects, one Object per Row
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: "firstName", filter: "agTextColumnFilter", editable: true },
    { field: "lastName", filter: "agTextColumnFilter", editable: true },
    { field: "age", filter: "agNumberColumnFilter", editable: true },
    { field: "visits", filter: "agNumberColumnFilter", editable: true },
    { field: "status", filter: "agTextColumnFilter" },
  ]);
  // DefaultColDef sets props common to all Columns
  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  const cellClickedListener = useCallback((event: any) => {
    /*   console.log("cellClicked", event); */
  }, []);

  const onGridReady = ({ api }: any) => {
    console.log(api);
    api.sizeColumnsToFit();
  };

  const onRowValueChanged = (event: any) => {
    /* call to API with data (event.data)*/
  };
  return (
    <div className="ag-theme-alpine" style={{ width: "80%", height: 500 }}>
      <AgGridReact
        ref={gridRef} // Ref for accessing Grid's API
        rowData={rowData} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        editType={"fullRow"}
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        onGridReady={onGridReady}
        onRowValueChanged={onRowValueChanged}
      />
    </div>
  );
};

export default AGGrid;
