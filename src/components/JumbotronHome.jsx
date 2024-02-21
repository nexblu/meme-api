import { Button, Image } from "react-bootstrap";
import IconWeb from '../../static/image/icon.png'
import TitleTypeEffect from "./TitleTypeEffect";

const JumbotronHome = () => {
    return (
        <>
            <div className="jumbotron bg-dark text-light pt-4 text-center mt-5">
                <br />
                <Image src={IconWeb} className="rounded mb-5"></Image>
                <h3 className='fw-bold'>
                    <TitleTypeEffect/>
                </h3>
                <h4>{'"good as it gets"'}</h4>
                <h4>- nexblu</h4>
                <br />
                <Button className="me-2 ms-2 mb-2 bt-jb fw-bold" href="/documentation">Documentation</Button>
                <Button className="me-2 ms-2 mb-2 bt-jb fw-bold" href="/showcase">Showcase</Button>
                <Button className="me-2 ms-2 mb-2 bt-jb fw-bold" href="/profile">Profile</Button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,138.7C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    );
};

export default JumbotronHome;
