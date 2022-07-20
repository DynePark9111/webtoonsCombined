import { ReactNode } from "react";

export type webtoon = {
  _id: string;
  title: string;
  image: string;
  link: string;
  platform: "naver";
  episodeTitle: string;
  episodeLink: string;
  updatedAt: TimeRanges;
};

export type webtoonDetail = {
  author: string[];
  category: string;
  days: string[];
  first_episode_url: string;
  genre: string[];
  hates: number;
  likes: number;
  image: string;
  platform: string;
  publisher: string;
  synopsis: string;
  title: string;
  updated: Date;
  url: string;
  _id: string;
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
  selected: string[];
  setSelected: any;
};

export type NewtoonProps = {
  webtoon: webtoon;
};

export type NewToonsProps = {
  title: string;
  webtoons: any;
};

export type RibbonProps = {
  line1: string;
  line2?: string;
  href?: string;
};

export type HomeProps = {
  webtoons1: webtoon[];
  webtoons2: webtoon[];
};
