import styles from './Seat.module.scss';

type Props = {
    row: number;
    seat: number;
    selectedSeats: string[];
    occupiedSeats: string[];
    handler: (target: any) => void;
};

const Seat: React.FC<Props> = ({
    row,
    seat,
    selectedSeats,
    occupiedSeats,
    handler,
}) => {
    const id = `${row}|${seat}`;
    const occupied = occupiedSeats.includes(id);

    return (
        <div
            onClick={(e) => handler(e.currentTarget)}
            className={`
            ${styles.seat}
            ${selectedSeats.includes(id) ? styles.selected : ''}
            ${occupied ? styles.occupied : ''}
            `}
            id={id}
            data-occupied={occupied}
        ></div>
    );
};

export default Seat;
