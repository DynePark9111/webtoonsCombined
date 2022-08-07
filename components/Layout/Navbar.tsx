import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import {
  IoBookmarkOutline,
  IoChatbubbleEllipsesOutline,
  IoCogSharp,
  IoCompassOutline,
  IoEyeOffOutline,
  IoFlagOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoTimeOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { NavContext } from "../../context/navContext";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/Layout/Navbar.module.scss";
import LoginBtn from "./LoginBtn";

const Navbar: NextPage = () => {
  const { isNavOpen } = useContext(NavContext);
  return (
    <aside className={styles.Navbar}>
      {isNavOpen ? <NavbarBig /> : <NavbarSmall />}
    </aside>
  );
};

const NavbarSmall: NextPage = () => {
  return (
    <div className={styles.NavbarSmall}>
      <ul>
        <NavbarItem href="/" icon={<IoHomeOutline />} text="홈" />
        <NavbarItem href="/explore" icon={<IoCompassOutline />} text="탐색" />
        <NavbarItem
          href="/bookmark"
          icon={<IoBookmarkOutline />}
          text="북마크"
        />
        <NavbarItem href="/history" icon={<IoTimerOutline />} text="시청기록" />
        <NavbarItem href="/settings" icon={<IoCogSharp />} text="설정" />
      </ul>
    </div>
  );
};

const NavbarBig: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";
  const { user } = useContext(UserContext);
  return (
    <div className={styles.NavbarBig}>
      <div className={styles.wrapper}>
        <ul>
          <NavbarItem href="/" icon={<IoHomeOutline />} text="홈" />
          <NavbarItem href="/explore" icon={<IoCompassOutline />} text="탐색" />
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
          {/* <NavbarItem
            href="/watchlist?list=LL"
            icon={<IoHeartOutline />}
            text="좋아요 표시한 웹툰"
          /> */}
          <NavbarItem
            href="/hidden"
            icon={<IoEyeOffOutline />}
            text="숨긴 웹툰"
          />
        </ul>
        {user.username === undefined && (
          <div className={styles.promo}>
            <div>
              로그인하면 웹툰에 좋아요를 표시하고 댓글을 달거나 구독할 수
              있습니다.
            </div>
            <LoginBtn />
          </div>
        )}
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
            href="/report"
            icon={<IoChatbubbleEllipsesOutline />}
            text="의견 보내기"
          />
        </ul>
        <div className={styles.links}>
          <Link href="/about">정보</Link>
          <Link href="/report">문의하기</Link>
          <Link href="/ad">광고</Link>
          <Link href="/dev">개발자</Link>
          <Link href="/test">실험실</Link>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={`http://admin.dynedyne.com/`}
          >
            관리자
          </a>
        </div>
        <div className={styles.links}>
          <Link href="/policy/terms">약관</Link>
          <Link href="/policy/privacy">개인정보처리방침</Link>
          <Link href="/policy/teenager">청소년보호정책</Link>
        </div>
        <div className={styles.copyright}>
          <div>© 2022 {COMPANY} LLC</div>
          <div>CEO : Muhammad Bean Salmon Al Thaad</div>
          <div>
            주소 : 1234 Conch St. Bikini Bottom, Mountain View, San Pedro 1234,
            Paraguay.
          </div>
          <div>전화: 000-0000-0000(유료)</div>
        </div>
      </div>
    </div>
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
