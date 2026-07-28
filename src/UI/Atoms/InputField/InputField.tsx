import "./InputField.css"
type InputFieldProps = {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ placeholder, name, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label>{name}</label>

      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id="InputField"
      />
    </div>
  );
}
export default InputField;
