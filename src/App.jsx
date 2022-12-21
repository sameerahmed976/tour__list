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

  const noTours = () => {
    // console.log("click");
    fetchData();
  };

  if (tour.length === 0) {
    return (
      <section className="no__tours">
        <h2 className="no__tours__left">No Tours Left</h2>

        <button className=" btn--no__tours" onClick={() => noTours()}>
          refresh
        </button>
      </section>
    );
  }

  return (
    <>
      <main className="main">
        <h1 className="main__heading">Tours List</h1>
        <div className="underline"></div>

        <section className="tours__container">
          {tour.map((tourItem) => {
            return (
              <List
                {...tourItem}
                setTour={setTour}
                fetchData={fetchData}
                tour={tour}
                key={tourItem.id}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default App;
