import styled from "styled-components";

const Page = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const DesktopLoginArea = styled.div`
    width: 20vw;
    height: 50vh;

    background-color: #353762;
    border-radius: 0.3em;
`;

// const MobileLoginArea = styled.div`
//     width: 20vw;
//     height: 50vh;

//     background-color: #353762;
//     border-radius: 0.3em;
// `;

function Login() {

    return <Page>
        <DesktopLoginArea>

            <div>Entrr</div>
            <div><form action="/" method="get">
                <input type="text" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input type="password" placeholder='senha' />
                <input type="password" placeholder='senha' />
                <button type="submit">login</button>
            </form></div>

        </DesktopLoginArea>
    </Page>
}

export default Login;