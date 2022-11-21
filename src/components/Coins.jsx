import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinsCard";

const Coins = () => {
  // const [exchanges, setExchanges] = useState([]);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "INR" : currency === "eur" ? "Eur" : "$";

const changePage =(page) =>{
  setPage(page);
  setLoading(true);
}

const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
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
  }, [currency, page]);

  if (error) return <Error />;

  return (
    <div className="scrollbar-none" >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" flex flex-wrap overflow-y-auto h-screen 
          scrollbar-thin scrollbar-none scrollbar-thumb-main_color-800 scrollbar-track-main_color-1000 
          bg-main_color-600 w-10/12 border-b-2  m-auto pt-20  justify-center gap-8 items-center">
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>

<div className="  h-32 scrollbar-thin scrollbar-thumb-main_color-800 scrollbar-track-main_color-1000  scroll-smooth   w-1/5 mx-auto flex items-center p-8 overflow-x-auto ">
  {
  btns.map((item , index)=>(
<button className="btn ml-2    bg-main_color-600 pt-1 pb-1 pl-2 pr-2
              transition ease-in-out text-main_color-200  rounded-sm hover:-translate-y-1 hover:scale-110  duration-300
"
onClick={()=>changePage(index+1)}
>
{index+1}
</button>
 
    ))
  }
</div>








        </>
      )}
    </div>
  );
};

export default Coins;
