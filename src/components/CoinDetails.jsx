import React from "react";
import Loader from "./Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "./Error";
import { server } from "../index";
const CoinDetails = () => {
  const [coin, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams();
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        // console.log(data);
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [params]);

  if (error) return <Error />;

  return (
    <div>
      <div className="max-w-xl">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-xl">
            <div className="w-full border-1"></div>
          </div>
        )}
      </div>

      <div className="max-w-lg mx-auto " value={currency} onChange={setCurrency}>
        <div className="mb-5">
          <div className="flex items-center mb-4">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="inr"
              class="h-4 w-4 border-main_color-800 focus:ring-2 focus:ring-main_color-800"
            />
            <label
              for="country-option-1"
              class="text-sm font-medium text-main_color-800 ml-2 block"
            >
              INR
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="usd"
              class="h-4 w-4 border-main_color-800 focus:ring-2 focus:ring-main_color-800"
            />
            <label
              for="country-option-2"
              className="text-sm font-medium text-main_color-800 ml-2 block"
            >
              USD
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="country-option-3"
              type="radio"
              name="countries"
              value="eur"
              class="h-4 w-4 border-main_color-800 focus:ring-2 focus:ring-main_color-800"
            />
            <label
              for="country-option-3"
              className="text-sm font-medium text-main_color-800 ml-2 block"
            >
              EURO
            </label>
          </div>
        </div>
      </div>

{/* Main Part OF making The Graph */}

<div className="p-16 flex justify-center flex-start">

<p className="text-sm text-gray-600 items-center opacity-50">
  Last Updated On {Date().split("G")[0]}
</p>

{/* <img  src={coin.image.} className="w-16 h-16 object-contain" alt="coin Image"/> */}

 


</div>





    </div>
  );
};

export default CoinDetails;
