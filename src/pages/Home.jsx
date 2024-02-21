import NavigationBar from "../components/NavigationBar";
import JumbotronHome from "../components/JumbotronHome";
import CardHome from "../components/CardHome";
import FooterBar from "../components/FooterBar";
import { Helmet } from "react-helmet";
import IconWeb from '../../static/image/icon.png'
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import '../../static/css/home.css'

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
            navigate('/login')
        }
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <JumbotronHome />
            <CardHome />
            <FooterBar />
        </>
    )
}

export default Home;
