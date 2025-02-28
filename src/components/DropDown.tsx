import { ChangeEvent } from "react";

interface DropDownProps<T> {
  label: string;
  options: T[];
  selected: T;
  onChange: (item: T) => void;
  // onChange: React.Dispatch<React.SetStateAction<T>>;
  getLabel: (item: T) => string;
}
const DropDown = <T,>({
  label,
  options,
  selected,
  onChange,
  getLabel,
}: DropDownProps<T>) => {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const selectedOption = options.find((option) => getLabel(option) === value);
    if (selectedOption) onChange(selectedOption);
  }
  return (
    <div>
      <label>{label}</label>
      <select
        value={selected ? getLabel(selected) : ""}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={getLabel(option)} value={getLabel(option)}>
            {getLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
