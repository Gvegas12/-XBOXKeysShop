import React from "react";
import UI from "../../UI";

import styles from "./index.module.scss";

interface IHeroProps {}

export const gameListData = [
  {
    name: "Hitman",
    price: 1299,
    status: "Уже в доступе",
    images: [
      {
        url: "https://assets.reedpopcdn.com/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg",
      },
      {
        url: "https://kg-portal.ru/img/97689/main_2x.jpg",
      },
      {
        url: "https://cadelta.ru/images/hitman_3_guide_2.jpg",
      },
      {
        url: "https://www.askaboutgames.com/media/wp-content/uploads/screen_shot_3091.jpg",
      },
    ],
  },
  {
    name: "Rust",
    price: 999,
    status: "Уже в доступе",
    images: [
      {
        url: "https://avatars.dzeninfra.ru/get-zen_doc/4350071/pub_62642c4e2a2b664eb3848831_62642dd82a2b664eb387211a/scale_1200",
      },
      {
        url: "https://shara-games.ru/uploads/posts/2021-06/1622497141_1.jpg",
      },
      {
        url: "https://www.digiseller.ru/preview/968258/p1_3285429_7dd4f2f2.png",
      },
      {
        url: "https://screenshots.gamer-info.com/rust/194858.jpg",
      },
    ],
  },
  {
    name: "EldenRing",
    price: 9993,
    status: "Уже в доступе",
    images: [
      {
        url: "https://cq.ru/storage/uploads/posts/1451339/1.jpg",
      },
      {
        url: "https://i.playground.ru/e/Ikxj1v9Xpem7htldLdP3jA.jpeg",
      },
      {
        url: "https://3dnews.ru/assets/external/illustrations/2021/12/20/1056298/0.jpg",
      },
      {
        url: "https://vulcan.dl.playstation.net/ap/rnd/202108/0411/fIpRDUkPVzxN7kStSj7G02Br.jpg",
      },
    ],
  },
  {
    name: "Hitman",
    price: 1299,
    status: "Уже в доступе",
    images: [
      {
        url: "https://assets.reedpopcdn.com/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg",
      },
      {
        url: "https://kg-portal.ru/img/97689/main_2x.jpg",
      },
      {
        url: "https://cadelta.ru/images/hitman_3_guide_2.jpg",
      },
      {
        url: "https://www.askaboutgames.com/media/wp-content/uploads/screen_shot_3091.jpg",
      },
    ],
  },
  {
    name: "Rust",
    price: 999,
    status: "Уже в доступе",
    images: [
      {
        url: "https://avatars.dzeninfra.ru/get-zen_doc/4350071/pub_62642c4e2a2b664eb3848831_62642dd82a2b664eb387211a/scale_1200",
      },
      {
        url: "https://shara-games.ru/uploads/posts/2021-06/1622497141_1.jpg",
      },
      {
        url: "https://www.digiseller.ru/preview/968258/p1_3285429_7dd4f2f2.png",
      },
      {
        url: "https://screenshots.gamer-info.com/rust/194858.jpg",
      },
    ],
  },
  {
    name: "EldenRing",
    price: 9993,
    status: "Уже в доступе",
    images: [
      {
        url: "https://cq.ru/storage/uploads/posts/1451339/1.jpg",
      },
      {
        url: "https://i.playground.ru/e/Ikxj1v9Xpem7htldLdP3jA.jpeg",
      },
      {
        url: "https://3dnews.ru/assets/external/illustrations/2021/12/20/1056298/0.jpg",
      },
      {
        url: "https://vulcan.dl.playstation.net/ap/rnd/202108/0411/fIpRDUkPVzxN7kStSj7G02Br.jpg",
      },
    ],
  },
  {
    name: "Hitman",
    price: 1299,
    status: "Уже в доступе",
    images: [
      {
        url: "https://assets.reedpopcdn.com/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg",
      },
      {
        url: "https://kg-portal.ru/img/97689/main_2x.jpg",
      },
      {
        url: "https://cadelta.ru/images/hitman_3_guide_2.jpg",
      },
      {
        url: "https://www.askaboutgames.com/media/wp-content/uploads/screen_shot_3091.jpg",
      },
    ],
  },
  {
    name: "Rust",
    price: 999,
    status: "Уже в доступе",
    images: [
      {
        url: "https://avatars.dzeninfra.ru/get-zen_doc/4350071/pub_62642c4e2a2b664eb3848831_62642dd82a2b664eb387211a/scale_1200",
      },
      {
        url: "https://shara-games.ru/uploads/posts/2021-06/1622497141_1.jpg",
      },
      {
        url: "https://www.digiseller.ru/preview/968258/p1_3285429_7dd4f2f2.png",
      },
      {
        url: "https://screenshots.gamer-info.com/rust/194858.jpg",
      },
    ],
  },
  {
    name: "EldenRing",
    price: 9993,
    status: "Уже в доступе",
    images: [
      {
        url: "https://cq.ru/storage/uploads/posts/1451339/1.jpg",
      },
      {
        url: "https://i.playground.ru/e/Ikxj1v9Xpem7htldLdP3jA.jpeg",
      },
      {
        url: "https://3dnews.ru/assets/external/illustrations/2021/12/20/1056298/0.jpg",
      },
      {
        url: "https://vulcan.dl.playstation.net/ap/rnd/202108/0411/fIpRDUkPVzxN7kStSj7G02Br.jpg",
      },
    ],
  },
  {
    name: "Hitman",
    price: 1299,
    status: "Уже в доступе",
    images: [
      {
        url: "https://assets.reedpopcdn.com/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hitman-3-pc-players-will-be-able-to-import-their-hitman-2-locations-by-end-of-february-1612562654843.jpg",
      },
      {
        url: "https://kg-portal.ru/img/97689/main_2x.jpg",
      },
      {
        url: "https://cadelta.ru/images/hitman_3_guide_2.jpg",
      },
      {
        url: "https://www.askaboutgames.com/media/wp-content/uploads/screen_shot_3091.jpg",
      },
    ],
  },
  {
    name: "Rust",
    price: 999,
    status: "Уже в доступе",
    images: [
      {
        url: "https://avatars.dzeninfra.ru/get-zen_doc/4350071/pub_62642c4e2a2b664eb3848831_62642dd82a2b664eb387211a/scale_1200",
      },
      {
        url: "https://shara-games.ru/uploads/posts/2021-06/1622497141_1.jpg",
      },
      {
        url: "https://www.digiseller.ru/preview/968258/p1_3285429_7dd4f2f2.png",
      },
      {
        url: "https://screenshots.gamer-info.com/rust/194858.jpg",
      },
    ],
  },
  {
    name: "EldenRing",
    price: 9993,
    status: "Уже в доступе",
    images: [
      {
        url: "https://cq.ru/storage/uploads/posts/1451339/1.jpg",
      },
      {
        url: "https://i.playground.ru/e/Ikxj1v9Xpem7htldLdP3jA.jpeg",
      },
      {
        url: "https://3dnews.ru/assets/external/illustrations/2021/12/20/1056298/0.jpg",
      },
      {
        url: "https://vulcan.dl.playstation.net/ap/rnd/202108/0411/fIpRDUkPVzxN7kStSj7G02Br.jpg",
      },
    ],
  },
];

const Hero: React.FC<IHeroProps> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__popularSlider}>
        <h3 className={styles.hero__popularSliderTitle + " sectionTitle"}>
          Популярное и рекомендуемое
        </h3>
        <UI.HoverSlider>
          {gameListData.map((item, i) => (
            <UI.HoverSlider.Item key={i} gameData={item} />
          ))}
        </UI.HoverSlider>
      </div>
    </section>
  );
};

export default Hero;
