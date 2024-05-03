import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './ClockWidget.css';

const ClockWidget = () => {
    // State to store the current time, date, and day
    const [currentDateTime, setCurrentDateTime] = useState({
        time: '',
        date: '',
        day: '',
    });

    // Function to update the current date and time
    const updateDateTime = () => {
        const now = moment();
        setCurrentDateTime({
            time: now.format('h:mm A'),
            date: now.format('MMMM D, YYYY'),
            day: now.format('dddd'),
        });
    };

    // Use an effect to update the date and time every second
    useEffect(() => {
        const interval = setInterval(updateDateTime, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-widget">                        
            <div className="time">{currentDateTime.time}</div>        
            <div className="day">{currentDateTime.day}</div>
            <div className="date">{currentDateTime.date}</div>            
        </div>
    );
};

export default ClockWidget;
