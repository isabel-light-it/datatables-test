import "ka-table/style.css";
import React, { useState, useEffect } from "react";

import { ITableProps, kaReducer, Table } from "ka-table";
import {
  DataType,
  EditingMode,
  FilteringMode,
  SortingMode,
} from "ka-table/enums";
import { DispatchFunc } from "ka-table/types";
import Checkbox from "../Checkbox/Checkbox";
import { Group } from "ka-table/models";
import { Person } from "../models/Person";


interface Props {
  data: Person[];
}

const KATable = ({data}:Props) => {


  // initial value of the *props
  const tablePropsInit: ITableProps = {
    columns: [
      { key: "id", title: "id", dataType: DataType.String },
      { key: "firstName", title: "Name", dataType: DataType.String },
      { key: "age", title: "Age", dataType: DataType.Number },
      { key: "status", title: "Status", dataType: DataType.String },
      { key: "visits", title: "Visits", dataType: DataType.Number },
    ],
    data: data,
    editingMode: EditingMode.Cell,
    rowKeyField: "id",
    sortingMode: SortingMode.Single,
    columnReordering: true,
    groups: undefined,
    filteringMode: FilteringMode.HeaderFilter,
  };

  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const dispatch: DispatchFunc = (action) => {
    // dispatch has an *action as an argument
    // *kaReducer returns new *props according to previous state and *action, and saves new props to the state
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };

  const updateTable = (checked: boolean, groupName: string) => {
    const currentGroups = tableProps.groups;
    let updatedGroups: Group[] | undefined;
    if (checked) updatedGroups = addGroupToArray(currentGroups, groupName);
    else updatedGroups = removeGroupFromArray(currentGroups, groupName);
    changeTableProps({ ...tableProps, groups: updatedGroups });
  };

  const addGroupToArray = (groups: Group[] | undefined, groupName: string) => {
    if (groups) return [...groups, { columnKey: groupName }];
    else return [{ columnKey: groupName }];
  };
  const removeGroupFromArray = (
    groups: Group[] | undefined,
    groupName: string
  ) => {
    let filtered = groups?.filter((group) => group.columnKey !== groupName);
    if (filtered!.length > 0) return filtered;
    else return undefined;
  };

  const groupData = (e: any) => {
    updateTable(e.target.checked, e.target.dataset.id);
  };
  return (
    <>
      <Checkbox label={"Status"} onChange={groupData} columnKey={"status"} />
      <Checkbox label={"Age"} onChange={groupData} columnKey={"age"} />
      <Checkbox label={"Visits"} onChange={groupData} columnKey={"visits"} />
      <Table
        {...tableProps} // ka-table UI is rendered according to props
        dispatch={dispatch} // dispatch is required for obtain new actions from the UI
        childComponents={{
          headFilterButton: {
            content: ({ column: { key } }) => key === "name" && <></>,
          },
          headCellContent: {
            content: ({ column }) => {
              return (
                <>
                  <img
                    style={{ cursor: "move", position: "relative", top: 3 }}
                    src="static/icons/draggable.svg"
                    alt="draggable"
                  />
                  <span>{column.title}</span>
                </>
              );
            },
          },
        }}
      />
    </>
  );
};

export default KATable;
