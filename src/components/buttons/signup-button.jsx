import { useAuth0 } from '@auth0/auth0-react'
import Button from '../Button'

const SignUpButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
            authorizationParams: {
                screen_hint: "signup"
            }
        })
    }

    return (
        <Button label="Sign Up" color="" handleClick={handleSignUp} />
    )
}

export default SignUpButton