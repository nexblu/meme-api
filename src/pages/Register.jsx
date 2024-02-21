import { Helmet } from "react-helmet";
import IconWeb from '../../static/image/icon.png'
import { Container } from "react-bootstrap";
import FormRegister from "../components/FormRegister";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import '../../static/css/register.css'

const Register = () => {
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
                <title>Register</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <Container fluid className="container-register">
                <br />
                <br />
                <section className="jumbotron jumbotron-register">
                    <br />
                    <section className="border rounded border-register text-light shadow-lg">
                        <h4 className="text-center ms-3 me-3 mt-3 fw-bold">Register</h4>
                        <hr className="ms-3 me-3" />
                        <FormRegister />
                    </section>
                </section>
            </Container>
        </>
    )
}

export default Register;
