import axios from "axios";
import { useState } from "react";
import useDebounce from "./useDebounce";

function useFetchNewToon(platform, page) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchNewToon(platform, page) {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get(
        `${URL}/new?platform=${platform}&page=${page}`
      );
      setData(res.data);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  useDebounce(() => fetchNewToon(platform, page), 1000, [platform]);

  return [data, loading, error];
}

export default useFetchNewToon;
