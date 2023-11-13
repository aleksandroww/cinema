import {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
    useContext,
} from 'react';

interface UserSeats {
    userSeats: string[];
    setUserSeats: Dispatch<SetStateAction<string[]>>;
}

const UserSeatsContext = createContext<UserSeats | undefined>(undefined);

interface Props {
    children: ReactNode;
}

const UserSeatsProvider: React.FC<Props> = ({ children }) => {
    const [userSeats, setUserSeats] = useState<string[]>([]);

    const contextValue: UserSeats = {
        userSeats,
        setUserSeats,
    };

    return (
        <UserSeatsContext.Provider value={contextValue}>
            {children}
        </UserSeatsContext.Provider>
    );
};

export default UserSeatsProvider;

export const useUserSeats = (): UserSeats => {
    const context = useContext(UserSeatsContext);

    if (!context) {
        throw new Error('useUserSeats must be used within a UserSeatsProvider');
    }

    return context;
};
