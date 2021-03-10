const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const moneyFormat = (val) => {
    //function to format large numbers
    return Math.abs(Number(val)) >= 1.0e9
      ? Math.abs(Number(val)) / 1.0e9 + "B" // to billion/million..etc
      : Math.abs(Number(val)) >= 1.0e6
      ? Math.abs(Number(val)) / 1.0e6 + "M"
      : Math.abs(Number(val)) >= 1.0e3
      ? Math.abs(Number(val)) / 1.0e3 + "K"
      : Math.abs(Number(val));
  };
  const shortVol = parseFloat(volume).toPrecision(3); //rounds numbers to 3 dec
  const shortCap = parseFloat(marketcap).toPrecision(3);
  const vol = moneyFormat(shortVol);
  const cap = moneyFormat(shortCap);
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          {/*LocaleString adds commas to numbers (for UX)*/}
          <p className="coin-price">£{price.toLocaleString()}</p>
          <p className="coin-volume">£{vol}</p>
          {priceChange < 0 /*allows us to distinguish +/- numbers*/ ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">£{cap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
