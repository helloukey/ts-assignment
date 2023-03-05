import trendingIcon from "../assets/trending.svg";

type Props = {};
const Header = (props: Props) => {
  return (
    <header className="w-full flex items-center gap-4 mb-32">
      <img src={trendingIcon} alt="trending-icon" className="w-5 h-5" />
      <h1 className="text-trending text-base font-semibold leading-8">
        Trending Assets
      </h1>
    </header>
  );
};
export default Header;
