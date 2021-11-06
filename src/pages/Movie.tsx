import Svg from "components/Svg";
import styled from "styled-components";
import { ReactComponent as ScoreIcon } from "assets/icons/Score.svg";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1.3fr;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2em;
    height: 97%;
    width: 90%;
    align-self: flex-end;
    grid-template-areas:
        "a a"
        "b c";

    >:nth-child(1) {
        grid-area: a;
    }
    >:nth-child(2) {
        grid-area: b;
        height: calc(100% - 2em);
    }
    >:nth-child(3) {
        grid-area: c;
        height: calc(100% - 2em);
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

const ProgressBarWrapper = styled.div`
    height: 2em;
    width: 90%;
    .Limits {
        margin-top: 0.25em;
        padding: 0 2%;
        width: 86%;
        display: flex;
        justify-content: space-between;
    }
`;
const ProgressBarValue = styled.div`
    margin-left: auto;
    margin-right: 0.5em;
    width: fit-content;
    font-size: 1em;
    color: #000;

`;
const ProgressBarFull = styled.div`
    width: 90%;
    height: 1.5em;
    border-radius: 0.75em;
    background-color: #FFF;
    position: relative;
    `;
const ProgressBarWatched = styled.div<{ percentage: number }>`
    position: absolute;
    border-radius: 0.75em;
    background-color:  #EAE2B7;
    height: 100%;
    width: ${(props) => props.percentage}%;
`;
const ProgressBar = ({ percentage }: { percentage: number }) => {

    return <ProgressBarWrapper>
        <ProgressBarFull>
            <ProgressBarWatched percentage={percentage} />
            <ProgressBarValue>{percentage}%</ProgressBarValue>
        </ProgressBarFull>
        <div className='Limits'>
            <div className='start'>0%</div>
            <div className='end'>100%</div>
        </div>
    </ProgressBarWrapper>
}

const ProgressHistoricWrapper = styled.div`
    width: 90%;
    display: flex;
    gap: 3em;
    margin-top: 1em;
`;
const ProgressHistoric = () => {
    return <ProgressHistoricWrapper>
        <div>12/03/2021 21:32</div>
        <div>33min</div>
    </ProgressHistoricWrapper>
}
const UpdateProgress = styled.div`
    width: 40%;
    height: 2.5rem;
    border-radius: 0.3em;
    border: none;
    background-color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    color: #003049;
    font-size: 1em;
    font-weight: 900;
    margin: auto;
    outline: none;
    transition: transform 50ms, box-shadow 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }
    
    :active {
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        transform: translateY(1px);
    }
`;
const MovieData = styled.div`
    width: 96%;
    height: 85%;
    display: grid;
    grid-template-columns: 1fr 1.4fr 3em 1fr;
    grid-template-rows: 1.2fr 0.5fr 1.5fr 4fr 2.5rem;
    grid-column-gap: 0.5em;
    grid-row-gap: 0;
    grid-template-areas: 
        "Picture MovieTitle Division ProgressTitle"
        "Picture MovieData  Division ProgressBar"
        "Picture About      Division ProgressBar"
        "Picture About      Division ProgressHistory"
        "Picture About      Division UpdateProgress";
    align-items: center;
    justify-content: center;

    >:nth-child(1) {
        grid-area: Picture;
        width: 95%;
        aspect-ratio: 16 / 9;
        border-radius: 1rem;
        background-color: black;
        margin: auto auto auto 0;
    }
    >:nth-child(2) {
        grid-area: MovieTitle;
        font-size: 1.5em;
        font-weight: 700;
    }
    >:nth-child(3) {
        grid-area: MovieData;
        font-size: 1em;
        font-weight: 300;
        
        strong {
            font-weight: 400;
        }
    }
    >:nth-child(4) {
        grid-area: About;
        font-size: 1em;
        font-weight: 300;
        height: 90%;
        align-self: flex-end;
    }
    >:nth-child(5) {
        grid-area: ProgressTitle;
        font-size: 1.5em;
        font-weight: 700;
    }
    >:nth-child(6) {
        grid-area: ProgressBar;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    >:nth-child(7) {
        grid-area: ProgressHistory;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90%;
        overflow: auto;
    }
    >:nth-child(8) {
        grid-area: UpdateProgress;
        height: 100%;
        width: 100%;
    }
    >:nth-child(9) {
        background-color: #FFF;
        grid-area: Division;
        height: 90%;
        width: 1px;
        margin: auto;
    }
`;

const CommentsArea = styled.div`
    width: 96%;
    height: 85%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2em 1fr;
    grid-row-gap: 0.5em;
    grid-template-areas: 
        "Title"
        "Comments";
    align-items: center;
    justify-content: center;
    
    >:nth-child(1) {
        grid-area: Title;
        font-size: 1.5em;
        font-weight: 700;
    }

    >:nth-child(2) {
        grid-area: Comments;
        height: 100%;
        overflow: auto;
    }
`;

const CommentWrapper = styled.div`
    width: 98%;
    min-height: 6em;
    padding: 1%;
    border-bottom: solid 1px #FFFFFF;
    display: flex;
    align-items: center;
    
    >:nth-child(1) {
        height: 80%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: black;
    }
    >:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-left: 1.5em;
        
        >:nth-child(1) {
            font-size: 1.25em;
            font-weight: 600;
        }   
        >:nth-child(2) {
            height: 1em;
            margin: 0.5em 0;
            display: flex;
            width: fit-content;
            gap: 0.5em;
        }   
        >:nth-child(3) {
            font-size: 1em;
            font-weight: 300;
        }   
    }


`;
const Comment = () => {
    return <CommentWrapper>
        <div></div>
        <div>
            <div>Zézinho</div>
            <div>
                <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
                <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 1 }]} movements={[]} texts={[]} />
                <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
                <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 1 }]} movements={[]} texts={[]} />
                <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies morbi blandit vitae lo dolor sit amet, consectetur adipiscing elit. Ultricies morbi blandit vitae lo dolor sit amet, consectetur adipiscing elit. Ultricies morbi blandit vitae lo dolor sit amet, consectetur adipiscing elit. Ultricies morbi blandit vitae lobortis aliquet ullamcorper elementum. Tristique nibh pellentesque tortor, vitae malesuada convallis non. Lectus luctus venenatis dolor, urna phasellus eu cursus ultrices.</div>
        </div>
    </CommentWrapper>
}

