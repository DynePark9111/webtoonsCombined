import type { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import {
  IoAddCircleOutline,
  IoBookmarkOutline,
  IoChatbubbleEllipsesOutline,
  IoCogSharp,
  IoCompassOutline,
  IoFlagOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoTimerOutline,
} from "react-icons/io5";
import styles from "../styles/Navbar.module.scss";
import LoginBtn from "./LoginBtn";

const Navbar: NextPage = () => {
  return (
    <>
      {/* <NavbarSmall /> */}
      <NavbarBig />
    </>
  );
};

const NavbarSmall: NextPage = () => {
  return (
    <aside className={styles.NavbarSmall}>
      <ul>
        <NavbarItem href="/" icon={<IoHomeOutline />} text="홈" />
        <NavbarItem href="/search" icon={<IoCompassOutline />} text="탐색" />
        <NavbarItem
          href="/bookmark"
          icon={<IoBookmarkOutline />}
          text="북마크"
        />
        <NavbarItem href="/history" icon={<IoTimerOutline />} text="시청기록" />
        <NavbarItem href="/settings" icon={<IoCogSharp />} text="설정" />
      </ul>
    </aside>
  );
};

const NavbarBig: NextPage = () => {
  return (
    <aside className={styles.NavbarBig}>
      <ul>
        <NavbarItem href="/" icon={<IoHomeOutline />} text="홈" />
        <NavbarItem href="/search" icon={<IoCompassOutline />} text="탐색" />
        <NavbarItem
          href="/bookmark"
          icon={<IoBookmarkOutline />}
          text="북마크"
        />
      </ul>
      <ul>
        <NavbarItem href="/history" icon={<IoTimerOutline />} text="시청기록" />
        <NavbarItem href="/settings" icon={<IoCogSharp />} text="설정" />
      </ul>
      <div className={styles.promo}>
        <div>
          로그인하면 웹툰에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
        </div>
        <LoginBtn />
      </div>
      <h4 className={styles.genre}>인기 장르</h4>
      <ul>
        <NavbarItem href="/" text="액션" />
        <NavbarItem href="/" text="로맨스" />
        <NavbarItem href="/" text="드라마" />
        <NavbarItem href="/" text="판타지" />
        <NavbarItem href="/" text="성인" />
        <NavbarItem href="/" text="BL/GL" />
      </ul>
      <ul>
        <NavbarItem href="/" icon={<IoAddCircleOutline />} text="웹툰 탐색" />
      </ul>
      <ul>
        <NavbarItem href="/settings" icon={<IoCogSharp />} text="설정" />
        <NavbarItem
          href="/settings"
          icon={<IoFlagOutline />}
          text="신고 기록"
        />
        <NavbarItem
          href="/settings"
          icon={<IoHelpCircleOutline />}
          text="고객센터"
        />
        <NavbarItem
          href="/settings"
          icon={<IoChatbubbleEllipsesOutline />}
          text="의견 보내기"
        />
      </ul>
      <div className={styles.links}>
        <Link href="/">정보</Link>
        <Link href="/">보도자료</Link>
        <Link href="/">저작권</Link>
        <Link href="/">문의하기</Link>
        <Link href="/">크리에이터</Link>
        <Link href="/">광고</Link>
        <Link href="/">개발자</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">약관</Link>
        <Link href="/">개인정보처리방침</Link>
        <Link href="/">정책 및 안전</Link>
        <Link href="/">사이트 작동의 원리</Link>
        <Link href="/">새로운 기능 테스트하기</Link>
      </div>
      <div className={styles.copyright}>
        <div>© 2022 Google LLC</div>
        <div>CEO: 선다 피차이</div>
        <div>
          주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </div>
        <div>전화: 080-822-1450(무료)</div>
      </div>
    </aside>
  );
};

type NavbarItemType = {
  href: string;
  text: string;
  icon?: ReactNode;
};

const NavbarItem: NextPage<NavbarItemType> = ({ href, icon, text }) => {
  return (
    <Link href={href}>
      <li className={styles.NavbarItem}>
        {icon}
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default Navbar;
