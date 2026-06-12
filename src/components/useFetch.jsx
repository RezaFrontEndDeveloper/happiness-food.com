import { useEffect, useState } from "react";

function useFetch(url) {
  const [fetchdata, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("error");
        const data = await res.json();
        setFetchData(data.posts);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);
  return { isError, isLoading, fetchdata };
}
export default useFetch;
