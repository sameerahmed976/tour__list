import React from "react";

const List = ({ tour, setTour }) => {
  const remove = (id) => {
    // console.log(id);

    const newTour = tour.filter((tourItem) => tourItem.id !== id);

    setTour(newTour);
  };

  const noTours = () => {
    console.log("click");
    setTour(tour);
  };

  if (tour.length === 0) {
    return (
      <section className="no__tours">
        <button className="btn btn--no__tours" onClick={() => noTours()}>
          refresh
        </button>
      </section>
    );
  }

  return (
    <>
      {tour.map((tourItem) => {
        let { id, name, image, price } = tourItem;

        const newPrice = parseFloat(price) * 2_00_000;
        // console.log(`* ~ file: List.jsx:10 ~ {tour.map ~ newPrice`, newPrice);

        return (
          <article className="tours__card" key={id}>
            <img
              src={image}
              alt="tour image"
              loading="lazy"
              className="tour__image"
            />

            <div className="tours__card__heading">
              <h2 className="tours__card__title">{name}</h2>
              <h3 className="tours__card__price"> ₹{newPrice}</h3>
            </div>

            <p className="tours__card__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              odio quaerat quasi.
              <span className="tours__card__button">read more</span>
            </p>

            <button
              className="btn btn--not__interested"
              onClick={() => remove(id)}
            >
              not interested
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
