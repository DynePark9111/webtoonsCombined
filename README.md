# Webtoons Combined

## About

Webtoons Combined is a webtoon metasearch engine. Webtoons Combined allows users to search and compare webtoon rates in one search. It also provides an aggregated summary of webtoon reviews and ratings from external sites.

## Features

- Crawl webtoons from websites
- Filter by genre, platform, age, updated date, etc
- Search by title and author
- Every Webtoon is linked to its official website
- Signup, Login with DB & oAuth
- Comment, Like, dislike, bookmark, watchHistory, etc

## Stack

- Nextjs (FE)
- Nodejs (BE)
- MongoDB (DB)

## Diagrams

|                      Version 1                       |                  Version 2(Current)                  |
| :--------------------------------------------------: | :--------------------------------------------------: |
| ![Diagram 1](./public/diagram/type1.png "Diagram 1") | ![Diagram 1](./public/diagram/type2.png "Diagram 2") |

## Website Images

|                    Homepage                     |                      Register                       |
| :---------------------------------------------: | :-------------------------------------------------: |
| ![Homepage](./public/demo/home.giff "Homepage") | ![Register](./public/demo/register.giff "Register") |

|                    Ads                    |                    Fitler                    |
| :---------------------------------------: | :------------------------------------------: |
| ![Detail](./public/demo/ads.png "Detail") | ![Search](./public/demo/filter.png "Search") |

## Get started

### frontend

1. git clone
2. yarn install
3. create .env file
4. start BE server [webtoonsCombinedBE](https://github.com/DynePark9111/webtoonsBE)
5. Crawl Webtoons from websites [crawling](https://github.com/DynePark9111/crawling)
6. yarn dev

## .env

1. get MONGODB_URI [MongoDB](https://cloud.mongodb.com/)

2. get keys from reCaptcha [reCaptcha v3](https://www.google.com/recaptcha/about/)

3. get ID and SECRET for oAuth[oAuth](https://next-auth.js.org/providers/)
   - [Naver](https://developers.naver.com/docs/login/api/api.md)
   - [Facebook](https://developers.facebook.com/apps/)
   - [Twitter](https://developer.twitter.com/en/apps)
   - [Google](https://console.developers.google.com/apis/credentials)
   - [Kakao](https://developers.kakao.com/docs/latest/en/kakaologin/common)
4. edit .env
   - ...
     X=[NAVER, FACEBOOK, GOOGLE, TWITTER, KAKAO]
   - X_KEY=`X_CLIENT_ID`
   - X_URI=`X_CLIENT_SECRET`

### .env file

```
NEXT_PUBLIC_COMPANY=
NEXT_PUBLIC_URL=
MONGODB_URI=
NEXT_PUBLIC_RECAPTCHA_SITE=
RECAPTCHA_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NAVER_CLIENT_ID=
NAVER_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
KAKAO_CLIENT_ID=
KAKAO_CLIENT_SECRET=
```
