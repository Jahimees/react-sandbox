import {makeAutoObservable} from "mobx";

class AuthStore {
    user = '';
    role = '';

    constructor() {
        makeAutoObservable(this)
    }

    login = (user: string, role: string) => {
        this.user = user;
        this.role = role;
    }

    logout = () => {
        this.user = '';
        this.role = '';
    }

}

export default new AuthStore()