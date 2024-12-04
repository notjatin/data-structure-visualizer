import { createContext } from "react";

export const OperationContext = createContext<
  "modify" | "insert" | "delete" | "search"
>("insert");
