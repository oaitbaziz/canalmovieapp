import React, { useEffect } from "react";
import apiInstance from "service/api";
import Slider from "./components/Slider";
import { trendingWeekly } from "data";

const Home: React.FC = () => {
  useEffect(() => {
    apiInstance.getWeeklyTrending();
  });

  const data = trendingWeekly;

  return (
    <main>
      <div className="home-page">
        <Slider data={data} />
      </div>
    </main>
  );
};

export default Home;
