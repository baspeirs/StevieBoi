import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="aboutBox">
                            <Row>
                                <Column size="6"> 
                                    <div class="card bg-dark text-white">
                                        <img src="" id="stevieBoiHero" alt="Stevie Boi slap da bass" />
                                    </div>
                                </Column>
                                <Column size="6">
                                    <h4>Bass Slappin'</h4>
                                </Column>
                            </Row>
                            <Row>
                            <Column size="6"> 
                                    <div class="card bg-dark text-white">
                                        <img src="" id="stevieBoiHero" alt="Stevie Boi slap da bass" />
                                    </div>
                                </Column>
                                <Column size="6">
                                    <h4>Mustache Weildin'</h4>
                                </Column>
                            </Row>
                            <Row>
                            <Column size="6"> 
                                    <div class="card bg-dark text-white">
                                        <img src="" id="stevieBoiHero" alt="Stevie Boi slap da bass" />
                                    </div>
                                </Column>
                                <Column size="6">
                                    <h4>Jimmy Johns Slangin'</h4>
                                </Column>
                            </Row>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}

export default Home;