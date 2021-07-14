import { useState } from "react";
import Data from "./Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        <p>{name}</p>
        <p>{job}</p>
        <p>{text}</p>

        <div className="buttons">
          <button onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button onClick={random}>reandom</button>
      </div>
    </>
  );
};

export default Review;
