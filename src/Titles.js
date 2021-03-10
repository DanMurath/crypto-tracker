import titleItems from "./titleItems";

const Titles = () => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin title">
          <p>{titleItems.coin}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{titleItems.price}</p>
          <p className="coin-volume">{titleItems.vol}</p>
          <p className="coin-percent">{titleItems.priceChange}</p>
          <p className="coin-marketcap">{titleItems.cap}</p>
        </div>
      </div>
    </div>
  );
};

export default Titles;
