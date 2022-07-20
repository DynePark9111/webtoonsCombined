import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import {
  IoBookmarkOutline,
  IoChatbubbleEllipsesOutline,
  IoCogSharp,
  IoCompassOutline,
  IoFlagOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoTimeOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { NavContext } from "../context/navContext";
import styles from "../styles/Navbar.module.scss";
import LoginBtn from "./LoginBtn";

const Navbar: NextPage = () => {
  const { isNavOpen } = useContext(NavContext);
  return <>{isNavOpen ? <NavbarBig /> : <NavbarSmall />}</>;
};

const NavbarSmall: NextPage = () => {
  return (
    <aside className={styles.NavbarSmall}>
      <div className={styles.empty} />
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
      <div className={styles.empty} />
      <div className={styles.wrapper}>
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
          <NavbarItem
            href="/history"
            icon={<IoTimerOutline />}
            text="시청 기록"
          />
          <NavbarItem
            href="/watchlist?list=WL"
            icon={<IoTimeOutline />}
            text="나중에 볼 웹툰"
          />
          <NavbarItem
            href="/watchlist?list=LL"
            icon={<IoHeartOutline />}
            text="좋아요 표시한 웹툰"
          />
        </ul>
        <div className={styles.promo}>
          <div>
            로그인하면 웹툰에 좋아요를 표시하고 댓글을 달거나 구독할 수
            있습니다.
          </div>
          <LoginBtn />
        </div>
        <h4 className={styles.genre}>웹툰</h4>
        <ul>
          <NavbarItem href="/new" text="최신웹툰" />
          <NavbarItem href="/webtoons?category=ongoing" text="연재웹툰" />
          <NavbarItem href="/webtoons?category=completed" text="완결웹툰" />
          <NavbarItem href="/webtoons?category=adult" text="성인웹툰" />
          <NavbarItem href="/webtoons?category=BL/GL" text="BL/GL" />
        </ul>
        <ul>
          <NavbarItem href="/settings" icon={<IoCogSharp />} text="설정" />
          <NavbarItem
            href="/reporthistory"
            icon={<IoFlagOutline />}
            text="신고 기록"
          />
          <NavbarItem
            href="/customerservice"
            icon={<IoHelpCircleOutline />}
            text="고객센터"
          />
          <NavbarItem
            href="/message"
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
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <li
        className={styles.NavbarItem}
        id={href === asPath ? styles.selected : ""}
      >
        {icon}
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default Navbar;
