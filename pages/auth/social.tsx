import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Pages/authpages/Social.module.scss";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { oAuthArray } from "../../data/arrays";

const Social: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.Social}>
      {oAuthArray.map((i) => (
        <OauthBtn
          key={i.id}
          icon={`/platform/oAuth/${i.icon}`}
          platform={i.text}
          onClick={() => signIn(i.platform)}
        />
      ))}
      <Link href="/auth">
        <button className={styles.link}>돌아가기</button>
      </Link>
      {session && (
        <button onClick={() => signOut()}>
          {session?.user?.name} 로그아웃
        </button>
      )}
    </div>
  );
};

export default Social;

type OauthBtnP = {
  icon: string;
  platform: string;
  onClick?: () => void;
};

const OauthBtn: NextPage<OauthBtnP> = ({ icon, platform, onClick }) => {
  return (
    <div className={styles.OauthBtn} onClick={onClick}>
      <div className={styles.icon}>
        <Image width={24} height={24} src={icon} alt={`${platform} icon`} />
      </div>
      <div>{platform} 계속하기</div>
    </div>
  );
};
