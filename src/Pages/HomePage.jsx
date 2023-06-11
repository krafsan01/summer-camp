import React from "react";
import Slider from "../Components/home/slider/Slider";
import PopularClasses from "../Components/home/popularClasses/PopularClasses";
import PopularInstructors from "../Components/home/popularInstructors/popularInstructors";
import FeaturesCards from "../Components/home/features/Features";
import Faq from "../Components/home/faq/Faq";
import ContactUs from "../Components/home/contactUs/ContactUs";

const HomePage = () => {
  return (
    <>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <FeaturesCards />
      <Faq />
      <ContactUs />
    </>
  );
};

export default HomePage;
