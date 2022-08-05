//User Context
export type userType = {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  bookmark: string[] | undefined;
  watchLater?: string[] | undefined;
  likedWebtoon?: string[] | undefined;
};

type LoginAction = {
  type: "LOGIN";
  payload: userType;
};

type LogoutAction = {
  type: "LOGOUT";
};

type BookmarkAction = {
  type: "PUT_BOOKMARK";
  payload: { bookmark: string[] };
};
type WatchLaterAction = {
  type: "PUT_WATCHLATER";
  payload: { watchLater: string[] };
};
type LikedWebtoonAction = {
  type: "PUT_LIKEDWEBTOON";
  payload: { likedWebtoon: string[] };
};

export type AuthAction =
  | LoginAction
  | LogoutAction
  | BookmarkAction
  | WatchLaterAction
  | LikedWebtoonAction;

export type UserContextType = {
  user: userType;
  login: (
    _id: string,
    username: string,
    email: string,
    bookmark: string[],
    watchLater: string[],
    likedWebtoon: string[]
  ) => void;
  logout: () => void;
  checkUser: () => void;
  handleBookmark: (bookmark: string) => void;
  handleWatchLater: (watchLater: string) => void;
  handleLikedWebtoon: (likedWebtoon: string) => void;
};

//
