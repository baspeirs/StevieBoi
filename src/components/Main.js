import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import StevieBoiMain from '../assets/stevieMainImage.jpg';

function Main() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="mainBox">
                            <Row>
                                <Column size="lg-7">
                                    <div className="mainContentBox">
                                        <h2 id="gaylord">He's a Gaylord.</h2>
                                        <h4>He sucks at bass.</h4>
                                        <p>What a looser. Lol.</p>
                                    </div>
                                </Column>
                                <Column size="lg-5" id="heroImageContainer">
                                    <div class="card bg-dark text-white">
                                        <img src={StevieBoiMain} id="stevieBoiHero" alt="Stevie Boi slap da bass" />
                                    </div>
                                </Column>
                            </Row>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}

export default Main;