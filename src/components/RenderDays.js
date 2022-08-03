import React from 'react';
import PropTypes from 'prop-types';

function isLeapYear(year) {
    if (year / 100) {
        return false
    }
    if (year / 400 || year / 4) {
        return true;
    }
    return false;
}

    function getDaysInMonth(date) {
        const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(isLeapYear(date.getFullYear()) && date.getMonth()===1) {
            return daysArr[date.getMonth()] + 1;
        }
        return daysArr[date.getMonth()];
    }

    function getDayOfWeek(date) {
        return (date.getDay() + 6) % 7;
    }

    function RenderDays(props) {
        const {date} = props;
        const firstDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const weeksInMonth = Math.ceil((getDaysInMonth(date) + getDayOfWeek(firstDayInMonth)) / 7);
        const month = new Array(weeksInMonth);
        let initDay = firstDayInMonth.getDate() - getDayOfWeek(firstDayInMonth);
        console.log(firstDayInMonth)
        for (let i = 0; i < weeksInMonth; i++) {
            month[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                month[i][j] = initDay;
                initDay += 1;
            }
        }
        return (
            <tbody>
                {month.map(week => 
                    <tr>
                        {week.map(day => 
                            <td className={
                                day === date.getDate() ? "ui-datepicker-today" :
                                day < 1 ? "ui-datepicker-other-month" :
                                day > getDaysInMonth(date) ? "ui-datepicker-other-month" : 
                                null
                                }>
                            {new Date(date.getFullYear(), date.getMonth(), day).getDate()}
                            </td>
                        )}
                    </tr>
                )}   
            </tbody>
        )
    }

export default RenderDays;

