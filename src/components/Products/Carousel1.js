import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import apple from '../../images/apple.jpg';
import mango from '../../images/mango.jpg';
import banana from '../../images/banana.jpg';
import orange from '../../images/orange.jpg';
import guava from '../../images/guava.jpg';
import { ProductWrapper, ProductsContainer, ProductsHeading} from './ProductsElements';

const Carousel1 = () => (
    <ProductsContainer>
        <ProductsHeading>Fruits</ProductsHeading>
            <ProductWrapper>
                <Carousel>
                    <div>
                        <img alt="" src={apple} />
                        <Link to="/apple" className="legend">Apple</Link>
                    </div>
                    <div>
                        <img alt="" src={mango} />
                        <Link to="/mango" className="legend">Mango</Link>
                        
                    </div>
                    <div>
                        <img alt="" src={banana} />
                        <Link to="/banana" className="legend">Banana</Link>
                    </div>
                    <div>
                        <img alt="" src={orange} />
                        <Link to="/orange" className="legend">Orange</Link>
                    </div>
                    <div>
                        <img alt="" src={guava} />
                        <p className="legend">Guava</p>
                        <Link to="/guava" className="legend">Guava</Link>
                    </div>
                </Carousel>
            </ProductWrapper>
    </ProductsContainer>
);


export default Carousel1;

