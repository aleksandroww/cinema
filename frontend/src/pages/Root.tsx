import { Outlet } from 'react-router-dom';
import Container from '../components/UI/Container/Container';

function RootLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default RootLayout;
