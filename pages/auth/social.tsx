import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Pages/authpage/Social.module.scss";
import Image from "next/image";

const Social: NextPage = () => {
  return (
    <div className={styles.Social}>
      <OauthBtn icon="/platform/oAuth/facebook.svg" platform="페이스북으로" />
      <OauthBtn icon="/platform/oAuth/twitter.svg" platform="트위터로" />
      <OauthBtn icon="/platform/oAuth/google.svg" platform="구글로" />
      <OauthBtn icon="/platform/oAuth/kakao.svg" platform="카카오로" />
      <OauthBtn icon="/platform/oAuth/apple.svg" platform="Apple로" />
      <Link href="/auth">
        <button className={styles.link}>돌아가기</button>
      </Link>
    </div>
  );
};

export default Social;

type OauthBtnP = {
  icon: string;
  platform: string;
};

const OauthBtn: NextPage<OauthBtnP> = ({ icon, platform }) => {
  return (
    <div className={styles.OauthBtn}>
      <div className={styles.icon}>
        <Image width={24} height={24} src={icon} alt={`${platform} icon`} />
      </div>
      <div>{platform} 계속하기</div>
    </div>
  );
};
