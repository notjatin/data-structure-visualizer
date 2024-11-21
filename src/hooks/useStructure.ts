// to be updated... and name might get changed too
// to make it more generic, obviously

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
