// component which will maintain interective components in the side

// NOTE:
// 1. use structures.json to render the structure, the substructure and then the method. ❌
// 2. ❌
// 3. ❌
// 4. ❌
// 5. ❌
// 6. (optional) an animation to show the data being sent to dhanchu bot in the bottom right corner of showcase. ❌
// consider using icons instead of labels (more interactive? yes/no)
const UtilitySection = () => {
  const data = async () => {
    const res = await fetch("../config/structures.json");
    const data = await res.json();
    console.log(data);
  };

  return (
    // replace the vertical scrollbar with an arrow later in medium/large
    // on small devices show one strip at a time with side arrows to switch
    <>{}</>
  );
};

export default UtilitySection;
