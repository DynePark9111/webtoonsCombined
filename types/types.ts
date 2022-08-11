import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";

export type webtoon = {
  _id: string;
  title: string;
  image: string;
  link: string;
  platform: string;
  episodeTitle: string;
  episodeLink: string;
  updatedAt: Date | string;
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

export type createAlertContextType = {
  alert: {};
  setAlert: any;
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
  data: {
    meta: any;
    webtoons: webtoon[];
  };
};

export type CardsProps = {
  webtoons: webtoon[];
};

export type CardProps = {
  card: {
    id: number;
    title: string;
    link: string;
    icon?: string;
  };
};

export type FilterSlideStyleProps = {
  array: { id: number; name: string }[];
  selected: number;
  setSelected: any;
};

export type EllipsisButtonP = {
  webtoon_id: string;
};

export type filterCategoryT = {
  uploaded: string;
  platform: string;
  genre: string;
  day: string;
  orderBy: string;
  page: number;
};

export type FilterYoutubeStyleProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  filterCategory: filterCategoryT;
  setFilterCategory: (arg: filterCategoryT) => void;
};

export type FilterGroupProps = {
  title: string;
  category: string;
  options: string[];
  filterCategory: any;
  setFilterCategory: (arg: filterCategoryT) => void;
};

//new
export type SampleWebtoon = {
  title: string;
  episode: string;
  genre: string[];
};

export type SampleNewProps = {
  webtoons: SampleWebtoon[];
};
export type SampleCardProps = {
  webtoon: SampleWebtoon;
};

export type MessageProps = {
  message: {
    id: string;
    message: string;
    status: "normal" | "success" | "warning" | "error";
  };
};

export type webtoonP = {
  webtoon: {
    _id: string;
    title: string;
    category: string;
    image: string;
    url: string;
    platform: string;
    author: string[];
    genre: string[];
    days: string[];
    synopsis: string;
    age: string;
    first_episode_url: string;
    updated: Date;

    likes?: number;
    hates?: number;
    publisher?: string;

    bookmark?: number;
    view?: number;
    rating?: number;
  };
};

//Interface
export interface IParams extends ParsedUrlQuery {
  id: string;
}
