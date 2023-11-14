import styles from './Button.module.scss';

type Props = { value: string; modifier?: string; handler: () => void };

const Button: React.FC<Props> = ({ value, modifier, handler }) => {
    return (
        <div className={styles.container}>
            <button
                onClick={handler}
                className={`${styles.button} ${styles[`${modifier}`]}`}
            >
                <div className={styles['button__line']} />
                <div className={styles['button__line']} />
                <span className={styles['button__text']}>{value}</span>
            </button>
        </div>
    );
};

export default Button;
