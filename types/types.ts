import { ReactNode } from "react";

export type webtoons = {
  _id: string;
  title: string;
  image: string;
  link: string;
  platform: "naver";
  episodeTitle: string;
  episodeLink: string;
  updatedAt: TimeRanges;
};

export type createNavContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
};

export type childrenProps = {
  children: ReactNode;
};

export type filter = {
  id: number;
  name: string;
};

export type FilterProps = {
  array: filter[];
  selected: number[];
  setSelected: any;
};

export type CardProps = {
  webtoon: webtoons;
};

export type CardsProps = {
  title: string;
  webtoons: webtoons[];
};

export type RibbonProps = {
  line1: string;
  line2?: string;
  href?: string;
};
