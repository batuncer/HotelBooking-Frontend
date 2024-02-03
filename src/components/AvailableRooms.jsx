import { Button, Typography, Grow } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const AvailableRooms = ({ availableRooms, day, onBook }) => {
    console.log(day)
    return (
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <Typography variant='h4'>Available Rooms</Typography>
            {availableRooms.map((room) => (
                <div key={room.id} style={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '15px' }}>
                    <img src={room.img} alt={room.type_name} style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
                    <p>{`Type: ${room.type_name}`}</p>
                    <p>{`Price: £${room.current_price} `} / per day</p>
                    <p>Total Cost: £{day * room.current_price}</p>

                    <Grow in>
                        <Button
                            variant='outlined'
                            onClick={() => { onBook({ roomId: room.id, price: room.current_price }) }}
                            title='Book'
                            style={{ borderRadius: '0 0 10px 10px', marginTop: '10px', color: 'white', background: "#0066b2" }}
                        >
                            Book
                        </Button>
                    </Grow>
                </div>
            ))}
        </Stack>
    );
};

export default AvailableRooms;
