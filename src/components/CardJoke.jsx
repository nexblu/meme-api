import { Button, Card } from "react-bootstrap";

const CardJoke = () => {
    return (
        <>
        <div className="col-md-6 mb-3">
            <Card>
                <Card.Body>
                    <Card.Title>Joke API Random</Card.Title>
                    <Card.Text>
                        return Random Joke API with format json
                    </Card.Text>
                    <Button variant="primary" href="/documentation">Documenantation</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-6 mb-3">
            <Card>
                <Card.Body>
                    <Card.Title>Joke API Count</Card.Title>
                    <Card.Text>
                        return Random Joke API with format json
                    </Card.Text>
                    <Button variant="primary" href="/documentation">Documenantation</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default CardJoke;
