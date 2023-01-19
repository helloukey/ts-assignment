// components
import Card from "../components/Card";
import Header from "../components/Header";

// coins icons
import bitcoinIcon from "../assets/coins/bitcoin.svg";
import solanaIcon from "../assets/coins/solana.svg";
import ethereumIcon from "../assets/coins/ethereum.svg";
import binanceIcon from "../assets/coins/binance.svg";
import shibaIcon from "../assets/coins/shiba.svg";

type Props = {}

const Main = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Header */}
      <Header />
      {/* Cards */}
      <div className="w-full flex flex-nowrap gap-16">
        <Card
          coin={"bitcoin"}
          shortName={"BTC"}
          icon={bitcoinIcon}
          rate={"31,812.80"}
          rateType={"profit"}
          ratePercentage={"10"}
          pair1={solanaIcon}
          pair2={ethereumIcon}
          pair3={binanceIcon}
          background="bitcoin"
        />
        <Card
          coin={"solana"}
          shortName={"SOL"}
          icon={solanaIcon}
          rate={"32.83"}
          rateType={"loss"}
          ratePercentage={"12.32"}
          pair1={bitcoinIcon}
          pair2={ethereumIcon}
          pair3={binanceIcon}
          background="solana"
        />
        <Card
          coin={"ethereum"}
          shortName={"ETH"}
          icon={ethereumIcon}
          rate={"1,466.45"}
          rateType={"loss"}
          ratePercentage={"11.93"}
          pair1={solanaIcon}
          pair2={bitcoinIcon}
          pair3={binanceIcon}
          background="ethereum"
        />
        <Card
          coin={"binance USD"}
          shortName={"BUSD"}
          icon={binanceIcon}
          rate={"1.00"}
          rateType={"profit"}
          ratePercentage={"0.26"}
          pair1={solanaIcon}
          pair2={ethereumIcon}
          pair3={binanceIcon}
          background="binance"
        />
        <Card
          coin={"shiba inu"}
          shortName={"SHIB"}
          icon={shibaIcon}
          rate={"0.00000001948"}
          rateType={"loss"}
          ratePercentage={"8.1"}
          pair1={solanaIcon}
          pair2={ethereumIcon}
          pair3={binanceIcon}
          background="shiba"
        />
      </div>
    </div>
  );
};

export default Main;
