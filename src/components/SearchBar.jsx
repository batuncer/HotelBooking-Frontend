import React, { useState, useEffect } from 'react';
import BookingDoneModal from './BookingDoneModal';
import axios from '../utils/axios';
import DateTimePickerValue from './DatePicker';
import { Button, MenuItem, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const SearchBar = ({ onResult }) => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [roomTypes, setRoomTypes] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState(null);

    const [bookingDone, setBookingDone] = useState(false);


    useEffect(() => {
        fetchRoomTypes();
    }, []);

    const fetchRoomTypes = async () => {
        try {
            const response = await axios.get('/api/room-types');
            console.log("response.data)", response.data)
            setRoomTypes(response.data.roomtypes);
        } catch (error) {
            console.error('Room types fetching error:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`api/available-rooms?roomType=${selectedRoomType}&startDate=${checkInDate}&endDate=${checkOutDate}`);
            onResult({
                rooms: response.data, checkInDate
                , checkOutDate
            });

            setBookingDone(false);

        } catch (error) {
            console.error('Error fetching rooms', error);
        }
    };

    const handleBookRoom = async () => {
        if (!checkInDate || !checkOutDate || !selectedRoomType) {
            console.error('Please select check-in date, check-out date, and room type.');
            return;
        }

        try {
            await axios.post('api/reservations', {
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                roomType: selectedRoomType.value,
            });

            setBookingDone(true);
        } catch (error) {
            console.error('Error making reservation:', error);
        }
    };

    return (
        <Stack spacing={2} className="search-bar">
            <DateTimePickerValue
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                onCheckInChange={(date) => setCheckInDate(date)}
                onCheckOutChange={(date) => setCheckOutDate(date)}
                placeHolder="Check in"
            />

            <div className="room-type-dropdown">


                <TextField
                    label="Room Type"
                    select
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                    sx={{ minWidth: 1 }}

                >
                    {roomTypes.map((type) => (
                        <MenuItem key={type.id} value={type.id}>
                            {type.type_name}
                        </MenuItem>
                    ))}
                </TextField>


            </div>

            <Button variant="contained" onClick={handleSearch}>Search Room</Button>


            <BookingDoneModal
                isOpen={bookingDone}
                onRequestClose={() => setBookingDone(false)}
            />
        </Stack>
    );
};

export default SearchBar;