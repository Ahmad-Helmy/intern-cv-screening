import "./DropdownMenu.css";

type DropdownMenu_props = {
  options?: string[];
  size: "small" | "large";
  placeholder?: string;
  label: string;
  onChange: (value: string) => void;
};

export default function DropdownMenu({
  options = ["no items"],
  size,
  label,
  onChange,
  placeholder = "Select an Option",
}: DropdownMenu_props) {
  return (
    <div className="form-field">
      <label>{label}</label>

      <select
        className={`DropdownMenu DropdownMenu--${size}`}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
