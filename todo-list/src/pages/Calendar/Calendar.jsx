import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './Calendar.css'
import CalenderTile from "./components/CalenderTile/CalenderTile";

const CalendarView = ({toDoStore}) => {

    const [value, onChange] = useState(new Date());
    const navigate = useNavigate();
    const linkToDay = (value) => {
        const date = new Date(value);
        navigate(`todo/${date.getDate()}`);
      
    }
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
                nextLabel=""
                next2Label=""
                prevLabel=""
                prev2Label=""
                tileContent={(value) => value.date.getMonth()==1 ? 
                    <CalenderTile 
                        day={value.date.getDate()} 
                        toDoStore={toDoStore}
                    />
                    :""
                }
                tileClassName="tile-class"
            />
        </div>
    )
};
export default CalendarView;