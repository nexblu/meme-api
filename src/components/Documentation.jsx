import MemePage from "./MemePage";
import JokePage from "./JokePage";

const Documentation = (prop) => {
    let { type } = prop;
    if (type === 'meme') {
        return (
            <MemePage />
        )
    } else if (type === 'joke') {
        return (
            <JokePage />
        )
    }
};

export default Documentation;
