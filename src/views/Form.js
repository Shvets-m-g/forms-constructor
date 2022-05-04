import { Input } from '../components/form/Input';
import ColorPicker from '../components/form/ColorPicker'
import DatePicker from "../components/form/DatePicker";


export function FactoryInputs(data) {
    console.log('data', data)
    switch (data.type) {
        case "input":
            return <Input form={data} key={data.id.toString()}/>
        case "colorPicker":
            return <ColorPicker form={data} key={data.id.toString()}/>
        case "datePicker":
            return <div>date picker</div>

            //return <DatePicker form={data} key={data.id.toString()}/>
        default:
            return <Input form={data} key={data.id.toString()}/>
    }
}

export default function Form(props) {
    console.log('Form props', props)
    return (
        <div>
            {
            props.form
                .map(input =>
                    FactoryInputs(input)
                )
            }

        </div>
    );
}