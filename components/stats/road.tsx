import Image from "next/image";

const Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col">
    <h1 className="text-[21px] leading-[29px] font-bold">{title}</h1>
    <p className="uppercase text-xs leading-[18px] font-normal text-[#A6A4BC]">
      {description}
    </p>
  </div>
);

export const RoadComponent = () => {
  return (
    <div className="w-full md:w-[580px] flex flex-col gap-[16px] ">
      <h1 className="text-base leading-[24px] font-bold">Road</h1>
      <div className="flex flex-row gap-5 justify-between border md:h-[160px] border-border-bottom px-[21px] py-[20.5px] bg-gradient-to-l from-[#6e25f54b] to-30% to-transparent">
        <div className="flex flex-col justify-between">
          <Content title="0 %" description="NEWBIE IN CREATORO" />
          <Content title="400 %" description="AFTER 1 MONTH IN CREATORO" />
        </div>
        <Image
          src="priceUp.svg"
          alt="price up"
          className="max-w-[150px] md:max-w-[260px]"
          width={260}
          height={84}
        />
      </div>
    </div>
  );
};
