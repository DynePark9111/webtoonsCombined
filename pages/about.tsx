import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";

  return (
    <div className={styles.About}>
      <Image
        width={3000}
        height={1373}
        src="/images/background.webp"
        alt="background image"
      />
      <div className={styles.content}>
        <h1>About {COMPANY}</h1>
        <p>Our mission is to give everyone a voice and show them the world.</p>
        <p>
          We believe that everyone deserves to have a voice, and that the world
          is a better place when we listen, share and build community through
          our stories.
        </p>
      </div>
    </div>
  );
};

export default About;
