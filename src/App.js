import logo from './resources/contvarCompanyNamelogo.svg';
import './styles/App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Text} from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Text noOfLines={[1, 2, 3]} color={"white"} marginTop={100} marginBottom={10}>
                With <a className="App-link" href="https://github.com/developersunesis/contemplate"
                        target="_blank" rel="noopener noreferrer">developersunesis/contemplate</a> I can now have my
                quick starter React project like this that comes with
                <a className="App-link" href="https://chakra-ui.com" target="_blank"
                   rel="noopener noreferrer">Chakra-UI</a> dependency installed. Depending on the
                aim of the project, the following information can change:
            </Text>
            <p>contvarCompanyName</p>
            <p>contvarProjectManager</p>
            <p>contvarProjectStartDate</p>
            <Footer/>
        </div>
    );
}

export default App;
