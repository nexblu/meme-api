import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import { Button, Image } from "react-bootstrap";
import NotFoundImage from '../../static/image/404.png'
import IconWeb from '../../static/image/icon.png'
import { Helmet } from "react-helmet";
import '../../static/css/notfound.css'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <section className="jumbotron jumbotron-notfound bg-notfound text-light d-flex align-items-center justify-content-center flex-column">
                <Image src={NotFoundImage} />
                <Button className="me-2 ms-2 mb-2 bt-jb fw-bold" href="/">Go Back Home</Button>
            </section>
            <div className="div bg-notfound">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <FooterBar />
        </>
    )
}

export default NotFound;
