import { useState } from "react";
import Data from "./Data";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, id, image, job, text } = Data[index];

  const help = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return Data.length - 1;
    }

    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return help(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return help(newIndex);
    });
  };

  const random = () => {
    let randomIndex = Math.floor(Math.random() * Data.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(help(randomIndex));
  };

  return (
    <>
      <h1 className="heading">Our Reviews</h1>

      <div className="card" key={id}>
        <img src={image} alt="" />
        <div className="man">
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
        <div className="buttons">
          <button className="changeBtn" onClick={prevPerson}>
            <FaArrowLeft className="FaArrowLeft" />
          </button>
          <p className="text">
            {" "}
            <FaQuoteLeft className="FaQuoteLeft" /> {text}
          </p>
          <button className="changeBtn" onClick={nextPerson}>
            <FaArrowRight />
          </button>
        </div>
        <p className="pageNum">{index + 1}/5</p>
        <button className="btn" onClick={random}>
          random
        </button>
      </div>
    </>
  );
};

export default Review;
