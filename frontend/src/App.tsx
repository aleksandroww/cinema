import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import SelectSeat from './pages/SelectSeats';
import Summary from './pages/Summary';
import UserSeatsProvider from './contexts/SelectedSeatsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'selectSeats',
        element: <SelectSeat />,
      },
      {
        path: 'summary',
        element: <Summary />,
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
