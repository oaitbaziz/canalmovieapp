import React, { useCallback, useEffect } from "react";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "redux/home/homeActions";
import { RootState } from "redux/store";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = useCallback(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  const { loading, error, data } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    history.push("/error");
    return <></>;
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <div className="home-page">
        <Slider data={data} />
      </div>
    </main>
  );
};

export default Home;
