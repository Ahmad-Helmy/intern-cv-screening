function InputField({ placeholder, name }) {
    return (
        <>
            <label>{name}</label>

            <input type="text"
                name={name}
                placeholder={placeholder}
                id="InputField" />
        </>
    )

}

export default InputField;
