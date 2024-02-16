import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import { Container } from "react-bootstrap";
import CardDonation from "../components/CardDonation";
import TitleCardDonation from "../components/TitleCardDonation";
import DescCardDonation from "../components/DescCardDonation";
import IconWeb from '../../static/image/icon.png'
import { Helmet } from "react-helmet";
import '../../static/css/donation.css'

const Donation = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Donation</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <section className="jumbotron jumbotron-donation pt-5 mt-5">
                <Container>
                    <section className="border border-donation rounded text-center pb-5 pt-5 shadow-lg">
                        <TitleCardDonation />
                        <DescCardDonation />
                        <CardDonation />
                    </section>
                </Container>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <FooterBar />
        </>
    )
}

export default Donation;
