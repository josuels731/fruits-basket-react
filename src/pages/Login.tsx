import { FormEvent, useState } from "react";
import styled from "styled-components";
import { login } from 'services/users';
import { RequestPostLogin, ResponsePostLogin } from 'services/users.d';

const Page = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    `;

const DesktopForm = styled.form`
    width: 24vw;
    height: 54vh;
    border-radius: 0.3em;
    background: rgba(255, 255, 255, 0.34);
    
    > div {
        padding: 2vw;
        width: 20vw;
        height: 50vh;
        /* backdrop-filter: blur(22px); */
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 2em;
    margin-bottom: 4rem;
`;

const Input = styled.input`
    width: 90%;
    height: 3.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    font-size: 1.2em;
    margin-bottom: 1.5rem;
    padding: 0 5%;
    color: #3d3d3d;
    
    ::placeholder {
        color: #8B8B8B;
    }
`;

const Button = styled.button`
    width: 60%;
    height: 3.5rem;
    border-radius: 1.5em;
    border: none;
    background-color: #F9D44F;
    color: #FFF;
    font-size: 1.75em;
    margin: auto;
`;

const Error = styled.div`
    border: none;
    color: #e63e3e;
    font-size: 1em;
    margin-top: 1em;
    align-self: center;
`;

function Login() {

    const [loginData, setLoginData] = useState<RequestPostLogin>({ email: '', password: '' });
    const [loginStatus, setLoginStatus] = useState<ResponsePostLogin>({});

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            setLoginStatus(data);
        } catch (e) {
            console.log((e as { request: any }).request);

            setLoginStatus(e as ResponsePostLogin);
        }
    }
    return <Page>
        <DesktopForm onSubmit={submit}>
            <div>
                <Title>Entrar</Title>
                <Input onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} type="text" placeholder='email' />
                <Input onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type="password" placeholder='senha' />
                {loginStatus.error ? <Error>Email ou Senha Incorretos</Error> : null}
                <Button type="submit">login</Button>
            </div>
        </DesktopForm>
    </Page>
}

export default Login;