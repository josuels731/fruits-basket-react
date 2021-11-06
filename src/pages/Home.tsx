import { useEffect, useState, WheelEvent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 2em;
    height: 80%;
    width: 100%;
`;
const Row = styled.div`
    width: 100%;
    height: 100%;

    > :first-child {
        height: 20%;
        width: 95%;
        margin-left: 5%;
        font-size: 1.5em;
        font-weight: 700;
    }
`;

const Card = styled.div<{ position: number }>`
    position: absolute;
    width: 16%;
    height: 100%;
    left: ${(props) => ((props.position * 17) + 3)}%;
    border-radius: 1em;
    background-color: #476A7C;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    transition: left 0.5s ease-out;
`;

const CardsCarrousselWrapper = styled.div`
    height: 80%;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

interface CardProps {
}
interface CardsCarrousselProps {
    cards: CardProps[]
}
const CardsCarroussel = ({ cards }: CardsCarrousselProps) => {

    const [position, setPosition] = useState(5.6 - cards.length);

    useEffect(() => setPosition(0), [])

    const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
        if ((position < -0.14 && e.deltaY < 0) || (position + cards.length > 5.6 && e.deltaY > 0))
            setPosition(position + (e.deltaY < 0 ? 1 : -1) * 0.2);
    }

    return <CardsCarrousselWrapper onWheel={handleScroll} >
        {cards.map((card, index) =>
            <Card position={position + index}></Card>
        )}
    </CardsCarrousselWrapper>
}

function Home() {
    const [continueWatching, setContinueWatching] = useState<CardProps[]>([]);
    const [highlights, setHighLights] = useState<CardProps[]>([]);
    const [friendsAreWatching, setFriendsAreWatching] = useState<CardProps[]>([]);

    return <Wrapper>
        <Grid>
            <Row>
                <div>Continue Assistindo</div>
                <CardsCarroussel cards={continueWatching} />
            </Row>
            <Row>
                <div>Destaques da Semana</div>
                <CardsCarroussel cards={highlights} />
            </Row>
            <Row>
                <div>Seus Amigos Estão Assistindo</div>
                <CardsCarroussel cards={friendsAreWatching} />
            </Row>
        </Grid>
    </Wrapper>
}

export default Home;