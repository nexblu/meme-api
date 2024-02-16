import { Container } from "react-bootstrap";
import { LogoInstagram, LogoGithub, Mail } from 'react-ionicons';
import FormSubscribe from "./FormSubscribe";

const FooterBar = () => {
    return (
        <>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <footer className="bg-dark pt-3 mb-5">
                <Container>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <FormSubscribe />
                        </div>
                        <div className="col-md-6 text-center">
                            <a href="https://github.com/nexblu" className="social-icon">
                                <LogoGithub
                                    color="#F8F9E3"
                                    height="26px"
                                    width="26px"
                                /></a>
                            <a href="https://www.instagram.com/ditttt.prm/" className="social-icon">
                                <LogoInstagram
                                    color="#F8F9E3"
                                    height="26px"
                                    width="26px"
                                /></a>
                            <a href="/contact" className="social-icon">
                                <Mail
                                    color="#F8F9E3"
                                    height="26px"
                                    width="26px"
                                /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-light fw-bold text-center">
                            <hr />
                            <p>© 2024 Andana Farras Pramudita</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default FooterBar;
