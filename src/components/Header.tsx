import { ReactNode } from "react";
import styled from "styled-components";
import { ReactComponent as DefaultIcon } from 'assets/icons/DefaultIcon.svg'
import SearchBar from "./SearchBar";
import DefaultBackground from 'assets/img/DefaultBackground.png'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${DefaultBackground});
`;

const HeaderArea = styled.header`
    height: 14%;
    width: 100%;
    display: flex;
    align-items: center;
`;
const Icon = styled.div`
    height: 75%;
    margin-left: 2.5%;
    width: fit-content;
`;
const Option = styled.div`
    font-size: 1.5em;
    font-weight: 400;
    margin-left: 2em;
`;
const User = styled.div`
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin-right: 2.5%;
    margin-left: auto;
    background-color: #000;

`;

const ContentArea = styled.div`
    height: 86%;
    width: 100%;
`;

interface HeaderProps {
    children?: ReactNode
    hideSearchBar?: boolean
}
function Header({ children, hideSearchBar }: HeaderProps) {

    return <Wrapper>
        <HeaderArea>
            <Icon><DefaultIcon /></Icon>
            <Option>Marcar um Filme</Option>
            <Option>Lançamentos</Option>
            <Option>Top 10</Option>
            {!hideSearchBar ? <SearchBar style={{ marginLeft: '2em' }} variation='small' /> : null}
            <User />
        </HeaderArea>
        <ContentArea children={children} />
    </Wrapper>
}

export default Header;