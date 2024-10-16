import { useEffect, useState } from 'react';
import photo1 from '../../../assets/images/photo-carousel/photo-carousel_1.jpg';
import photo2 from '../../../assets/images/photo-carousel/photo-carousel_2.jpg';
import photo3 from '../../../assets/images/photo-carousel/photo-carousel_3.jpg';
import styles from './PhotoCarousel.module.scss';

const photos = [photo1, photo2, photo3];

const PhotoCarousel = () => {
  const [currentImages, setCurrentImages] = useState(photos);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => [prevImages[1], prevImages[2], prevImages[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel__wrapper}>
        {currentImages.map((photo, index) => (
          <div key={index} className={styles.carousel__image}>
            <img src={photo} alt={`Carousel image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;
