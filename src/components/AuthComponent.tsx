import {observer} from "mobx-react-lite";
import AuthStore from "../stores/AuthStore";

export const AuthComponent = observer(() => {

    const {login, logout, user, role} = AuthStore;

    return (
        <div>
            {!user ?
                <div><button onClick={() => login('hello', 'admin')}>Login</button></div>
                :
                <div><button onClick={() => logout()}>Logout</button></div>
            }
        </div>
    )
})