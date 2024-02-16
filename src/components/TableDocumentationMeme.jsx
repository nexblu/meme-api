import { Table } from "react-bootstrap";
import AccordionCode from "./AccordionParameter";

const TableDocumentationMeme = (prop) => {
    let { type } = prop;
    if (type === 'meme-random') {
        return (
            <>
                <Table striped bordered hover variant="dark" className='mb-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parameter</th>
                            <th>Required</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>amount</td>
                            <td>false</td>
                            <td>integer</td>
                            <td>amount must be 1 - 5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>api_key</td>
                            <td>true</td>
                            <td>string</td>
                            <td>api from your email after subscribe</td>
                            <td>.......</td>
                        </tr>
                    </tbody>
                </Table>
                <AccordionCode type={type} />
            </>
        )
    } else if (type === 'meme-type') {
        return (
            <>
                <Table striped bordered hover variant="dark" className='mb-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parameter</th>
                            <th>Required</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>category</td>
                            <td>false</td>
                            <td>string</td>
                            <td>{'category : [programming]'}</td>
                            <td>programming</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>api_key</td>
                            <td>true</td>
                            <td>string</td>
                            <td>api from your email after subscribe</td>
                            <td>.......</td>
                        </tr>
                    </tbody>
                </Table>
                <AccordionCode type={type} />
            </>
        )
    } else if (type === 'joke-type') {
        return (
            <>
                <Table striped bordered hover variant="dark" className='mb-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parameter</th>
                            <th>Required</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>category</td>
                            <td>false</td>
                            <td>string</td>
                            <td>{'category : [programming]'}</td>
                            <td>programming</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>api_key</td>
                            <td>true</td>
                            <td>string</td>
                            <td>api from your email after subscribe</td>
                            <td>.......</td>
                        </tr>
                    </tbody>
                </Table>
                <AccordionCode type={type} />
            </>
        )
    } else if (type === 'joke-random') {
        return (
            <>
                <Table striped bordered hover variant="dark" className='mb-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parameter</th>
                            <th>Required</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>category</td>
                            <td>false</td>
                            <td>string</td>
                            <td>{'category : [programming]'}</td>
                            <td>programming</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>api_key</td>
                            <td>true</td>
                            <td>string</td>
                            <td>api from your email after subscribe</td>
                            <td>.......</td>
                        </tr>
                    </tbody>
                </Table>
                <AccordionCode type={type} />
            </>
        )
    }
};

export default TableDocumentationMeme;
