import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mamun8893/health-service/main/health-data.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useService;
