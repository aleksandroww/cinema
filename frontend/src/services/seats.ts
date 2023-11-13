const BACKEND_URL = 'http://localhost:3003';

export const getItems = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}/seats`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateItems = async (occupiedSeats: string[]) => {
    try {
        const res = await fetch(`${BACKEND_URL}/seats`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ occupied: occupiedSeats }),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};
