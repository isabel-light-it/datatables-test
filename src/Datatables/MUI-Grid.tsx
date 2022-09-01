import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Person } from "../models/Person";

interface Props {
  data: Person[];
}
const MUIGrid = ({ data }: Props) => {
  const rows: GridRowsProp = data.map((person) => {
    return {
      id: person.id,
      name: `${person.firstName} ${person.lastName}`,
      age: person.age,
      visits:person.visits,
      status:person.status
    };
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "id" },
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "age", headerName: "Age", width: 150, editable: true },
    { field: "visits", headerName: "visits", width: 150, editable: true },
    { field: "status", headerName: "status", width: 150, editable: true },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default MUIGrid;
