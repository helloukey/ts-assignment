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
    <div className="max-w-[290px] w-full h-fit relative rounded-3xl backdrop-blur-2xl p-4 bg-card border-l border-l-shade border-r border-r-shade shadow-sm mb-8">
      {/* Circle */}
      <div className="z-[1000] absolute rounded-full left-2/4 -translate-x-2/4 -top-20 backdrop-blur-2xl border-[10px] border-mybg bg-mybg2">
        <img
          src={icon}
          alt={coin}
          className={`rounded-full p-5 border-t border-t-shade ${background}`}
        />
        {/* circle bordering */}
        <div className="coining w-full h-full absolute p-14 bg-transparent -top-[13px] -left-[12px] rounded-full"></div>
      </div>

      {/* Left Curve */}
      <div className="absolute w-[95px] h-12 rounded-tl-3xl rounded-tr-3xl -left-[1px] -top-[22px] backdrop-blur-2xl bg-mybg2 border-t border-t-shade border-l border-l-shade"></div>
      {/* Right Curve */}
      <div className="absolute w-[95px] h-12 rounded-tl-3xl rounded-tr-3xl -right-[1px] -top-[22px] backdrop-blur-2xl bg-mybg2 border-t border-t-shade border-r border-r-shade"></div>

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
