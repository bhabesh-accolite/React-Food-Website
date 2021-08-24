import React from "react";
import tomato from '../../images/tomato.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Tomato = () => (
    <FruitContainer>
        <FruitHeading>Tomato</FruitHeading>
        <FruitWrapper>
            <img alt="" src={tomato} height={300} width={300} />
            <FruitInfo>
                The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived. Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.
                <br/>
                Tomatoes are a significant source of umami flavor. The tomato is consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits—botanically classified as berries—they are commonly used as a vegetable ingredient or side dish.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Tomato;