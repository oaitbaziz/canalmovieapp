import axios from "axios";
import config from "config";

const { baseURL, apiKey } = config;

const apiInstance = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  const params = {
    api_key: apiKey,
  };

  const api = axios.create({
    baseURL,
    headers,
    params,
  });

  // Home
  const getWeeklyTrending = () => {
    return api.get("/trending/all/week");
  };

  // Search
  const getSearchResults = (q = "") => {
    return api.get("/search/multi", { params: { query: q } });
  };

  return {
    getWeeklyTrending,
    getSearchResults,
  };
};

const init = apiInstance();

export default init;
