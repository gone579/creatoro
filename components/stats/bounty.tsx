import { Button } from "../ui/button";

export const BountyComponent = () => {
  return (
    <div className="w-full md:w-[580px] flex flex-col gap-[16px] ">
      <h1 className="text-base leading-[24px] font-bold">Bounty</h1>
      <div className="flex flex-col gap-5 justify-between border md:h-[160px] border-border-bottom px-[21px] py-[20.5px] bg-gradient-to-l from-[#6e25f54b] to-30% to-transparent">
        <p className="text-sm text-[#A6A4BC] font-regular">
          YES ! Enjoy effortless investing and share in the profits with a
          simple 13%
          <br />
          commission on gains.
        </p>
        <div className="flex flex-row justify-between ">
          <div>
            <h3 className="text-[21px] text-bold leading-[29px] text-[#F3EEFC]">
              CREATORO
            </h3>
            <p className="text-xs leading-[18px] text-[#A6A4BC]">
              Start investing smarter today.
            </p>
          </div>
          {/* <Button>Connect wallet</Button> */}
        </div>
      </div>
    </div>
  );
};
