import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import StevieBoiMain from '../assets/stevieMainImage.jpg';

function Portfolio() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="portfolioBox">
                            <Row>
                                <Column size="6">
                                    <h4>Facebook</h4>
                                </Column>
                                <Column size="6">
                                    <p>Link coming soon</p>
                                </Column>
                            </Row>
                            <Row>
                                <Column size="6">
                                    <h4>Spotify? Maybe?</h4>
                                </Column>
                                <Column size="6">
                                    <p>Link coming soon</p>
                                </Column>
                            </Row>
                            <Row>
                                <Column size="6">
                                    <h4>OnlyFans Coming Soon</h4>
                                </Column>
                                <Column size="6">
                                    <p>use that picture of him in the tank top at jjs lol</p>
                                </Column>
                            </Row>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;