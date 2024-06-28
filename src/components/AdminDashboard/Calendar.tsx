import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isToday, addMonths } from 'date-fns';

type Event = {
  date: Date;
};

type CalendarComponentProps = {
  events: Event[];
};

export const CalendarComponent = ({ events }: CalendarComponentProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-500 hover:text-gray-700" onClick={prevMonth}>
          {"<"}
        </button>
        <div className="text-lg font-bold">{format(currentMonth, dateFormat)}</div>
        <button className="text-gray-500 hover:text-gray-700" onClick={nextMonth}>
          {">"}
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "E";
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-xs font-medium text-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`p-2 text-center rounded-lg 
              ${isToday(cloneDay) ? 'bg-blue-200' : ''} 
              ${events.some((event: Event) => isSameDay(event.date, cloneDay)) ? 'bg-green-200' : ''}
            `}
            key={cloneDay.getTime()}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2 mb-2" key={day.getTime()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  return (
    <div className="max-w-md mx-auto mt-5 bg-white p-5 rounded-lg shadow">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};
