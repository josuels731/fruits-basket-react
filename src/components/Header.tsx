import { ReactNode } from "react";
import styled from "styled-components";
import { ReactComponent as DefaultIcon } from 'assets/icons/DefaultIcon.svg'
import SearchBar from "./SearchBar";
import DefaultBackground from 'assets/img/DefaultBackground.png'
import { Link } from "react-router-dom";

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
const UserWrapper = styled.div`
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin-right: 2.5%;
    margin-left: auto;
    background-color: #000;
`;
const User = styled.div`
    width: 5em;
    height: 5em;
    border-radius: 50%;
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
            <Icon>
                <Link to='/' style={{ textDecoration: "none", color: 'inherit  ' }}>
                    <DefaultIcon />
                </Link>
            </Icon>
            <Option>
                <Link to='/movie' style={{ textDecoration: "none", color: 'inherit  ' }}>
                    Marcar um Filme
                </Link>
            </Option>
            <Option>
                <Link to='/movie' style={{ textDecoration: "none", color: 'inherit  ' }}>
                    Lançamentos
                </Link>
            </Option>
            <Option>
                <Link to='/movie' style={{ textDecoration: "none", color: 'inherit  ' }}>
                    Top 10
                </Link>
            </Option>
            {!hideSearchBar ? <SearchBar style={{ marginLeft: '2em' }} variation='small' /> : null}
            <UserWrapper>
                <Link to='/profile'>
                    <User />
                </Link>
            </UserWrapper>
        </HeaderArea>
        <ContentArea children={children} />
    </Wrapper>
}

export default Header;