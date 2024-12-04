import { createContext } from "react";

export const StripClickContext = createContext((type: string) =>
  console.log(type),
);
