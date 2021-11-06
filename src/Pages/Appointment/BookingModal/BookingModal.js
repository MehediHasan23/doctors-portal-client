import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../Hooks/useAuth";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ handleBookingClose, openBooking, booking, date, setSuccessful }) => {
  const { user } = useAuth();

  const { name, time } = booking;
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBooking = { ...bookingInfo };
    newBooking[field] = value;
    setBookingInfo(newBooking);
  };
  // booking form
  const handelBooking = (e) => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      time,
      date: date.toLocaleDateString(),
    };
    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(appointment)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccessful(true)
          handleBookingClose();
        }
      })

    
  };
  return (
    <div>
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handelBooking}>
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.displayName}
                onBlur={handelOnBlur}
                size="small"
                name="patientName"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user?.email}
                onBlur={handelOnBlur}
                size="small"
                name="email"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue="Phone Number"
                onBlur={handelOnBlur}
                size="small"
                name="phone"
              />
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
