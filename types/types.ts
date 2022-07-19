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
