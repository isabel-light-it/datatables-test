import DataGrid from "react-data-grid";
import React, { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import { groupBy as rowGrouper } from "lodash";
import Checkbox from "../../Checkbox/Checkbox";

interface Props {
  data: Person[];
}

const ReactDataGridContainer = ({ data }: Props) => {
  const columns = [
    { key: "id", name: "ID" },
    { key: "firstName", name: "First Name" },
    { key: "age", name: "age" },
    { key: "status", name: "status" },
  ];

  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(() => new Set<unknown>([]));

  const [groups, setGroups] = useState([""]);

  const updateGroupData = (e: any) => {
    if (e.target.checked) {
      setGroups([...groups, e.target.dataset.id]);
    } else {
      setGroups(groups.filter((group) => group !== e.target.dataset.id));
    }
  };


  return (
    <>
      <Checkbox
        label={"Status"}
        onChange={updateGroupData}
        columnKey={"status"}
      />
      <Checkbox label={"Age"} onChange={updateGroupData} columnKey={"age"} />
      <Checkbox
        label={"firstName"}
        onChange={updateGroupData}
        columnKey={"firstName"}
      />
      <DataGrid
        columns={columns}
        rows={data}
        groupBy={groups}
        rowGrouper={rowGrouper}
        expandedGroupIds={expandedGroupIds}
        onExpandedGroupIdsChange={setExpandedGroupIds}
        style={{'height':'100vh'}}
      />
    </>
  );
};

export default ReactDataGridContainer;

/*  */
