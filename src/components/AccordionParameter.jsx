import { Accordion } from 'react-bootstrap';

const AccordionCode = (prop) => {
    let { type } = prop

    const generateParam = (type) => {
        if (type === 'meme-random') {
            return (
                <>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='fw-bold'>amount *optional [Integer]</Accordion.Header>
                        <Accordion.Body>
                            amount must be 1 - 5
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>api_key *required [String]</Accordion.Header>
                        <Accordion.Body>
                            api from your email after subscribe
                        </Accordion.Body>
                    </Accordion.Item>
                </>
            )
        } else if (type === 'meme-type') {
            return (
                <>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='fw-bold'>category *optional [String]</Accordion.Header>
                        <Accordion.Body>
                            category : [programming]
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>api_key *required [String]</Accordion.Header>
                        <Accordion.Body>
                            api from your email after subscribe
                        </Accordion.Body>
                    </Accordion.Item>
                </>
            )
        }
    }

    return (
        <Accordion defaultActiveKey="0" className='mb-3'>
            {generateParam(type)}
        </Accordion>
    )
}

export default AccordionCode;