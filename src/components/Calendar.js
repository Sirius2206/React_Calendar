import React from 'react';
import PropTypes from 'prop-types';

import RenderDays from './RenderDays'

const months = [
    'Январь-Января',
    'Февраль-Февраля',
    'Март-Марта',
    'Апрель-Апреля',
    'Май-Мая',
    'Июнь-Июня',
    'Июль-Июля',
    'Август-Августа',
    'Сентябрь-Сентября',
    'Октябрь-Октября',
    'Ноябрь-Ноября',
    'Декабрь-Декабря'
];

const weekDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
]

function Calendar(props) {
    const {date} = props;
    return (
        <div class="ui-datepicker">
  <div class="ui-datepicker-material-header">
    <div class="ui-datepicker-material-day">{weekDays[date.getDay()]}</div>
    <div class="ui-datepicker-material-date">
      <div class="ui-datepicker-material-day-num">{date.getDate()}</div>
      <div class="ui-datepicker-material-month">{months[date.getMonth()].split('-')[1]}</div>
      <div class="ui-datepicker-material-year">{date.getFullYear()}</div>
    </div>
  </div>
  <div class="ui-datepicker-header">
    <div class="ui-datepicker-title">
      <span class="ui-datepicker-month">{months[date.getMonth()].split('-')[0]}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear}</span>
    </div>
  </div>
  <table class="ui-datepicker-calendar">
  <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col class="ui-datepicker-week-end" />
      <col class="ui-datepicker-week-end" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
      <RenderDays date={date} />
  </table>
</div>
    )
}

Calendar.propTypes = {

  }

export default Calendar;