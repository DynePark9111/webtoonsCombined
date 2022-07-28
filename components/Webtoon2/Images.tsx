import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Webtoon2/Images.module.scss";

type ImageProps = {
  image: string;
};

const Images: NextPage<ImageProps> = ({ image }) => {
  return (
    <div className={styles.Images}>
      <div
        className={styles.imageBackground}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={styles.imagePoster}>
        <Image
          width={200}
          height={267}
          src={image}
          alt="오버로드 3기_thumbnail"
        />
      </div>
    </div>
  );
};

export default Images;
