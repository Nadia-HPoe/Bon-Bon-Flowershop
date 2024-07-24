import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import bouquetImage from '../../assets/images/bouquets/bouquet-1.png';
import styles from '../Catalogue/Catalogue.module.scss';


function Catalogue() {

  const bouquet = {
    name: 'Название букета',
    description: 'Описание букета',
    price: '10 000',
    img: bouquetImage,
  };
  const bouquets = Array.from({ length: 6 }, () => ({ ...bouquet }));
  const items = bouquets.map((item) => <CatalogueCard {...item} />);

  return (
    <div сlassName={styles.container__catalogue}>
      <h2>Каталог</h2>
      <div className={styles.categories}>
        Категории
      </div>
      <div className={styles.catalog}>
        {items.map((item, index) => (
          <CatalogueCard key={index} className={styles.catalogue}>
            {item}
          </CatalogueCard>
        ))}</div>
    </div>
  );

}

export default Catalogue;