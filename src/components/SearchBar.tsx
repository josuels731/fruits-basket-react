import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { ReactComponent as Magnifier } from 'assets/icons/Magnifier.svg'

const Wrapper = styled.div`
    border: solid 1px #FFF;
    font-size: 1.5em;
    font-weight: 300;
    height: 1.5em;
    width: 25ch;
    padding: 0.25em 1em;
    border-radius: 2em;
    display: flex;
    align-items: center;
`;
const Icon = styled.div`
    width: 1em;
    margin-top: 0.2em;
    margin-right: 1em;
`;

interface SearchBarProps {
    variation: 'large' | 'small',
    style?: CSSProperties
}
function SearchBar({ variation, style }: SearchBarProps) {
    // TODO large variation
    // TODO Add input and search functionalities
    switch (variation) {
        case "large":
            return <>

            </>

        case "small":
            return <Wrapper style={style}>
                <Icon><Magnifier /> </Icon>
                Pesquise um filme
            </Wrapper>
    }
}

export default SearchBar;