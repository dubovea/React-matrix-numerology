import styles from "../../../styles/main-page/index.module.scss";
import { IHeroSlideTooltip } from "../../../types/main-page";

const CartSlideTooltip = ({ title, image }: IHeroSlideTooltip) => (
  <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
    <span className={styles.hero__slider__slide__popup__arrow} />
    <img
      className={styles.hero__slider__slide__popup__img}
      src={image}
      alt={title}
    />
    <p className={styles.hero__slider__slide__popup__inner}>
      <b className={styles.hero__slider__slide__popup__title}>{title}</b>
    </p>
  </div>
);

export default CartSlideTooltip;
