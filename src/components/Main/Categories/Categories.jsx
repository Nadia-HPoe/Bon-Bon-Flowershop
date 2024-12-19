import styles from './Categories.module.scss';
import img1 from './../../../assets/images/categories/category1.jpeg';
import img2 from './../../../assets/images/categories/category2.jpeg';
import img3 from './../../../assets/images/categories/category3.jpeg';
import img4 from './../../../assets/images/categories/category4.jpeg';
import img5 from './../../../assets/images/categories/category5.jpeg';
import img6 from './../../../assets/images/categories/category6.jpeg';

const categories = [
  {name: "Авторские букеты", image: img1},
  {name: "Цветы в коробке", image: img2},
  {name: "Корзины", image: img3},
  {name: "Свадебные букеты", image: img4},
  {name: "Сухоцветы", image: img5},
  {name: "Дом и уют", image: img6},
];

const Categories = () => {
  const handleMouseEnter = (e) => {
    const items = document.querySelectorAll(`.${styles.caregories_items}`);
    items.forEach((item) => {
      if (item !== e.target) {
        item.classList.add(styles.faded);
      }
    });
  };

  const handleMouseLeave = () => {
    const items = document.querySelectorAll(`.${styles.caregories_items}`);
    items.forEach((item) => {
      item.classList.remove(styles.faded);
    });
  };

  return (
    <>
      <div className={styles.caregories_container}>
        <nav className={styles.caregories_wrapper}>
          <h2 className={styles.categories_header}>
            Категории
          </h2>
          <ul className={styles.caregories}>
            {categories.map((category, index) => (
            <li
              key={index}
              className={styles.caregories_items}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(13, 22, 22, 0.7) 100%), url(${category.image})`}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.category_text}>{category.name}</div>
            </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Categories;
