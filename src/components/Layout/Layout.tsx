import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <header className="fixed top-0 w-full">
        <Header />
        <Navbar />
      </header>
      <main className="my-40">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
