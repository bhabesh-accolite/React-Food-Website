import React from "react";
import orange from '../../images/orange.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Orange = () => (
    <FruitContainer>
        <FruitHeading>Orange</FruitHeading>
        <FruitWrapper>
            <img alt="" src={orange} height={300} width={300} />
            <FruitInfo>
                The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.
                <br/>
                The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. The sweet orange has had its full genome sequenced.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);

export default Orange;