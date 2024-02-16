import { Tab, Tabs, TabContent } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MemeRandom, MemeType, JokeRandom, JokeType } from "./ListCode";

const NavCode = (prop) => {
    let { type } = prop
    const memeRandom = new MemeRandom();
    const memeType = new MemeType();
    const jokeRandom = new JokeRandom();
    const jokeType = new JokeType();

    if (type === 'meme-random') {
        return (
            <>
                <Tabs defaultActiveKey="Python" id="myTab" className="mb-3">
                    <Tab eventKey="Python" title="Python">
                        <TabContent>
                            <SyntaxHighlighter language="python" style={atomOneDark}>
                                {memeRandom.python}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="JavaScipt" title="JavaScipt">
                        <TabContent>
                            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                                {memeRandom.js}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="Curl" title="Curl">
                        <TabContent>
                            <SyntaxHighlighter language="bash" style={atomOneDark}>
                                {memeRandom.curl}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                </Tabs>
            </>
        )
    } else if (type === 'meme-type') {
        return (
            <>
                <Tabs defaultActiveKey="Python" id="myTab" className="mb-3">
                    <Tab eventKey="Python" title="Python">
                        <TabContent>
                            <SyntaxHighlighter language="python" style={atomOneDark}>
                                {memeType.python}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="JavaScipt" title="JavaScipt">
                        <TabContent>
                            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                                {memeType.js}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="Curl" title="Curl">
                        <TabContent>
                            <SyntaxHighlighter language="bash" style={atomOneDark}>
                                {memeType.curl}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                </Tabs>
            </>
        )
    } else if (type === 'joke-random') {
        return (
            <>
                <Tabs defaultActiveKey="Python" id="myTab" className="mb-3">
                    <Tab eventKey="Python" title="Python">
                        <TabContent>
                            <SyntaxHighlighter language="python" style={atomOneDark}>
                                {jokeRandom.python}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="JavaScipt" title="JavaScipt">
                        <TabContent>
                            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                                {jokeRandom.js}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="Curl" title="Curl">
                        <TabContent>
                            <SyntaxHighlighter language="bash" style={atomOneDark}>
                                {jokeRandom.curl}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                </Tabs>
            </>
        )
    } else if (type === 'joke-type') {
        return (
            <>
                <Tabs defaultActiveKey="Python" id="myTab" className="mb-3">
                    <Tab eventKey="Python" title="Python">
                        <TabContent>
                            <SyntaxHighlighter language="python" style={atomOneDark}>
                                {jokeType.python}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="JavaScipt" title="JavaScipt">
                        <TabContent>
                            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                                {jokeType.js}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                    <Tab eventKey="Curl" title="Curl">
                        <TabContent>
                            <SyntaxHighlighter language="bash" style={atomOneDark}>
                                {jokeType.curl}
                            </SyntaxHighlighter>
                        </TabContent>
                    </Tab>
                </Tabs>
            </>
        )
    }
}

export default NavCode;