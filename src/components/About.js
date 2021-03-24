import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import BassSlappin from '../assets/theFuckHeSmileAt.jpg';
import MustacheWeildin from '../assets/BerBerDingFlavoredConfustion.jpg';
import JjsGunTotin from '../assets/jjsWithAGun.jpg';
import GameNSleep from '../assets/gameNSleep.jpg';
import DogLovin from '../assets/dogLovin.jpg';
import Yes from '../assets/heSayYes.jpg';

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="aboutBox">
                            <Row>
                                <Column size="12">
                                    <h2 id="aboutTitle">Hover Over Stevie</h2>
                                    <p id="aboutSubHeader">To learn a little more about him.</p>
                                </Column>
                            </Row>
                            <Row>
                                <Column size="4">
                                    <div class="card bg-dark text-white aboutTopRow">
                                        <img src={BassSlappin} id="bassSlappin" className="aboutImg" alt="Stevie Boi slap da bass" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Slap Bass</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white aboutTopRow">
                                        <img src={MustacheWeildin} id="mustacheWeildin" className="aboutImg" alt="Stevie Boi weild mustache" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Have Mustache</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white aboutTopRow">
                                        <img src={JjsGunTotin} id="jjsGunTotin" className="aboutImg" alt="Stevie Boi at jjs" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Make Sandwich</h3>
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column size="4">
                                    <div class="card bg-dark text-white">
                                        <img src={GameNSleep} id="gameNSleep" className="aboutImg" alt="Stevie Boi nappin" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Game N' Sleep</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white">
                                        <img src={DogLovin} id="dogLovin" className="aboutImg" alt="Stevie Boi hold dog" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Love Doggo</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="4">
                                    <div class="card bg-dark text-white">
                                        <img src={Yes} id="yes" className="aboutImg" alt="Stevie Boi say yes" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">He Say Yes</h3>
                                        </div>
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

export default Home;