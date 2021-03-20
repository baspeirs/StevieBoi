import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import BassSlappin from '../assets/theFuckHeSmileAt.jpg';
import MustacheWeildin from '../assets/BerBerDingFlavoredConfustion.jpg';
import JjsGunTotin from '../assets/jjsWithAGun.jpg'

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="aboutBox">
                            <Row>
                                <Column size="4">
                                    <div class="card bg-dark text-white aboutImg">
                                        <img src={BassSlappin} id="bassSlappin" alt="Stevie Boi slap da bass" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Slap Bass</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white">
                                        <img src={MustacheWeildin} id="mustacheWeildin" alt="Stevie Boi weild mustache" />
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white">
                                        <img src={JjsGunTotin} id="jjsGunTotin" alt="Stevie Boi at jjs" />
                                    </div>
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