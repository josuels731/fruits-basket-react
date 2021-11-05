import { TouchEvent, UIEvent as ReactUIEvent, useEffect, useRef, useState, WheelEvent } from "react";
import styled from "styled-components";

const followingList = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const moviesList = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1.4fr;
    grid-template-columns: 1.6fr 1fr;
    grid-column-gap: 2em;
    height: 92%;
    width: 90%;
    align-self: flex-end;
    grid-template-areas:
        "a b"
        "c c";

    >:nth-child(1) {
        grid-area: a;
    }
    >:nth-child(2) {
        grid-area: b;
    }
    >:nth-child(3) {
        background-color: transparent;
        grid-area: c;
    }
`;
const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.34);
    border-radius: 0.5em;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
const Filter = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.25em);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileData = styled.div`
    width: 95%;
    height: 85%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1.2fr 1fr 1fr 5fr;
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
    grid-template-areas: 
        "Picture ProfileName"
        "Picture ScoreCount"
        "Picture MovieCount"
        "Picture About";
    align-items: center;
    justify-content: center;

    >:nth-child(1) {
        grid-area: Picture;
        width: 80%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: black;
        margin: auto;
    }
    >:nth-child(2) {
        grid-area: ProfileName;
        font-size: 2em;
        font-weight: 700;
    }
    >:nth-child(3) {
        grid-area: ScoreCount;
        font-size: 1.15em;
        font-weight: 500;
    }
    >:nth-child(4) {
        grid-area: MovieCount;
        font-size: 1.15em;
        font-weight: 500;
    }
    >:nth-child(5) {
        grid-area: About;
        align-self: flex-start;
        font-weight: 400;

        div {
            font-size: 1em;
            font-weight: 700;
            margin-bottom: 0.5em;
        }
    }
`;

const Following = styled.div`
    width: 95%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 0.25fr repeat(2, 1fr);
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
    grid-template-areas: 
        "Title Title Title Title Title Title"
        ".     .     .     .     .     .    "
        ".     .     .     .     .     .    ";
    align-items: center;
    justify-content: center;

    >:nth-child(1) {
        grid-area: Title;
        font-size: 1.5em;
        font-weight: 700;
        margin-left: 2em;
    }
    >:nth-child(n+2):nth-child(-n+13) {
        width: 80%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: white;
        margin: auto;
    }
`;

const Watched = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    &>:nth-child(1) {
        font-size: 1.5em;
        font-weight: 700;
        height: 10%;
        margin-left: 2em;
        margin-top: 3rem;
    }
    &>:nth-child(2) {
        width: 89vw;
        height: calc(90% - 3rem);
        overflow: hidden;
        position: relative;
        margin: auto;
    }
`;

const Card = styled.div<{ positionX: number, positionY: number, focus: boolean }>`
    width: 17vw;
    aspect-ratio: 16 / 9;
    opacity: ${({ focus }) => focus ? '1' : '0.5'};
    background-color: black;
    color: #777;
    border-radius: 0.7em;
    position: absolute;
    top: ${({ positionY }) => positionY * (1 + 17 * (9 / 16))}vw;
    left: ${({ positionX }) => positionX * (17 + 1)}vw;
    transition: top 0.5s ease-out, opacity 0.5s;
`;

function Profile() {
    const [position, setPosition] = useState(Math.floor(moviesList.length / 5) - 1);
    const [touchPos, setTouchPos] = useState(0);

    useEffect(() => setPosition(0), [])



    const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
        if ((position > 0 && e.deltaY < 0) || (position < (Math.floor(moviesList.length / 5) - 1) && e.deltaY > 0))
            setPosition(position + (e.deltaY > 0 ? 1 : -1) * 1);
    }
    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (position > 0 && e.changedTouches[0].screenY - touchPos > 100) {
            setPosition(position - 1);
            setTouchPos(e.changedTouches[0].screenY)
        } else if (position < (Math.floor(moviesList.length / 5) - 1) && e.changedTouches[0].screenY - touchPos < -100) {
            setPosition(position + 1);
            setTouchPos(e.changedTouches[0].screenY)
        }
    }
    const handleTouchDown = (e: TouchEvent<HTMLDivElement>) => {
        setTouchPos(e.changedTouches[0].screenY)
    }
    const handleTouchUp = (e: TouchEvent<HTMLDivElement>) => {
        if (position > 0 && e.changedTouches[0].screenY - touchPos > 50)
            setPosition(position - 1);
        else if (position < (Math.floor(moviesList.length / 5) - 1) && e.changedTouches[0].screenY - touchPos < -50)
            setPosition(position + 1);
    }

    return <Wrapper>
        <Grid>
            <Background>
                <Filter>
                    <ProfileData>
                        <div></div>
                        <div>Bruno Langer</div>
                        <div>Avaliações</div>
                        <div>Assistidos</div>
                        <div>
                            <div>Sobre Mim</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est urna a faucibus vitae viverra. Et dolor dis venenatis, blandit elementum. Elementum sapien euismod neque mauris vestibulum neque, volutpat nibh. Diam, id convallis velit sit volutpat quis nibh scelerisque. Malesuada condimentum viverra ut mattis pretium, dolor vel. Quam faucibus in lectus pharetra ullamcorper nulla habitasse. Habitant elementum ultricies.
                        </div>
                    </ProfileData>
                </Filter>
            </Background>
            <Background>
                <Filter>
                    <Following>
                        <div>Seguindo</div>
                        {followingList.map((following, index) => index > 11 ? null : <div key={index}> {index === 11 ? '...' : ''}</div>)}
                    </Following>
                </Filter>
            </Background>
            <Watched>
                <div>Filmes</div>
                <div onWheel={handleWheel} onTouchStart={handleTouchDown} onTouchEnd={handleTouchUp} onTouchMove={handleTouchMove}>
                    {moviesList.map((movie, index) =>
                        <Card
                            key={index}
                            focus={position === Math.floor(index / 5)}
                            positionX={index % 5}
                            positionY={-position + Math.floor(index / 5)}
                        >
                        </Card>
                    )}
                </div>
            </Watched>
            <Background>

            </Background>
        </Grid>
    </Wrapper>
}

export default Profile;