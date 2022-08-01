import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Webtoon/Images.module.scss";

type ImageProps = {
  image: string;
};

const Images: NextPage<ImageProps> = ({ image }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "/images/bg.jpg";
  const fallbackImageVertical = "/images/bg_vertical.webp";

  return (
    <div className={styles.Images}>
      <div
        className={styles.imageBackground}
        style={{
          backgroundImage: `url(${true ? image : fallbackImage})`,
        }}
      />
      <div className={styles.imagePoster}>
        <Image
          width={200}
          height={267}
          src={imageError ? fallbackImageVertical : image}
          alt="오버로드 3기_thumbnail"
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  );
};

export default Images;
