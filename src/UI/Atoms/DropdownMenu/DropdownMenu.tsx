import "./DropdownMenu.css";

interface Option {
  id: string;
  label: string;
}

type DropdownMenu_props = {
  options?: Option[];
  size: "small" | "large";
  placeholder?: string;
  selectedOption?: string;
  onChange: (value: string) => void;
};

export default function DropdownMenu({
  options = [{ id: "0", label: "no items" }],
  size,
  onChange,
  placeholder = "Select an Option",
  selectedOption,
}: DropdownMenu_props) {
  return (
    <select
      className={`DropdownMenu DropdownMenu--${size}`}
      onChange={(event) => onChange(event.target.value)}
      value={selectedOption}
    >
      <option value="" selected disabled hidden>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
