import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <Image
      src={imgSrc}
      className={`${containerStyles}`}
      alt="ruqia-rehman-about"
      priority
    />
  );
};

export default DevImg;
