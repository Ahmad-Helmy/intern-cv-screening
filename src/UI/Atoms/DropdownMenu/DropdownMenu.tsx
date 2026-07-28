import "./DropdownMenu.css";

type DropdownMenu_props = {
  options?: string[];
  size: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function DropdownMenu({
  options = ["no items"],
  size,
  onChange,
}: DropdownMenu_props) {
  return (
    <select
      className={`DropdownMenu DropdownMenu--${size}`}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option> {option} </option>
      ))}
    </select>
  );
}
