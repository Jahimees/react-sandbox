import {observer} from "mobx-react-lite";
import {useAuthContext} from "../context/AuthContext";

export const AuthComponent = observer(() => {

    const {login, logout, user, role} = useAuthContext();

    return (
        <div>
            {!user ?
                <div><button onClick={() => login('Jahimees', 'admin')}>Login</button></div>
                :
                <div><button onClick={() => logout()}>Logout</button></div>
            }
        </div>
    )
})