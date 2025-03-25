import EmblaCarousel from "./Embla/EmblaCarousel";
import image1 from "../assets/portfolio/1.png";
import image2 from "../assets/portfolio/2.png";
import image3 from "../assets/portfolio/3.png";
import image4 from "../assets/portfolio/4.png";
import image5 from "../assets/portfolio/5.png";
import bg from '../assets/slider/slider.jpeg'

const images = [image1, image2, image3, image4, image5];

export default function Images() {
  return (
    <section  className="py-16 md:py-5 bg-gray-100 ">
      <div className="max-w-[1240px] mx-auto px-6 ">
        <EmblaCarousel>
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide relative mb-3 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%]"
            >
              <div className="rounded-md overflow-hidden h-full">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
}
