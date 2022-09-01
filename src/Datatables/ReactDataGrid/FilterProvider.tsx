import React, { createContext } from "react";
import { Filter } from "./models";

const FilterProvider = () => {
  const FilterContext = createContext<Filter | undefined>(undefined);
  const filters = undefined;
  return (
    <FilterContext.Provider value={filters}>
      FilterProvider
    </FilterContext.Provider>
  );
};

export default FilterProvider;
