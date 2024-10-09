"use client";

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/ruqia-rehman-88707831b/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/rruqia",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com",
    name: <RiFacebookFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons &&
        icons.map((icon, key) => {
          return (
            <Link href={icon.path} key={key}>
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Socials;
