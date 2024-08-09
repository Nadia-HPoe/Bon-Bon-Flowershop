import styles from './Categories.module.scss';

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
          <h2>Категории</h2>
          <ul className={styles.caregories}>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 1
            </li>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 2
            </li>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 3
            </li>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 4
            </li>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 5
            </li>
            <li
              className={styles.caregories_items}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Категория 6
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Categories;
