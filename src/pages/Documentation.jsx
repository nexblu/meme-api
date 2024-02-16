import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import IconWeb from '../../static/image/icon.png'
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import TitleDocumentation from "../components/TitleDocumentation";
import RenderPagination from "../components/RenderPagination";
import PaginatorDocumentation from "../components/PaginatorDocumentation";
import { useState, useEffect } from "react";
import '../../static/css/documentation.css'

const Documentation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [valuePage, setValuePage] = useState('')
    const totalPages = 2;

    useEffect(() => {
        setValuePage(
            <PaginatorDocumentation page={1} />
        )
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setValuePage(
            <>
                <PaginatorDocumentation page={page} />
            </>
        )
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Documentation</title>
                <link rel="icon" type="image/svg+xml" href={IconWeb} />
            </Helmet>
            <NavigationBar />
            <Container className="pt-5 mt-5">
                <section className="border bg-dark rounded text-light shadow-lg">
                    <div className="me-3 ms-3 mt-3 mb-3">
                        <TitleDocumentation />
                        <hr />
                        {valuePage}
                        <div className="row">
                            <div className="col">
                                <RenderPagination
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <FooterBar />
        </>
    )
}

export default Documentation;
