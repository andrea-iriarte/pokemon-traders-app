import { useAuth0 } from '@auth0/auth0-react'
import Button from '../Button'
import { useEffect } from 'react'
//import User from '../../../models/user'
import { connectToDB } from '../../../utils/connectToDB'

const SignUpButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

   /*  useEffect(() => {
        const createUser = async () => {
            try {
                await connectToDB();
                const userExists = await User.findOne({ email: user.email });

                if(!userExists) {
                    await User.create({
                        email: user.email,
                        username: user.username.replace(" ", "").toLowerCase(),
                        image: user.image
                    })
                }
            } catch(e) {
                console.log(e);
            }

        }
    }, [isAuthenticated]) */
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