import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchBar from "../components/SearchBar";
import axios from "../utils/axios";
import WelcomeMessage from "../components/WelcomeMessage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AvailableRooms from '../components/AvailableRooms';
import BookingDoneModal from '../components/BookingDoneModal';
import { Stack } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  margin: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

export default function Main() {
  const [user, setUser] = useState({
    username: 'user',
  });
  const [availableRooms, setAvailableRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(null);  // Corrected the state name
  const [reservationDone, setReservationDone] = useState(false);  // Corrected the state name

  const handleModalClose = () => {
    setReservationDone(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/customers/get-profile');
        const userData = response.data;
        console.log(userData);
        setUser({
          username: userData.firstname || 'User',
        });
      } catch (error) {
        console.error('User data fetching error:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const calculateTotalCost = () => {
      if (!checkInDate || !checkOutDate || availableRooms.length === 0) {
        setTotalCost(0);
        return;
      }

      const numberOfNights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
      const price = availableRooms[0]?.current_price || 0;
      const totalCost = numberOfNights * price;
      setTotalCost(totalCost);
    };

    calculateTotalCost();
  }, [checkInDate, checkOutDate, availableRooms]);

  const onBook = async (data) => {
    const { roomId, price } = data;

    if (!checkInDate || !checkOutDate) {
      console.error('Please select check-in and check-out dates.');
      return;
    }

   // const totalCost = numberOfNights * price;

    try {
      const response = await axios.post('/api/reservations', { reservation: { room_id: roomId, checkin: checkInDate, checkout: checkOutDate, room_price: numberOfNights * price } });
      const reservationData = response.data;
      console.log(reservationData);
      setReservationDone(true);
    } catch (error) {
      console.error('User data fetching error:', error);
    }

    setTotalCost(totalCost);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}  >
          <Item style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            height: "80%",
            fontSize: "20px"
          }}>
            <WelcomeMessage username={user.username} />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <SearchBar onResult={(data) => {
              setAvailableRooms(data.rooms);
              setCheckInDate(data.checkInDate);
              setCheckOutDate(data.checkOutDate);
              const numberOfNights = Math.ceil((new Date(data.checkOutDate) - new Date(data.checkInDate)) / (1000 * 60 * 60 * 24));
              setNumberOfNights(numberOfNights);
            }} />
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item style={{
            backgroundColor: '#AAA9AD',
          }}>
            <Item style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: "20px"
            }}>
              <Stack spacing={1} direction={{ md: 'row', xs: 'column' }} justifyContent="center" alignItems="center">
                <img style={{ width: "60%" }} src="https://parisjetaime.com/data/layout_image/1034_Hotel-enseigne-neon-630x405-C-Thinkstock.jpg" alt="hotel" />
                <div>
                  <h2>About Our Hotel</h2>
                  <p>
                    Welcome to our luxury hotel, where comfort meets elegance. Discover
                    the perfect blend of sophistication and convenience in our Standard, Queen
                    and Premium rooms. Indulge in the ultimate relaxation experience with
                    our thoughtfully designed accommodations, providing a serene escape
                    from the hustle and bustle of daily life.
                  </p>
                </div>
              </Stack>
            </Item>

            <Item style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: "15px"
            }}>
              <h3>Standard Rooms</h3>
              <p>
                Our Standard rooms offer a cozy and inviting ambiance, perfect for a
                relaxing stay. Immerse yourself in modern amenities and enjoy a
                peaceful retreat after a day of exploration or business activities.
              </p>
            </Item>
            <Item style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: "15px"
            }}>
              <h3>Premium Rooms</h3>
              <p>
                Experience luxury at its finest in our Premium rooms. Indulge in
                spacious layouts, premium furnishings, and top-notch services.
                Whether you're here for business or leisure, our Premium rooms promise
                a stay that exceeds your expectations.
              </p>
            </Item>
            <Item style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: "15px"
            }}>
              <h3>Queen Rooms</h3>
              <p>
                Sea view room with Experience luxury at its finest in our Queen rooms. Indulge in
                spacious layouts, premium furnishings, and top-notch services.
                Whether you're here for business or leisure, our Queen rooms promise
                a stay that exceeds your expectations.
              </p>
            </Item>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <AvailableRooms
            availableRooms={availableRooms}
            day={numberOfNights}
            onBook={onBook}
          />
          <BookingDoneModal isOpen={reservationDone} onRequestClose={handleModalClose} />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
