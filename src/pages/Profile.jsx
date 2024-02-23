import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
import IconWeb from '../../static/image/icon.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Cookies from 'js-cookie';
import Logout from "../components/Logout";
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
                            <Button variant="primary" className="me-3 ms-3 btn-edit-profile">Edit</Button>{' '}
                        </div>
                        <h5 className="fw-bold me-3 ms-3">Email</h5>
                        <div class="d-flex justify-content-between">
                            <div class="me-3 ms-3">nexblu</div>
                            <Button variant="primary" className="me-3 ms-3 btn-edit-profile">Edit</Button>{' '}
                        </div>
                        <h5 className="fw-bold me-3 ms-3">API Key</h5>
                        <div class="d-flex justify-content-between">
                            <div class="me-3 ms-3">nexblu</div>
                            <Button variant="primary" className="me-3 ms-3 btn-edit-profile">Regenerate</Button>{' '}
                        </div>
                        <hr className="me-3 ms-3 mt-3" />
                        <div className="row">
                            <div className="col fw-bold text-center">
                                Password And Authentication
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Button variant="primary" className="btn-edit-password me-3 ms-3 mt-3">Change Password</Button>{' '}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Logout />
                            </div>
                        </div>
                    </section>
                </section>
            </Container>
        </>
    )
}

export default Profile;