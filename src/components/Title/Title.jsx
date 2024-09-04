// import React, { useState } from 'react';
// import VisibilitySensor from 'react-visibility-sensor';
import { TypeAnimation } from 'react-type-animation';
import styles from './Title.module.scss';

const Title = () => {
  //   const [isVisible, setIsVisible] = useState(false);

  //   const handleChange = (isVisible) => {
  //     if (isVisible) {
  //       setIsVisible(true);
  //     }
  //   };

  return (
    <>
      {/* <VisibilitySensor onChange={handleChange}>
        <div className={`${styles.revealText} ${isVisible ? styles.visible : ''}`}>
          Доставка цветов в Нижнем Новгороде
        </div>
      </VisibilitySensor> */}
      <div className={styles.title}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Доставка цветов в Нижнем Новгороде',
            15000, // wait 1s before replacing "Mice" with "Hamsters"
            // 'Свадебные букеты, праздничное оформление, сухоцветы',
            // 2000,
            // 'Оформление цветами в Нижнем Новгороде',
            // 1000,
            // 'Сухоцветы в Нижнем Новгороде',
            // 1000,
          ]}
          wrapper="span"
          speed={20}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default Title;
