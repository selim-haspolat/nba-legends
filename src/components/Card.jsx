import { useState } from "react";
import "./card.css";

const Card = ({ name, img, statistics }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <div className="w-52 h-80 mx-auto my-5 text-white bg-slate-800 rounded-md relative transition-transform flex flex-col justify-between">
      <div
        id="card-div"
        className={` ${displayInfo ? "flipped" : ""} `}
        onClick={() => setDisplayInfo(!displayInfo)}
      >
        <img
          className="w-52 h-72 object-cover object-center rounded-md mx-auto cursor-pointer absolute"
          src={img}
          alt={name}
        />
        <div>
          {statistics.map((e, i) => (
            <p key={i}>✔️{e}</p>
          ))}
        </div>
      </div>

      <h1 className="text-center mb-1">{name}</h1>
    </div>
  );
};

export default Card;
