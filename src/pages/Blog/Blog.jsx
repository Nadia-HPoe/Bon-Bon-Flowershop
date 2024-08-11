import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import styles from '../Blog/Blog.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';


const Blog = () => {
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const cardsData = [
    { title: 'Новость', description: 'Описание новости'},
    { title: 'Акция', description: 'Описание акции'},
    { title: 'Совет', description: 'Описание совета'},
    { title: 'Новость', description: 'Описание новости'},
    { title: 'Акция', description: 'Описание акции'},
    { title: 'Совет', description: 'Описание совета'},
    { title: 'Новость', description: 'Описание новости'},
    { title: 'Акция', description: 'Описание акции'},
    { title: 'Совет', description: 'Описание совета'},
    { title: 'Новость', description: 'Описание новости'},
    { title: 'Акция', description: 'Описание акции'},
    { title: 'Совет', description: 'Описание совета'},
  ];

  useEffect(() => {
    setCards(cardsData);
    setDisplayedCards(cardsData.slice(0, 3));
    setIsLoading(false);
    setShowMoreButton(true);
  }, []);

  const handleShowMore = () => {
    setDisplayedCards([...displayedCards, ...cards.slice(displayedCards.length, displayedCards.length + 6)]);

  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.blog}>
        <h2 className={styles.blog__title}>Блог</h2>
        <div className={styles.blog__categories}>
          <ul className={styles.caregories}>
            <li>Новости</li>
            <li>Акции</li>
            <li>Советы</li>
          </ul>
        </div>

        <div className={styles.blog__cards}>
          <div className={styles.blog__card}>
            {displayedCards.map((card, index) => (
              <BlogCard key={index} title={card.title} description={card.description} index={index}/>
            ))}
          </div>
          < div className={styles.blog__button}>
            {showMoreButton && (
              <button className={styles.btn__showmore} onClick={handleShowMore}>
                Смотреть ещё
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Blog;
