import Link from "next/link";
const Links = [
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

export const LinkHeader = () => {
  return (
    <div className="hidden h-full md:flex flex-row gap-6">
      {Links.map((item) => {
        return (
          <li
            className={`uppercase text-base relative font-normal `}
            key={item.label}
          >
            <Link href={item.href} className="cursor-pointer">
              {item.label}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
