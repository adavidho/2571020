import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './Calendar.css'

const CalendarView = () => {

    const [value, onChange] = useState(new Date());
    const navigate = useNavigate();
    const linkToDay = (value) => {
        const date = new Date(value);
        console.log(date.getDate());
        navigate(`todo/${date.getDate()}`);

      
    }
    console.log(new Date());
    return (
        <div className='calendar-container'>
            <Calendar
                activeStartDate={new Date('February 1, 2023')}
                minDate={new Date('February 1, 2023')}
                maxDate={new Date('February 28, 2023')}
                defaultView='month'
                minDetail='month'
                maxDetail='month'
                onClickDay={(value) => linkToDay(value)}
            />
        </div>
    )
};
export default CalendarView;