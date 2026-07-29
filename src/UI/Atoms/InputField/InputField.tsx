import "./InputField.css";
type InputFieldProps = {
  placeholder?: string;
  name?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ placeholder, name, value, onChange }: InputFieldProps) {
  return (
    <div className="input-field-container">
      {name ? <label className="label">{name}</label> : null}

      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}
export default InputField;
