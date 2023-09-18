import {NavLink} from "react-router-dom";
import navigationStyles from '../assets/navigation.module.css'
import {AuthComponent} from "./AuthComponent";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <span className="font-bold">
                React
            </span>

            <span>
                <AuthComponent />
                <NavLink className={({isActive, isPending}) =>
                    isPending ? "px-5 pending" : isActive ? "px-5 " + (navigationStyles.active) : "px-5"} to="/">Products</NavLink>
                <NavLink className={({isActive, isPending}) =>
                    isPending ? "px-5 pending" : isActive ? "px-5 " + (navigationStyles.active) : "px-5"} to="/about">About</NavLink>
            </span>
        </nav>
    )
}