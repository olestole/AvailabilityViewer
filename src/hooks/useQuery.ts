import axios from "axios";
import { useEffect, useState } from "react";

const useQuery = (query: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(query);
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return { data, loading };
};

export default useQuery;
