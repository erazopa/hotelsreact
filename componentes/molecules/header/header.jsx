import styles from "./header.module.css"

export const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book It</h1>
      <div className={styles.filtersBox}>
        <select 
        name="" 
        id="" 
        className={`${styles.filtersBox__country} ${styles.input}`}>
            <option value="All">All countries</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
        </select>
        <input 
        type="date"
        className={`${styles.filtersBox__input} ${styles.input}`}
        />
        <input 
        type="date"
        className={`${styles.filtersBox__input} ${styles.input}`}
        />       
        <select 
        name="" 
        id="" 
        className={`${styles.filtersBox__input} ${styles.input}`}>
            <option value="0">All prices</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
        </select><select 
        name="" 
        id="" 
        className={`${styles.filtersBox__input} ${styles.input}`}>
            <option value="All">All sizes</option>
            <option value="small">Small</option>
            <option value="Brasil">Medium</option>
            <option value="Chile">Large</option>
            </select> 
        </div>
    </header>

    </>
  );
};