const NewCommentArea = styled.div`
    width: 90%;
    height: 85%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2.5em 2em 1.5em 1fr 2em;
    grid-row-gap: 0.7em;
    grid-template-areas: 
        "Title"
        "Score"
        "CommentTitle"
        "CommentArea"
        "Send";
    align-items: center;
    justify-content: center;
    
    >:nth-child(1) {
        grid-area: Title;
        font-size: 1.5em;
        font-weight: 700;
    }
    >:nth-child(2) {
        grid-area: Score;
        font-size: 1.25em;
        display: flex;
        height: 100%;
        align-items: center;
        width: fit-content;
        gap: 1em;
        
    }
    >:nth-child(3) {
        grid-area: CommentTitle;
        font-size: 1.25em;
    }
    >:nth-child(4) {
        grid-area: CommentArea;
        font-size: 1rem;
        font-weight: 400;
        height: 80%;
        padding: 0.8em;
        width: 90%;
        margin: auto;
        background-color: transparent;
        color: #FFF;
        outline: none;
        border: solid 2px #FFF;
        resize: none;
    }
    >:nth-child(5) {
        width: 50%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        > div{
            width: 40%;
            height: 2.5rem;
            border-radius: 0.3em;
            border: none;
            background-color: #FFF;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            color: #003049;
            font-size: 1em;
            font-weight: 900;
            margin: auto;
            outline: none;
            transition: transform 50ms, box-shadow 200ms;
            display: flex;
            align-items: center;
            justify-content: center;
            
            :hover {
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
            }
            
            :active {
                box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
                transform: translateY(1px);
            }
        }
    }
`;
const NewComment = () => {

    return <NewCommentArea>
        <div>Avaliar</div>
        <div>
            <div>Nota:</div>
            <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
            <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 1 }]} movements={[]} texts={[]} />
            <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
            <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 1 }]} movements={[]} texts={[]} />
            <Svg Svg={ScoreIcon} colors={[{ colors: ['transparent', '#FFF'], idTree: 'Vector', value: 0 }]} movements={[]} texts={[]} />
        </div>
        <div>Comentario:</div>
        <textarea></textarea>
        <div>
            <div>Descartar</div>
            <div>Enviar</div>
        </div>
    </NewCommentArea>
}

function Movie() {

    return <Wrapper>
        <Grid>
            <Background>
                <Filter>
                    <MovieData>
                        <div></div>
                        <div>MovieTitle</div>
                        <div><strong>2021</strong> MovieData</div>
                        <div>When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's "dream team" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).</div>
                        <div>ProgressTitle</div>
                        <div><ProgressBar percentage={50} /></div>
                        <div>
                            <ProgressHistoric />
                            <ProgressHistoric />
                            <ProgressHistoric />
                            <ProgressHistoric />
                            <ProgressHistoric />
                            <ProgressHistoric />
                            <ProgressHistoric />
                        </div>
                        <div>
                            <UpdateProgress>Atualizar Progresso</UpdateProgress>
                        </div>
                        <div />
                    </MovieData>
                </Filter>
            </Background>
            <Background>
                <Filter>
                    <CommentsArea>
                        <div>Comentários</div>
                        <div>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </CommentsArea>
                </Filter>
            </Background>
            <Background>
                <Filter>
                    <NewComment />
                </Filter>
            </Background>
        </Grid>
    </Wrapper>
}

export default Movie;