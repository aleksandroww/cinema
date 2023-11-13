import styles from './Legend.module.scss';

const Legend = () => {
    return (
        <ul className={styles.showcase}>
            <li className={styles['showcase-item']}>
                <div className={styles.seat}></div>
                <p>Free</p>
            </li>
            <li className={styles['showcase-item']}>
                <div className={`${styles.seat} ${styles.selected}`}></div>
                <p>Selected</p>
            </li>
            <li className={styles['showcase-item']}>
                <div className={`${styles.seat} ${styles.occupied}`}></div>
                <p>Occupied</p>
            </li>
        </ul>
    );
};

export default Legend;
