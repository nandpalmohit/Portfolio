import React from "react";

const MonthsExp = (dateFrom, dateTo) => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear()) +
    1
  );
};

export default MonthsExp;
