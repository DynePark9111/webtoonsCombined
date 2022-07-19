import axios from "axios";
import { useState } from "react";
import useDebounce from "./useDebounce";

function useFetchWebtoon(category, page, platform, genre) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchWebtoon(category, page, platform, genre) {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get(
        `${URL}/webtoon?category=${category}&page=${page}&platform=${platform}&genre=${genre}`
      );
      setData(res.data);
      setLoading(false);
    } catch {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  useDebounce(() => fetchWebtoon(category, page, platform, genre), 1000, [
    category,
    page,
    platform,
    genre,
  ]);

  return [data, loading, error];
}

export default useFetchWebtoon;
