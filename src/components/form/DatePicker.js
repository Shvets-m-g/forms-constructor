import {useState} from "react";
import {CalendarContainer} from "react-datepicker";

export default function DatePicker(props) {
    console.log('datePicker', props)
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={props.form.customClass}>
                    <div style={{ background: "#f0f0f0" }}>
                        {props.form.name}
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            calendarContainer={MyContainer}
        />
    );
};