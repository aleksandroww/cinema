import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import MovieTitle from "../components/MovieTitle/MovieTitle";

const Home = () => {
    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate("/selectSeats");
    }

    return (
        <>
            <MovieTitle />
            <Button value='BUY TICKETS' modifier='modern' handler={buttonHandler} />
        </>
    )
}

export default Home;