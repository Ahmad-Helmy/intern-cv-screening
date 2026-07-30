type InputFieldProps = {
  placeholder?: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ placeholder, name, value, onChange }: InputFieldProps) {
  return (
    <div className="form-field">
      <label>{name}</label>

      <input
        className="InputField"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={!onChange}
      />
    </div>
  );
}
export default InputField;
