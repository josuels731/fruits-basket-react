import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import styled from "styled-components";
import { login } from 'services/users';
import { RequestPostLogin, ResponsePostLogin } from 'services/users.d';
import LoginBackground from 'assets/img/LoginBackground.png'
import { ReactComponent as DefaultIcon } from 'assets/icons/DefaultIcon.svg'
import { Redirect } from "react-router";
import { useLoginContext } from "../services/loginContext";

const Page = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${LoginBackground});
`;

const Icon = styled.div`
    margin-bottom: 1em;
`;

const Filter = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1em);
    display: flex;
    flex-direction: column;
`;

const DesktopForm = styled.form`
    width: 23vw;
    height: 54vh;
    border-radius: 0.5em;
    background: rgba(255, 255, 255, 0.34);
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: 700;
    margin: 0 10%;
    margin-top: 3rem;
    margin-bottom: 4rem;

`;

const Input = styled.input`
    width: 70%;
    height: 3.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    font-size: 1.7em;
    font-weight: 600;
    margin: 0 10%;
    margin-bottom: 1.5rem;
    padding: 0.1em 5%;
    color: #3d3d3d;
    
    ::placeholder {
        color: #8B8B8B;
    }
`;

const Button = styled.button`
    width: 40%;
    height: 3.5rem;
    border-radius: 1.5em;
    border: none;
    background-color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    color: #003049;
    font-size: 1.7em;
    font-weight: 900;
    margin: auto;
    outline: none;
    transition: transform 50ms, box-shadow 200ms;

    :hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }

    :active {
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        transform: translateY(1px);
    }
`;

const Error = styled.div`
    border: none;
    color: #D62828;
    font-weight: 700;
    font-size: 1em;
    height: 1.5em;
    margin-top: 0em;
    margin-bottom: 1em;
    align-self: center;
`;

function Login() {

    const [loginData, setLoginData] = useState<RequestPostLogin>({ email: '', password: '' });
    const { loginStatus, setLoginStatus } = useLoginContext();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginStatus(await login(loginData));
    }

    const handleInvalid = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLoginStatus({ error: 'Email or password is invalid' });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginStatus({});
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    return <Page>
        <Icon><DefaultIcon /></Icon>
        <DesktopForm onSubmit={handleSubmit}>
            <Filter>
                <Title>Entrar</Title>
                <Input id='email' onInvalid={handleInvalid} onChange={handleChange} type="email" placeholder='email' />
                <Input id='password' onInvalid={handleInvalid} onChange={handleChange} type="password" placeholder='senha' />
                <Error>{loginStatus.error || ''}</Error>
                <Button type="submit">login</Button>
                {loginStatus.token !== undefined ? <Redirect to='/' /> : null}
            </Filter>
        </DesktopForm>
    </Page>
}

export default Login;