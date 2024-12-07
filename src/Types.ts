import { ReactElement } from "react";

// custom types to be moved here
export type operationType =
  | "insert"
  | "modify"
  | "delete"
  | "search"
  | undefined;

export type stripItemsType = {
  value: operationType;
  label: ReactElement | null;
  tone: string;
};

