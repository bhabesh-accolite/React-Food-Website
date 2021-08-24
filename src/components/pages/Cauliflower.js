import React from "react";
import cauliflower from '../../images/cauliflower.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Cauliflower = () => (
    <FruitContainer>
        <FruitHeading>Cauli Flower</FruitHeading>
        <FruitWrapper>
            <img alt="" src={cauliflower} height={300} width={300} />
            <FruitInfo>
                Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or Mustard) family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called "curd" (with a similar appearance to cheese curd). The cauliflower head is composed of a white inflorescence meristem. Cauliflower heads resemble those in broccoli, which differs in having flower buds as the edible portion. Brassica oleracea also includes broccoli, Brussels sprouts, cabbage, collard greens, and kale, collectively called "cole" crops, though they are of different cultivar groups.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);

export default Cauliflower;