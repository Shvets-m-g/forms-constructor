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

    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${firstName} `);
        resetFirstName();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                s
                <input type="text" {...bindFirstName} />
            </label>
        </form>
    );
}