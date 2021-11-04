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
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 2fr 1fr;
    grid-row-gap: 2em;
    grid-column-gap: 2em;
    height: 90%;
    width: 100%;
    align-self: flex-end;
`;
const GridBackground = styled.div`
    
`;

function Profile() {

    return <Wrapper>
        <Grid />
    </Wrapper>
}

export default Profile;