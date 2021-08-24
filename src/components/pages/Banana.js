import React from "react";
import banana from '../../images/banana.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Banana = () => (
    <FruitContainer>
        <FruitHeading>Banana</FruitHeading>
        <FruitWrapper>
            <img alt="" src={banana} height={300} width={300}/>
            <FruitInfo>
                A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Banana;