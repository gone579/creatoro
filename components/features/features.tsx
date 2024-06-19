import { Button } from "../ui/button";

const ListFeatures = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <li className="w-full flex flex-col px-5 md:flex-row gap-2 md:gap-5">
    <div className="w-full md:w-[300px] py-[10px] bg-gradient-to-r from-transparent from-50% flex items-center  to-[#4a288a4d]">
      <p className="max-w-[85%] md:text-[30px] text-[25px] font-bold leading-[39px]">
        {title}
      </p>
    </div>
    <div className="w-full py-[10px] bg-gradient-to-r from-transparent from-60% flex items-center to-[#4a288a4d]">
      <p className="leading-[27px] md:text-xl text-base font-regular md:max-w-[75%]">
        {description}
      </p>
    </div>
  </li>
);

export const FeaturesComponent = () => {
  return (
    <div id="features" className="max-w-screen-2xl">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col gap-[50px]">
        <h1 className="md:text-[40px] text-[55px] md:px-0 px-5 font-bold md:leading-[39px] leading-[45px]">
          Features and Integrations
        </h1>
        <ul className="flex flex-col md:gap-5 gap-10">
          <ListFeatures
            title="Crypto Wallets"
            description="Software Wallets: MetaMask, Trust Wallet, Coinbase Wallet, and
                all others. Hardware Wallets: Ledger, Trezor, and all others."
          />
          <ListFeatures
            title="Exchanges"
            description="Centralized Exchanges (CEX): Binance, Coinbase, Kraken. Decentralized Exchanges (DEX): Uniswap, PancakeSwap, SushiSwap."
          />
          <ListFeatures
            title="Market Analysis Tools"
            description="Technical Analysis: TradingView. On-Chain Analysis: Glassnode, Santiment."
          />
          <ListFeatures
            title="Community and News Platforms"
            description="Social Media: Twitter, Reddit (r/cryptocurrency, r/memecoins). News Sites: CoinDesk, CoinTelegraph, Decrypt."
          />
          <ListFeatures
            title="Risk Management Tools"
            description="Portfolio Diversification: Investments across various assets to minimize risk. Orders level: Automatically sell assets at a predetermined price."
          />
          <ListFeatures
            title="Regulatory and Tax Tools"
            description="Tax Calculators: CoinTracking, CryptoTrader.Tax. Legal Advice: Chat online with the legal experts on our team helps you."
          />
        </ul>
        <div className="md:px-0 px-5 flex flex-row gap-[10px] items-center">
          <Button>START NOW</Button>
          <p className="text-[10px] font-normal text-[#D9D7F4]">
            1 USDT to verify your account
          </p>
        </div>
      </div>
    </div>
  );
};
