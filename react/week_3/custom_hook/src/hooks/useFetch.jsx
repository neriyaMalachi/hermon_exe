import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function getData() {
      try {
        setLoading(true);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Request failed");

        const json = await res.json();

        if (!ignore) {
          setData(json);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}