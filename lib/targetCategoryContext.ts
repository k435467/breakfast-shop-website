import React, { Dispatch, SetStateAction } from "react";

const TargetCategoryContext = React.createContext({
  targetCategory: 0,
  setTargetCategory: (() => {}) as Dispatch<SetStateAction<number>>,
});

export const TargetCategoryProvider = TargetCategoryContext.Provider;

export default TargetCategoryContext;
