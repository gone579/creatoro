import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
const Linkhrefs = [
  {
    label: "introduction",
    href: "#intro",
  },
  {
    label: "why",
    href: "#why",
  },
  {
    label: "price",
    href: "#price",
  },
  {
    label: "how",
    href: "#how",
  },
  {
    label: "features",
    href: "#features",
  },
  {
    label: "terms",
    href: "#terms",
  },
];

export const FooterComponent = () => {
  return (
    <div id="terms" className="max-w-screen-2xl mb-10">
      <div className="w-full mx-auto max-w-screen-xl flex gap-[50px] flex-col md:flex-row justify-between items-center">
        <ul className="flex md:flex-row flex-wrap px-5 md:p-0 gap-10 ">
          {Linkhrefs.map((item) => (
            <Link key={item.label} href={item.href}>
              <li className="uppercase">{item.label}</li>
            </Link>
          ))}
        </ul>
        <Image src="/icons.svg" alt="icons" width={320} height={20} />
      </div>
    </div>
  );
};
