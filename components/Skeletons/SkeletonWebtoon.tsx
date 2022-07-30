import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonWebtoon: NextPage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.SkeletonWebtoon}>
        <Shimmer />
        <div className={styles.top}>
          {/* Images */}
          <div className={styles.Images}>
            <div className={styles.imagePoster}>
              <SkeletonElement type={styles.image} />
            </div>
          </div>
          {/* Icons */}
          <nav className={styles.Icons}>
            <SkeletonElement type={styles.svg} />
            <SkeletonElement type={styles.svg} />
          </nav>
          <div className={styles.about}>
            {/* Header */}
            <header className={styles.Header}>
              <ul className={styles.badges}>
                <li className={styles.rating}>
                  <SkeletonElement type={styles.text} />
                </li>
                <li className={styles.category}>
                  <SkeletonElement type={styles.text} />
                </li>
              </ul>
              <h1 className={styles.title}>
                <SkeletonElement type={styles.title} />
              </h1>
              <div className={styles.tags}>
                <div className={styles.genre}>
                  <SkeletonElement type={styles.text} />
                </div>
                <div className={styles.genre}>
                  <SkeletonElement type={styles.text} />
                </div>
              </div>
            </header>
            {/* Detail */}
            <div className={styles.Detail}>
              <div className={styles.links}>
                <a className={styles.url}>
                  <SkeletonElement type={styles.circle} />
                  <span>
                    <SkeletonElement type={styles.empty} />
                  </span>
                </a>
                <a className={styles.firstEpisode}>
                  <SkeletonElement type={styles.empty} />
                  <span>
                    <SkeletonElement type={styles.empty} />
                  </span>
                </a>
              </div>
              <div className={styles.section}>
                <div className={styles.left}>
                  <div className={styles.synopsis}>
                    <SkeletonElement type={styles.paragraph} />
                  </div>
                  <div className={styles.Tags}>
                    <li>
                      <SkeletonElement type={styles.text} />
                    </li>
                    <li>
                      <SkeletonElement type={styles.text} />
                    </li>
                    <li>
                      <SkeletonElement type={styles.text} />
                    </li>
                  </div>
                </div>
                <aside className={styles.aside}>
                  <ul>
                    <li>
                      <h6>
                        <SkeletonElement type={styles.text} />
                      </h6>
                      <span>
                        <SkeletonElement type={styles.text} />
                      </span>
                    </li>
                    <li>
                      <h6>
                        <SkeletonElement type={styles.text} />
                      </h6>
                      <span>
                        <SkeletonElement type={styles.text} />
                      </span>
                    </li>
                    <li>
                      <h6>
                        <SkeletonElement type={styles.text} />
                      </h6>
                      <span>
                        <SkeletonElement type={styles.text} />
                      </span>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <SkeletonElement type={styles.text} />
          <SkeletonElement type={styles.paragraph} />
          <SkeletonElement type={styles.paragraph} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonWebtoon;

// <div className={styles.SkeletonWebtoon}>
//   <div className={styles.top}>
//     <div className={styles.image}>
//       <SkeletonElement type={styles.image} />
//     </div>
//     <SkeletonElement type={styles.svg} />
//     <SkeletonElement type={styles.svg} />
//   </div>
//   <div className={styles.about}>
//     <SkeletonElement type={styles.svg} />
//     <SkeletonElement type={styles.svg} />
//   </div>
//   <div className={styles.bottom}>
//     <SkeletonElement type={styles.svg} />
//     <SkeletonElement type={styles.svg} />
//   </div>
//   aa
//   <SkeletonElement type="title" />
//   <SkeletonElement type="text" />
//   <SkeletonElement type="image" />
// </div>
