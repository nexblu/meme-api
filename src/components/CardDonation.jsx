import { Card, Button, Image } from "react-bootstrap";
import Saweria from '../../static/image/saweria.ico'
import Trakteer from '../../static/image/trakteer.png'
import Paypal from '../../static/image/paypal.png'

const CardDonation = () => {
    return (
        <>
            <div className="row mt-3 mb-3">
                <div className="col">
                    <Card>
                        <Card.Body className="d-flex flex-row">
                            <Image src={Saweria} className="border rounded p-2" />
                            <Card.Text>
                                Saweria
                            </Card.Text>
                            <Button variant="primary" className="ms-auto btn-small" href="https://saweria.co/nexblu" target="_blank">Donate</Button>
                        </Card.Body>
                        <Button variant="primary" className="me-auto btn-small-active" href="https://trakteer.id/ditttt.frs" target="_blank">Donate</Button>
                    </Card>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col">
                    <Card>
                        <Card.Body className="d-flex flex-row">
                            <Image src={Trakteer} className="border rounded p-2" />
                            <Card.Text>
                                Trakteer
                            </Card.Text>
                            <Button variant="primary" className="ms-auto btn-small" href="https://trakteer.id/ditttt.frs" target="_blank">Donate</Button>
                        </Card.Body>
                        <Button variant="primary" className="me-auto btn-small-active" href="https://trakteer.id/ditttt.frs" target="_blank">Donate</Button>
                    </Card>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col">
                    <Card>
                        <Card.Body className="d-flex flex-row">
                            <Image src={Paypal} className="border rounded p-2" />
                            <Card.Text>
                                Paypal
                            </Card.Text>
                            <Button variant="primary" className="ms-auto btn-small" href="https://paypal.me/nexblu?country.x=ID&locale.x=id_ID" target="_blank">Donate</Button>
                        </Card.Body>
                        <Button variant="primary" className="me-auto btn-small-active" href="https://trakteer.id/ditttt.frs" target="_blank">Donate</Button>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CardDonation;
