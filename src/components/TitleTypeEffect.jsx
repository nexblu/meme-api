import { Typewriter } from 'react-simple-typewriter'

const TitleTypeEffect = () => {
    return (
        <>
            <Typewriter
                words={["Meme And Joke", "API"]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </>
    );
};

export default TitleTypeEffect;
