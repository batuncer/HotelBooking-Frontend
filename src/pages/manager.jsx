import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from "../utils/axios";
import ReservationTable from '../components/ReservationTable';

export default function Manager() {
  const [allReservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const response = await axios.get('/api/reservations/all-details');
        const reservationData = response.data;
        setReservations(reservationData);
      } catch (error) {
        console.error('Reservation data fetching error:', error);
      }
    };

    fetchReservationData();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <ReservationTable reservations={allReservations} />
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <Footer />
      </div>
    </div>
  );
}
