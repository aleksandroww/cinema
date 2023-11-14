import styles from './Legend.module.scss';

const Legend = () => {
    return (
        <ul className={styles.showcase}>
            <li className={styles['showcase-item']}>
                <div className={styles.seat} />
                <p>Free</p>
            </li>
            <li className={styles['showcase-item']}>
                <div className={`${styles.seat} ${styles.selected}`} />
                <p>Selected</p>
            </li>
            <li className={styles['showcase-item']}>
                <div className={`${styles.seat} ${styles.occupied}`} />
                <p>Occupied</p>
            </li>
        </ul>
    );
};

export default Legend;
