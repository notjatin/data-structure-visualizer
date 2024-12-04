// to be updated... and name might get changed too
// to make it more generic, obviously

import { useState } from "react";

// the useStructure hook allows us to select the disired structure
// the key which differentiates the structures are the methods
// the implementatation for each method (4 now) is different for each structure
// viz. insert(), delete(), search() and update()
//
// Prototypes:
// boolean insert(item); -> true means inserted and false means overflow
// boolean delete(); -> true means deleted and false means underflow
//      might be overridden for an array as by default we delete a selected element/index
//      boolean delete(index)
// index search(item); -> return the index if found otherwise -1
// boolean update(item); -> 1 if found and updates 0 otherwise

type StructureMethods<T> = {
  insert?: (...args: any[]) => T;
  delete?: (...args: any[]) => T;
  search?: (...args: any[]) => any[];
  update?: (...args: any[]) => T;
};

function useStructure<T>(initialStructure: T, methods: StructureMethods<T>) {
  const [structure, setStructure] = useState<T>(initialStructure);

  const wrappedMethods = {
    insert: (...args: any[]) => {
      if (methods.insert) {
        const updated = methods.insert(structure, ...args);
        setStructure(updated);
      }
    },
    delete: (...args: any[]) => {
      if (methods.delete) {
        const updated = methods.delete(structure, ...args);
        setStructure(updated);
      }
    },
    search: (...args: any[]) => {
      if (methods.search) {
        return methods.search(structure, ...args);
      }
      return null;
    },
    update: (...args: any[]) => {
      if (methods.update) {
        const updated = methods.update(structure, ...args);
        setStructure(updated);
      }
    },
  };
  return { structure, ...wrappedMethods };
}
