/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "redux/home/homeActions";
import { RootState } from "redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchTrending());
  };

  const { loading, error, data } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    fetchData();
  }, [loading, error]);

  return (
    <main>
      <div className="home-page">
        <Slider data={data} />
      </div>
    </main>
  );
};

export default Home;
