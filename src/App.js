import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins([...json]);
        setLoading(false);
      });
  }, []);
  const onChange = (e) => setAmount(e.target.value);
  const getShare = (price) => {
    return amount / Math.round(price);
  };
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <b>Loading ...</b>
      ) : (
        <>
          <label htmlFor="amount">How many do you have in USD</label>
          <br />
          <input type="number" id="amount" value={amount} onChange={onChange} />
          <hr />
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): $
                {Math.round(coin.quotes.USD.price)} USD (can buy about{" "}
                {getShare(coin.quotes.USD.price)} {coin.symbol})
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default App;
