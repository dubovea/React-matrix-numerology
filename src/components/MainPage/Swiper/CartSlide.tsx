import { IHeroSlide } from "../../../types/main-page";
import CartSlideTooltip from "./CartSlideTooltip";
import styles from "../../../styles/main-page/index.module.scss";

const HeroSlide = ({ slide }: { slide: IHeroSlide }) => (
  <>
    <img
      src={slide.image}
      alt={slide.title}
      className={styles.hero__slider__slide__img}
      loading="eager"
    />
    <CartSlideTooltip title={slide.title} image={slide.image} />
  </>
);

export default HeroSlide;
