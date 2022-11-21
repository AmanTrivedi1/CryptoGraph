import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        // console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  if (error) return <Error />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-main_color-600 text-4xl font-bold uppercase mt-2 ml-2">
            Top Exchanged Coins
          </h1>
          <div className="flex flex-wrap bg-main_color-600 w-10/12 border-b-2 border-main_color-200 m-auto pt-20  justify-center gap-8 items-center">
            {exchanges.map((i) => (
              <ExchangesCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const ExchangesCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <div
      className="w-64 shadow-2xl bg-main_color-200 flex flex-col
    transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-700
    items-center justify-center p-4 "
    >
      <div>
        <img src={img} className="w-10 object-contain h-10" alt="coin img" />
      </div>
      <h1 className="text-md text-main_color-600">
        <span className="text-main_color-800">CoinRank</span> {rank}
      </h1>
      <p className="text text-main_color-600 ">
        {" "}
        <span className="text-main_color-800"></span>
        {name}
      </p>
    </div>
  </a>
);

export default Exchanges;
