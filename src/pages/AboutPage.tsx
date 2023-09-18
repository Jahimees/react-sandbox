import {useAuthContext} from "../context/AuthContext";
import {observer} from "mobx-react-lite";

export const AboutPage = observer(() => {
    const {user} = useAuthContext()

    return (
        <>
        <div>Gello ists about page</div>
            <div>{user ? 'you are logged in' : 'you are not logged in'}</div>
        </>
    )
})