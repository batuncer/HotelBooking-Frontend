// DateTimePickerValue.jsx
import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateTimePickerValue = ({ checkInDate, checkOutDate, onCheckInChange, onCheckOutChange, placeHolder }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <DateTimePicker
                    label="Checkin Date"
                    value={checkInDate}
                    onChange={onCheckInChange}
                    views={['day', 'month', 'year']}
                    placeholder={placeHolder || "Check in"}
                />
                <DateTimePicker
                    label="Checkout Date"
                    value={checkOutDate}
                    onChange={onCheckOutChange}
                    views={['day', 'month', 'year']}
                    placeholder={placeHolder || "Check out"}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DateTimePickerValue;
