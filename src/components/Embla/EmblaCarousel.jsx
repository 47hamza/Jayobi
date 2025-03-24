import "./index.css";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container">{children}</div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
