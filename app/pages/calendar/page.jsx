'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';


export default function MyApp() {
    const [value, onChange] = useState (new Date());

    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

