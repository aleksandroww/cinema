import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserSeatsProvider from './contexts/SelectedSeatsContext';
import { getItems } from './services/seats';
import Home from './pages/Home';
import Summary from './pages/Summary';
import RootLayout from './pages/Root';
import SelectSeat from './pages/SelectSeats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'selectSeats',
        element: <SelectSeat />,
        loader: getItems,
      },
      {
        path: 'summary',
        element: <Summary />,
        loader: getItems,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <UserSeatsProvider>
      <RouterProvider router={router} />
    </UserSeatsProvider>
  );
}

export default App;
