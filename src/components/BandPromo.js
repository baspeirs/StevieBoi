import React from 'react';
import Container from './Container';
import Row from './Row';
import Column from './Column';

function BandPromo() {
    return (
        <div>
            <Container>
                <Row>
                    <Column size="12">
                        <div className="bandPromoBox">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zc28dPM01Mw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    )
}

export default BandPromo;