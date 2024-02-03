// ReservationTable.jsx
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const ReservationTable = ({ reservations }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Customer Surname</TableCell>
                        <TableCell>Check In Date</TableCell>
                        <TableCell>Check Out Date</TableCell>
                        <TableCell>Customer ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map((reservation) => {

                        return (
                            <TableRow key={reservation.customerId}>
                                <TableCell>{reservation.firstname}</TableCell>
                                <TableCell>{reservation.surname}</TableCell>
                                <TableCell>{formatDate(reservation.checkin)}</TableCell>
                                <TableCell>{formatDate(reservation.checkout)}</TableCell>
                                <TableCell>{reservation.customer_id}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReservationTable;
