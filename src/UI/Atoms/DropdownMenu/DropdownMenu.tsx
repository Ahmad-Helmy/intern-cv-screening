import "./DropdownMenu.css";

type DropdownMenu_props = {
  options?: string[];
  size: "small" | "large";
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function DropdownMenu({
  options = ["no items"],
  size,
  onChange,
  placeholder = "Select an Option",
}: DropdownMenu_props) {
  return (
    <select
      className={`DropdownMenu DropdownMenu--${size}`}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" selected disabled hidden>
        {placeholder}
      </option>

      {options.map((option) => (
        <option> {option} </option>
      ))}
    </select>
  );
}
