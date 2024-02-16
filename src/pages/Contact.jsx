import NavigationBar from "../components/NavigationBar";
import JumbotronContact from "../components/JumbotronContact";
import FooterBar from "../components/FooterBar";
import IconWeb from '../../static/image/icon.png'
import { Helmet } from "react-helmet";
import '../../static/css/contact.css'

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <JumbotronContact />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <FooterBar />
        </>
    )
}

export default Contact;
