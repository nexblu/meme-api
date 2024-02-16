import { Container } from "react-bootstrap";
import FormContact from "./FormContact";

const JumbotronContact = () => {
    return (
        <>
            <section className="jumbotron jumbotron-contact pt-5 mt-5">
                <Container>
                    <section className="border bg-dark rounded pb-5 pt-5 text-light shadow-lg">
                        <div className="row text-center">
                            <div className="col">
                                <h4 className="text-center fw-bold mt-3 mb-3">Contact Form</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FormContact/>
                            </div>
                        </div>
                    </section>
                </Container>
            </section>
        </>
    )
}

export default JumbotronContact;
