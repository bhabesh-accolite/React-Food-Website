import React from "react";
import onion from '../../images/onion.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

const Onion = () => (
    <FruitContainer>
        <FruitHeading>Onion</FruitHeading>
        <FruitWrapper>
            <img alt="" src={onion} height={300} width={300} />
            <FruitInfo>
                The onion (Allium cepa L., from Latin cepa "onion"), also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion. Until 2010, the shallot was classified as a separate species.
                Its close relatives include the garlic, scallion, leek, chive, and Chinese onion.
                <br/>
                This genus also contains several other species variously referred to as onions and cultivated for food, such as the Japanese bunching onion (Allium fistulosum), the tree onion (A. ×proliferum), and the Canada onion (Allium canadense). The name "wild onion" is applied to a number of Allium species, but A. cepa is exclusively known from cultivation.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);

export default Onion;