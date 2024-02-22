import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
import IconWeb from '../../static/image/icon.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Cookies from 'js-cookie';
import '../../static/css/profile.css'

const Profile = () => {
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
                <title>Profile</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <Container>
                <section className="jumbotron mt-3">
                    <br />
                    <br />
                    <br />
                    <section className="border rounded bg-dark text-light shadow-lg pb-3">
                        <h5 className="fw-bold me-3 ms-3 mt-3">Username</h5>
                        <div class="d-flex justify-content-between">
                            <div class="me-3 ms-3">nexblu</div>
                            <Button variant="primary" className="me-3 ms-3">Edit</Button>{' '}
                        </div>
                        <h5 className="fw-bold me-3 ms-3">Email</h5>
                        <div class="d-flex justify-content-between">
                            <div class="me-3 ms-3">nexblu</div>
                            <Button variant="primary" className="me-3 ms-3">Edit</Button>{' '}
                        </div>
                        <h5 className="fw-bold me-3 ms-3">API Key</h5>
                        <div class="d-flex justify-content-between">
                            <div class="me-3 ms-3">nexblu</div>
                            <Button variant="primary" className="me-3 ms-3">Regenerate</Button>{' '}
                        </div>
                    </section>
                </section>
            </Container>
        </>
    )
}

export default Profile;