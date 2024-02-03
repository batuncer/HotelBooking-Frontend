import React from 'react';
import Modal from 'react-modal';

const BookingDoneModal = ({ isOpen, onRequestClose }) => {

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        },
    };

    const handleCloseModal = () => {
        onRequestClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Booking Done Modal"
            style={customStyles}
        >
            <div >
                <h2>Booking is done!</h2>
                <button onClick={handleCloseModal} style={{ marginTop: '10px' }}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default BookingDoneModal;