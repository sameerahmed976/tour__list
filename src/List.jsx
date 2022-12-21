import React, { useState } from "react";

const List = ({ id, name, image, info, price, setTour, tour, fetchData }) => {
  const [readMore, setReadMore] = useState(false);

  const remove = (id) => {
    // console.log(id);

    const newTour = tour.filter((tourItem) => tourItem.id !== id);

    setTour(newTour);
  };

  {
    /* console.log(`* ~ file: List.jsx:10 ~ {tour.map ~ newPrice`, newPrice); */
  }
  const newPrice = parseFloat(price) * 2_00_000;

  return (
    <>
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
          {readMore ? info : info.slice(0, 110)}
          <span
            className="tours__card__button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "read less" : " read more ...."}
          </span>
        </p>

        <button className="btn btn--not__interested" onClick={() => remove(id)}>
          not interested
        </button>
      </article>
    </>
  );
};

export default List;
