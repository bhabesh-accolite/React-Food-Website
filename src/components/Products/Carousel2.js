import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import potato from '../../images/potato.jpg';
import onion from '../../images/onion.jpg';
import tomato from '../../images/tomato.jpg';
import ladyfinger from '../../images/ladyfinger.jpg';
import cauliflower from '../../images/cauliflower.jpg';
import { ProductWrapper, ProductsContainer, ProductsHeading } from './ProductsElements';
import { Link } from 'react-router-dom';

const Carousel2 =  () => (

    <ProductsContainer>
        <ProductsHeading>Vegetables</ProductsHeading>
        <ProductWrapper>
            <Carousel>
                <div>
                    <img alt="" src={potato} />
                    <Link to="/potato" className="legend">Potato</Link>
                </div>
                <div>
                    <img alt="" src={onion} />
                    <Link to="/onion" className="legend">Onion</Link>
                </div>
                <div>
                    <img alt="" src={tomato} />
                        <Link to="/tomato" className="legend">Tomato</Link>
                </div>
                <div>
                    <img alt="" src={ladyfinger} />
                        <Link to="/ladyfinger" className="legend">Lady Finger</Link>
                </div>
                <div>
                    <img alt="" src={cauliflower} />
                        <Link to="/cauliflower" className="legend">Cauli Flower</Link>
                </div>
            </Carousel>
        </ProductWrapper>
    </ProductsContainer>
);

export default Carousel2;


