import React from "react";
import ladyfinger from '../../images/ladyfinger.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Ladyfinger = () => (
    <FruitContainer>
        <FruitHeading>Lady Finger</FruitHeading>
        <FruitWrapper>
            <img alt="" src={ladyfinger} height={300} width={300} />
            <FruitInfo>
                Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It is valued for its edible green seed pods. It is a good source of minerals, vitamins, antioxidants, and fiber. The geographical origin of lady finger is disputed, with supporters of West African, Ethiopian, and South Asian origins. The plant is cultivated in tropical, subtropical and warm temperate regions around the world and is a notable part of the cuisine of the Southern United States and India.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);


export default Ladyfinger;