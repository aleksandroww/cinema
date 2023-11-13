import styles from './Container.module.scss';

type Props = { children: JSX.Element }

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container;