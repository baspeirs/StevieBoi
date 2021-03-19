import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import StevieBoiMain from '../assets/stevieMainImage.jpg';

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="aboutBox">
                        <Row>
                                <Column size="6">
                                    
                                </Column>
                                <Column size="6">
                                    <img src={StevieBoiMain} id="stevieBoiHero" alt="Stevie Boi slap da bass"/>
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