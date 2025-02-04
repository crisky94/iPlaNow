'use client'

import { useState } from "react";


const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({}); // Store events by date
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const today = new Date();
    const isToday = (day) => {
        return (
            today.getDate() === day &&
            today.getMonth() === currentMonth &&
            today.getFullYear() === currentYear
        );
    };

    const handleDateClick = (day) => {
        const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
        setSelectedDate(dateKey);
    };

    const handleAddEvent = (e) => {
        e.preventDefault();

        setEvents();

    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prevYear) => prevYear - 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prevYear) => prevYear + 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth + 1);
        }
    };

    return (
        <div className="flex flex-col items-center p-4 ">
            <h1 className="text-2xl font-bold mb-4">Calendar</h1>

            <div className="flex justify-between items-center w-full max-w-md mb-4 bg-slate-700">
                <button
                    onClick={handlePrevMonth}
                    className="bg-indigo-600  hover:bg-indigo-500 px-4 py-2 rounded cursor-pointer"
                >
                    Prev
                </button>
                <h2 className="text-lg font-semibold">
                    {new Date(currentYear, currentMonth).toLocaleString("default", {
                        month: "long",
                    })} {currentYear}
                </h2>
                <button
                    onClick={handleNextMonth}
                    className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded cursor-pointer"
                >
                    Next
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-center font-medium">
                        {day}
                    </div>
                ))}
                {Array(firstDayIndex).fill(null).map((_, index) => (
                    <div key={index}></div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                    const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
                    return (
                        <button
                            key={day}
                            onClick={() => handleDateClick(day)}
                            className={`p-2 border rounded cursor-pointer ${selectedDate === dateKey ? "bg-indigo-600 text-black" : ""
                                } ${isToday(day) ? "ring-2 ring-indigo-600" : ""}`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>

            {selectedDate && (
                <div className="w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-2">Events for {selectedDate}</h2>
                    <ul className="mb-4">
                        {(events[selectedDate] || []).map((event, index) => (
                            <li key={index} className="bg-slate-700 p-2 rounded mb-2">
                                {event}
                            </li>
                        ))}
                    </ul>

                    <form onSubmit={handleAddEvent} className="flex items-center gap-2">
                        <input
                            type="text"
                            name="eventTitle"
                            placeholder="Add new event"
                            className="border p-2 rounded w-full"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-500"
                        >
                            Add
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Calendar;
