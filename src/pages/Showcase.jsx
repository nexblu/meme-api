import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import { Card, Button, Container } from "react-bootstrap";
import IconWeb from '../../static/image/icon.png'
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import '../../static/css/showcase.css'

const Showcase = () => {
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
                <title>Showcase</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <section className="jumbotron jumbotron-showcase text-light pb-5 pt-5 d-flex align-items-center mt-5">
                <Container />
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </section>
            <FooterBar />
        </>
    )
}

export default Showcase;
