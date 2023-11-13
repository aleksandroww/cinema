import { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { useUserSeats } from '../../contexts/SelectedSeatsContext';
import { Seats } from '../../types/itemType';
import styles from './SeatArea.module.scss';
import MovieScreen from '../MovieScreen/MovieScreen';
import Seat from './Seat/Seat';
import Legend from '../Legend/Legend';
import Button from '../Button/Button';
import swal from 'sweetalert';

const SeatArea = () => {
    const data = useLoaderData() as Seats;
    const [seats, setSeats] = useState<Seats>();
    const { userSeats, setUserSeats } = useUserSeats();
    const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setSeats(data);
        setOccupiedSeats(data.occupied);
    }, [data]);

    const buttonHandler = () => {
        if (!userSeats.length) {
            swal('You need to select at least 1 seat!');
        } else {
            navigate('/summary');
        }
    };

    const seatHandler = (target: any) => {
        if (target.getAttribute('data-occupied') === 'false') {
            if (userSeats.includes(target.id)) {
                setUserSeats(userSeats.filter((item) => item !== target.id));
            } else {
                setUserSeats([...userSeats, target.id].sort());
            }
        }
    };

    const rows = [...Array(seats?.rows)].map((callback, rowIndex) => (
        <div key={Math.random()} className={styles.row}>
            {[...Array(seats?.seatsPerRow)].map((callback, seatIndex) => (
                <Seat
                    key={Math.random()}
                    row={rowIndex + 1}
                    seat={seatIndex + 1}
                    selectedSeats={userSeats}
                    occupiedSeats={occupiedSeats}
                    handler={seatHandler}
                />
            ))}
        </div>
    ));

    return (
        <div className={styles.container}>
            <Legend />
            <MovieScreen />
            <div className={styles.seats}>{rows}</div>
            <div className={styles.info}>
                <p>Price: 15BGN</p>
                <p>
                    You have selected {userSeats.length}{' '}
                    {userSeats.length > 1 ? 'seats' : 'seat'}.
                </p>
            </div>
            <Button value='Proceed' handler={buttonHandler} />
        </div>
    );
};

export default SeatArea;
