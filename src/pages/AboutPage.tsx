import {useAuthContext} from "../context/AuthContext";
import {observer} from "mobx-react-lite";

export const AboutPage = observer(() => {
    const {user, role} = useAuthContext()

    return (
        <>
        <div>Hello</div>
            <div>{user ? user + ', you are logged in and you are ' + role : 'you are not logged in'}</div>
        </>
    )
})