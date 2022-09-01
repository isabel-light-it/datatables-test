import React from "react";

const ReactPivotContainer = () => {
  const ReactPivot = require("react-pivot");
  const rows = [
    {
      firstName: "Francisco",
      lastName: "Brekke",
      state: "NY",
      transaction: {
        amount: "399.73",
        date: "2012-02-02T08:00:00.000Z",
        business: "Kozey-Moore",
        name: "Checking Account 2297",
        type: "deposit",
        account: "82741327",
      },
    },
    {
      firstName: "Francisco",
      lastName: "Brekke",
      state: "NY",
      transaction: {
        amount: "768.84",
        date: "2012-02-02T08:00:00.000Z",
        business: "Herman-Langworth",
        name: "Money Market Account 9344",
        type: "deposit",
        account: "95753704",
      },
    },
  ];
  const dimensions = [{ value: "firstName", title: "First Name" }];
  const reduce = (row: any, memo: any) => {
    memo.amountTotal =
      (memo.amountTotal || 0) + parseFloat(row.transaction.amount);
    return memo;
  };
  const calculations = [
    {
      title: "Amount",
      value: "amountTotal",
      template: function (val: any, row: any) {
        return "$" + val.toFixed(2);
      },
      sortBy: function (row: any) {
        return isNaN(row.amountTotal) ? 0 : row.amountTotal;
      },
    },
  ];
  return (
    <ReactPivot
      rows={rows}
      dimensions={dimensions}
      reduce={reduce}
      calculations={calculations}
      nPaginateRows={25}
      activeDimensions={['First Name']}
    />
  );
};

export default ReactPivotContainer;
