import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = () => {
    const { pathname } = useLocation();

    //starts each new page at the top instead of where the last one was scrolled
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div id="content">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
};

export default Layout;