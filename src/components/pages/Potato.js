import React from "react";
import potato from '../../images/potato.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Potato = () => (
    <FruitContainer>
        <FruitHeading>Potato</FruitHeading>
        <FruitWrapper>
            <img alt="" src={potato} height={300} width={300} />
            <FruitInfo>
                The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas, with the plant itself being a perennial in the nightshade family Solanaceae.
                <br/>
                Wild potato species, originating in modern-day Peru, can be found throughout the Americas, from Canada to southern Chile. The potato was originally believed to have been domesticated by Native Americans independently in multiple locations, but later genetic testing of the wide variety of cultivars and wild species traced a single origin for potatoes, in the area of present-day southern Peru and extreme northwestern Bolivia. Potatoes were domesticated approximately 7,000–10,000 years ago there, from a species in the Solanum brevicaule complex. 
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Potato;