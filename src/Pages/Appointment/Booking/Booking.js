import { Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setSuccessful }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography
            sx={{ color: "info.main", fontWeight: "600" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Available Spaces
          </Typography>
          <Button
            onClick={handleBookingOpen}
            sx={{ mt: 4 }}
            variant="contained"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        booking={booking}
        date={date}
        setSuccessful={setSuccessful}
      ></BookingModal>
    </>
  );
};

export default Booking;
