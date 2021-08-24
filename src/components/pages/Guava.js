import React from "react";
import guava from '../../images/guava.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Guava = () => (
    <FruitContainer>
        <FruitHeading>Guava</FruitHeading>
        <FruitWrapper>
            <img alt="" src={guava} height={300} width={300}/>
            <FruitInfo>
            Guava  is a common tropical fruit cultivated in many tropical and subtropical regions. Psidium guajava (common guava, lemon guava) is a small tree in the myrtle family , native to Mexico, Central America, the Caribbean and northern South America. Although related species may also be called guavas, they belong to other species or genera, such as the pineapple guava, Feijoa sellowiana. In 2019, 55 million tonnes of guavas were produced worldwide, led by India with 45% of the total. Botanically, guavas are berries.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Guava;