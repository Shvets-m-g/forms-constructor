import { useState } from 'react';


export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export function Input(props) {
    const { value: name, bind: bind, reset: reset } = useInput(props.form.value);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {props.form.name} <br/>
                <input
                    type={props.form.type}
                    placeholder={props.form.placeholder}
                    id={props.form.fieldKey}
                    className={` ${props.form.customClass}`}
                    pattern={props.form.pattern}
                    readOnly={props.form.isReadOnly}
                    disabled={props.form.isDisabled}
                    required={props.form.isRequired}
                    onChange={props.form.onChange}
                    onBlur={props.form.onBlur}
                    onFocus={props.form.onFocus}
                    {...bind}
                />
            </label>
        </form>
    );
}