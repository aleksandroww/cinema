import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SummaryInformation.module.scss';
import { Seats } from '../../types/itemType';
import Button from '../Button/Button';
import { useUserSeats } from '../../contexts/SelectedSeatsContext';
import swal from 'sweetalert';
import { getItems, setItems } from '../../services/seats';

const SummaryInformation = () => {
    const [seats, setSeats] = useState<Seats>();
    const { userSeats, setUserSeats } = useUserSeats();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItems();

                setSeats(data);
            } catch (error) {
                swal(`Something went wrong!`);
            }
        };

        fetchItems();
    }, []);

    const buttonHandler = () => {
        const occupied: string[] = [
            ...(seats?.occupied || []),
            ...(Array.isArray(userSeats) ? userSeats : [userSeats]),
        ];
        const fetchItems = async () => {
            try {
                await setItems(occupied);
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
            <p>Total: {userSeats.length * (seats?.price || 15)}BGN</p>
            <Button value='Confirm' handler={buttonHandler}></Button>
        </div>
    );
};

export default SummaryInformation;