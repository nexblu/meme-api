import { Helmet } from "react-helmet";
import IconWeb from '../../static/image/icon.png'
import { Container } from "react-bootstrap";
import FormLogin from "../components/FormLogin";
import '../../static/css/login.css'

const Login = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>login</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <Container fluid className="container-login">
                <br />
                <br />
                <section className="jumbotron jumbotron-login">
                    <br />
                    <section className="border rounded border-login text-light shadow-lg">
                        <h4 className="text-center ms-3 me-3 mt-3 fw-bold">login</h4>
                        <hr className="ms-3 me-3" />
                        <FormLogin />
                    </section>
                </section>
            </Container>
        </>
    )
}

export default Login;
