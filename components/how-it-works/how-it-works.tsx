const HowIsIt = ({ number, title }: { number: string; title: string }) => (
  <div
    className={`flex flex-row items-center ${
      number === "1" ? "gap-6" : "gap-3"
    }   md:gap-1 md:w-full w-[300px] mx-auto md:mx-0`}
  >
    <h1 className="text-[130px] leading-[48px] font-bold">{number}</h1>
    <div className="bg-gradient-to-r from-transparent from-50% to-[#8446f03c] w-full h-[100px] flex items-center">
      <h1 className="leading-[28px] text-[20px] font-medium uppercase max-w-20">
        {title}
      </h1>
    </div>
  </div>
);

export const HowItWorksComponent = () => {
  return (
    <div id="how" className="max-w-screen-2xl ">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col gap-10 md:gap-[70px]">
        <h1 className="text-[70px] text-left md:px-0 px-5 md:text-[40px] leading-[70px] md:leading-[39px] font-bold">
          How It Works ?
        </h1>
        <div className="flex flex-col gap-[50px]">
          <div className="flex md:flex-nowrap flex-wrap flex-row gap-5  md:gap-[10px]">
            <HowIsIt number="1" title="Connect Your Wallet" />
            <HowIsIt number="2" title="Accept the Fees" />
            <HowIsIt number="3" title="Allocate a % to invest" />
            <HowIsIt number="4" title="Set Your Investment Duration" />
            <HowIsIt number="5" title="Watch the AI Work" />
          </div>
          <h5 className="text-[20px] md:p-0 px-5">
            Watch the tutorial video when you connect to understand how to set
            up and use CREATORO efficiently.
          </h5>
        </div>
      </div>
    </div>
  );
};
