import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <Toaster />
            <Header />
            <main>
                <Outlet />
            </main>
                <ScrollRestoration  />
            <Footer />
        </>
    );
};

export default Main;
