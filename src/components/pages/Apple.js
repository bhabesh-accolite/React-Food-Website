import React from "react";
import apple from '../../images/apple.jpg';
import { FruitContainer, FruitWrapper, FruitHeading, FruitInfo } from "./Fruitelements";

// const fruit = props.match.params.fruit;
// const { fruit } = useParams();

const Fruits = () => (
    <FruitContainer>
        <FruitHeading>Apple</FruitHeading>
        <FruitWrapper>
            <img alt="" src={apple} height={300} width={300} />
            <FruitInfo>
                An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.
                <br/>
                Apples grown from seed tend to be very different from those of the parents, and the resultant fruit frequently lack desired characteristics. Generally then, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be large and much slower to fruit after planting. Rootstocks are used to control speed of growth and the size of the resulting tree allowing for easier harvesting.
            </FruitInfo>
        </FruitWrapper>
    </FruitContainer>
);

export default Fruits;