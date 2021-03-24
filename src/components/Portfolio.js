import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import OnlyFansLogo from '../assets/1024px-OnlyFans_logo.svg.png';
import FacebookLogo from '../assets/facebook-about-marketing-01.png';
import SpotifyLogo from '../assets/Spotify_Logo_CMYK_Green.png';
import HePray from '../assets/HePray.jpg';
import OooAhh from '../assets/OooAhh.jpg';
import OnlyFansComingSoon from '../assets/onlyFansComingSoon.jpg';

function Portfolio() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="portfolioBox">
                            <Row id="mediaTopRow">
                                <Column size="xl-4">
                                    <div class="card logoCard">
                                        <img src={FacebookLogo} className="mediaLogo" alt="Facebook Logo" />
                                    </div>
                                </Column>
                                <Column size="xl-4">
                                    <div class="card logoCard">
                                        <img src={SpotifyLogo} className="mediaLogo" alt="Facebook Logo" />
                                    </div>
                                </Column>
                                <Column size="xl-4">
                                    <div class="card logoCard">
                                        <img src={OnlyFansLogo} className="mediaLogo" alt="Facebook Logo" />
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column size="xl-4">
                                    <div class="card bg-dark text-white">
                                        <img src={HePray} className="mediaStevieImage" alt="He Pray" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">Yeah, he got Facebook.</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="xl-4">
                                    <div class="card bg-dark text-white">
                                        <img src={OooAhh} className="mediaStevieImage" alt="He Pray" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">Better than having Sound Cloud.</h3>
                                        </div>
                                    </div>
                                </Column>
                                <Column size="xl-4">
                                    <div class="card bg-dark text-white">
                                        <img src={OnlyFansComingSoon} className="mediaStevieImage" alt="He Pray" />
                                        <div class="card-img-overlay">
                                            <h3 class="card-title">Coming Soon...</h3>
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

export default Portfolio;