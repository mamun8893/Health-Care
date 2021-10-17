import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Gallery></Gallery>
      <Team></Team>
    </div>
  );
};

export default Home;
