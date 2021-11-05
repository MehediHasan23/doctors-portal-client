import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ExceptionalDantel from "../Exceptional Dantel/ExceptionalDantel";
import InfoBanner from "../InfoBanner/InfoBanner";
import Review from "../Review/Review";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner></Banner>
      <InfoBanner />
      <Services />
      <ExceptionalDantel />
      <AppointmentBanner />
      <Review></Review>
      <Blog></Blog>
    </div>
  );
};

export default Home;
