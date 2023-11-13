import { useState, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import styles from './SummaryInformation.module.scss';
import { useUserSeats } from '../../contexts/SelectedSeatsContext';
import { Seats } from '../../types/itemType';
import { updateItems } from '../../services/seats';
import Button from '../Button/Button';
import swal from 'sweetalert';

const SummaryInformation = () => {
    const data = useLoaderData() as Seats;
    const [seats, setSeats] = useState<Seats>();
    const { userSeats, setUserSeats } = useUserSeats();
    const navigate = useNavigate();

    useEffect(() => {
        setSeats(data);
    }, [data]);

    const buttonHandler = () => {
        const occupied: string[] = [
            ...(seats?.occupied || []),
            ...(Array.isArray(userSeats) ? userSeats : [userSeats]),
        ];
        const fetchItems = async () => {
            try {
                await updateItems(occupied);
            } catch (error) {
                swal(`Something went wrong!`);
            }
        };

        fetchItems();
        setUserSeats([]);
        navigate('/');
        swal('You have successfully finish you order!');
    };

    return (
        <div className={styles.container}>
            <p>
                You have selected {userSeats.length}{' '}
                {userSeats.length > 1 ? 'seats' : 'seat'}.
            </p>
            <p>Selected seats:</p>
            <ul className={styles.list}>
                {userSeats.map((seat) => (
                    <li key={seat}>
                        Row {seat.split('|')[0]} Seat {seat.split('|')[1]}
                    </li>
                ))}
            </ul>
            <p className={styles.total}>Total: {userSeats.length * (seats?.price || 15)}BGN</p>
            <Button value='Confirm' handler={buttonHandler}></Button>
        </div>
    );
};

export default SummaryInformation;
