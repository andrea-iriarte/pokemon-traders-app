import { useAuth0 } from '@auth0/auth0-react'
import Button from '../Button'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    
    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/"
            },
        })
    }

    return (
        <Button label="Login" handleClick={handleLogin} color="" />
    )
}

export default LoginButton
