// props
type CardProps = {
  coin: string;
  shortName: string;
  icon: string;
  rate: string;
  rateType: string;
  ratePercentage: string;
  pair1: string;
  pair2: string;
  pair3: string;
  background: string;
};

const Card = ({
  coin,
  shortName,
  icon,
  rate,
  rateType,
  ratePercentage,
  pair1,
  pair2,
  pair3,
  background,
}: CardProps) => {
  return (
    <div className="w-full h-fit relative rounded-3xl backdrop-blur-2xl p-4 card">
      {/* Circle */}
      <div className="absolute rounded-full left-2/4 -translate-x-2/4 -top-20 backdrop-blur-2xl border-[10px] border-mybg curve">
        <img
          src={icon}
          alt={coin}
          className={`rounded-full p-5 ${background}-background highlight-top`}
        />
      </div>

      {/* Left Curve */}
      <div className="absolute w-[96.5px] h-12 rounded-tl-3xl rounded-tr-3xl left-0 -top-[22px] backdrop-blur-2xl curve"></div>
      {/* Right Curve */}
      <div className="absolute w-[96.5px] h-12 rounded-tl-3xl rounded-tr-3xl right-0 -top-[22px] backdrop-blur-2xl curve"></div>

      {/* demo */}

      <div className="flex flex-col gap-2">
        {/* Coin Name */}
        <h2 className="mt-5 text-center text-xs font-semibold leading-8 text-secondary capitalize">
          {coin} ({shortName})
        </h2>

        {/* Price */}
        <div className="w-11/12 flex gap-4 items-center justify-center p-2 rounded-full bg-mybg mx-auto pricebox">
          <p className="font-semibold text-base text-primary">${rate}</p>
          <p
            className={`font-semibold text-xs ${
              rateType === "profit" ? "text-positive" : "text-negative"
            }`}
          >
            {rateType === "profit" ? "+" : "-"}
            {ratePercentage}%
          </p>
        </div>

        {/* Price2 */}
        <p className="text-center text-xs font-semibold leading-8 text-teritary">
          Price
        </p>

        {/* Price3 */}
        <div className="w-11/12 flex gap-4 items-center justify-center p-2 rounded-full bg-mybg mx-auto pricebox">
          <p className="font-semibold text-base text-primary">$60,000</p>
        </div>

        {/* TVL */}
        <p className="text-center text-xs font-semibold leading-8 text-teritary">
          TVL
        </p>

        {/* Pairs */}
        <div className="w-fit flex flex-nowrap gap-4 items-center mx-auto py-2 px-4 rounded-full bg-mybg">
          <img src={pair1} alt="pair1" className="w-6 h-6" />
          <img src={pair2} alt="pair2" className="w-6 h-6" />
          <img src={pair3} alt="pair3" className="w-6 h-6" />
        </div>

        {/* Pairs2 */}
        <p className="text-center text-xs font-semibold leading-8 text-teritary">
          Popular pairs
        </p>
      </div>
    </div>
  );
};

export default Card;
