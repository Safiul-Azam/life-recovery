import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const DayManage = () => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    const formattedDate = format(selectedDay, "PP");
    const footer = selectedDay ? (
        <p>You selected {formattedDate}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className=''>
                <DayPicker
                    mode="single"
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                    footer={footer}
                />
            </div>
        </div>
    );
}

export default DayManage;