import React from "react";
import mango from '../../images/mango.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Mango = () => (
    <FruitContainer>
        <FruitHeading>Mango</FruitHeading>
        <FruitWrapper>
            <img alt="" src={mango} height={300} width={300} />
            <FruitInfo>
                A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two distinct types of modern mango cultivars: the "Indian type" and the "Southeast Asian type". Other species in the genus Mangifera also produce edible fruits that are also called "mangoes", the majority of which are found in the Malesian ecoregion.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Mango;