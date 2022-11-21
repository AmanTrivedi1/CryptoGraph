import React from "react";
import { Link } from "react-router-dom";
const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "INR" }) => (
  <Link to={`/coin/${id}`} target={"blank"}>
    <div
      className="w-64 shadow-2xl bg-main_color-200 flex flex-col
      transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-700
      items-center justify-center p-4 "
    >
      <div>
        <img src={img} className="w-10 object-contain h-10" alt="coin img" />
      </div>
      <h1 className="text-md text-main_color-600">
        <span className="text-main_color-800"></span>Symbol: {symbol}
      </h1>
      <p className="text-md text-main_color-600">
        Name: <span className="text-main_color-800">{name}</span>{" "}
      </p>
      <p className="text-md text-main_color-600">
        Price:{" "}
        <span className="text-main_color-800">
          {price ? `${currencySymbol}${price}` : "NA"}
        </span>{" "}
      </p>
    </div>
  </Link>
);
export default CoinCard;
