import React, { useEffect, useState } from "react";
import List from "./List";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        return response;
      }
      const data = await response.json();
      console.log(`* ~ file: App.jsx:21 ~ fetchData ~ data`, data);
      setLoading(false);
      setTour(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <section className="loading">
        <h1 className="loading__text">Loading...</h1>
      </section>
    );
  }

  return (
    <>
      <main className="main">
        <h1 className="main__heading">Tours List</h1>
        <div className="underline"></div>

        <section className="tours__container">
          <List tour={tour} setTour={setTour} />
        </section>
      </main>
    </>
  );
};

export default App;
