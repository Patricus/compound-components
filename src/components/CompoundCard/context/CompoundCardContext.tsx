import { createContext, useContext } from "react";
import { ICard } from "../../../types";

const CompoundCardContext = createContext<{ card: ICard } | null>(null);

export const useCompoundCardContext = () => {
  const context = useContext(CompoundCardContext);

  // If context is null, it means that useCompoundCardContext was called outside of the CompoundCardContextProvider
  if (!context) {
    throw new Error("useCompoundCardContext must be used within a CompoundCardContextProvider");
  }
  return context;
};

export default CompoundCardContext;
