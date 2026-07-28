type InputFieldProps = {
    placeholder: string;
    name: string;
};

function InputField({ placeholder, name }: InputFieldProps) {
    return (
        <>
            <label>{name}</label>

            <input type="text"
                name={name}
                placeholder={placeholder}
                id="InputField" />
        </>
    );
}
export default InputField;
