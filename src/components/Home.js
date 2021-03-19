import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import Portfolio from './Portfolio';
import About from './About';
import Main from './Main';
import BandPromo from './BandPromo';

function Home() {
    return (
        <div className="home">
            <Container>
                <Row>
                    <Column size="3"></Column>
                    <Column size="6"><h1 id="stevieBoi">Stevie Boi Welcomes You</h1></Column>
                    <Column size="3"></Column>
                </Row>
            </Container>
            <Main />
            <About />
            <Portfolio />
            <BandPromo />
        </div>
    )
}

export default Home;
