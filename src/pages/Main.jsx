import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';

const Main = () => {
useEffect(() => {
    AOS.init();
}, []);

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
