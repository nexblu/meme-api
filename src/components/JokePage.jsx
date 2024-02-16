import TableDocumentationMeme from "./TableDocumentationMeme";
import NavCode from "./NavCode";

const JokePage = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h4 className="fw-bold">Joke API</h4>
                </div>
            </div>
            <hr />
            <div className="row fw-bold">
                <div className="col">
                    <h5>/api/v1/jokes/random</h5>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">HTTP GET</p>
                        <p>Returns one (or more) random jokes.</p>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">Parameters</p>
                        <p className="desc-meme">
                            <span className="amount-label">amount</span> (optional) - amount must be 1 - 5
                        </p>
                        <p className="desc-meme">
                            <span className="amount-label">api_key</span> (required)
                        </p>
                    </div>
                    <TableDocumentationMeme type={'meme-random'} />
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">Example Code</p>
                        <NavCode type={'joke-random'} />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <h5>/api/v1/jokes/type</h5>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">HTTP GET</p>
                        <p>Returns joke by category</p>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">Parameters</p>
                        <p className="desc-meme">
                            <span className="amount-label">category</span> (optional) - category
                        </p>
                        <p className="desc-meme">
                            <span className="amount-label">api_key</span> (required)
                        </p>
                    </div>
                    <TableDocumentationMeme type={'meme-type'} />
                    <div className="d-flex flex-column mb-3">
                        <p className="title-meme">Example Code</p>
                        <NavCode type={'joke-type'} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default JokePage;
