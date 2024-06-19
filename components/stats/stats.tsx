import { BountyComponent } from "./bounty";
import { RoadComponent } from "./road";

export const StateComponent = () => {
  return (
    <div
      id="why"
      className="max-w-screen-2xl flex md:flex-row flex-col justify-center gap-5 px-5"
    >
      <BountyComponent />
      <RoadComponent />
    </div>
  );
};
