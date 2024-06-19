import { Button } from "../ui/button";

const ListBen = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <li className="flex flex-col">
    <h5 className="font-bold text-xl ">{title}</h5>
    <p className="ml-5 relative text-lg font-normal">
      <span className="absolute top-[11px] -left-[14px] h-1 w-1 bg-[#fff] rounded-full" />
      {description}
    </p>
  </li>
);

export const BenefitsComponent = () => {
  return (
    <div id="price" className="max-w-screen-2xl">
      <div className="max-w-screen-xl mx-auto w-full flex md:flex-row flex-col gap-[50px] px-5 md:px-0">
        <div className="flex flex-col gap-[40px] w-full">
          <h1 className="font-bold text-[40px] leading-[39px]">
            Why Choose Our Platform?
          </h1>
          <ul className="flex flex-col gap-5">
            <ListBen
              title="Proven Track Record"
              description="Our AI has consistently delivered positive returns, ensuring a
                reliable and profitable investing experience."
            />
            <ListBen
              title="Comprehensive Analytics"
              description="By integrating with Dexscleaner, Zerion, and Arkham, our platform provides unparalleled insights and analytics, empowering our AI to make the best investment decisions."
            />
            <ListBen
              title="User-Friendly Interface"
              description="Manage your investments with ease using our intuitive and user-friendly platform. Whether you are a seasoned investor or new to the crypto world, our platform is designed to meet your needs."
            />
            <ListBen
              title="Security and Transparency"
              description="We prioritize the security of your assets and provide transparent reporting on all transactions and performance metrics."
            />
          </ul>
        </div>
        <div className="w-full flex flex-col gap-[30px]">
          <h1 className="font-bold text-[40px] leading-[39px]">
            No subscription required
          </h1>
          <div className="max-h-[481px] flex flex-col items-center justify-center h-full w-full px-[55px] py-[63px] gap-[60px] bg-gradient-to-l to-[#6e25f54b] from-30% from-transparent">
            <div className="text-center">
              <h1 className="font-bold md:text-[200px] text-[120px] leading-[130px] md:leading-[200px] text-primary">
                13%
              </h1>
              <h3 className="md:text-[30px] text-[20px] leading-[30px]">
                commission on gains.
              </h3>
            </div>
            <div className="md:px-0 px-5 flex flex-col gap-[10px] items-center">
              <Button>START NOW</Button>
              <p className="text-base font-normal text-[#D9D7F4]">
                1 USDT to verify your account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
