import { useState } from "react";
import Data from "./Data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

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
      <div className="card" key={id}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{job}</p>

        <div className="buttons">
          <button className="changeBtn" onClick={prevPerson}>
            <FaArrowLeft />
          </button>

          <p className="text">{text}</p>
          <button className="changeBtn" onClick={nextPerson}>
            <FaArrowRight />
          </button>
        </div>

        <p>{index + 1}/5</p>

        <button className="btn" onClick={random}>
          random
        </button>
      </div>
    </>
  );
};

export default Review;
