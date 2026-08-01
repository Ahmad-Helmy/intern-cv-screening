import "./DropdownMenu.css";

type DropdownMenu_props = {
  options?: string[];
  size: "small" | "large";
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
};

export default function DropdownMenu({
  options = ["no items"],
  size,
  onChange,
  placeholder = "Select an Option",
  value = "",
}: DropdownMenu_props) {
  return (
    <select
      className={`DropdownMenu DropdownMenu--${size}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
