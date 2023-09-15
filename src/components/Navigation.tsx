import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
            <span className="font-bold">
                React
            </span>

            <span>
                <Link className="px-5" to="/">Products</Link>
                <Link className="px-5" to="/about">About</Link>
            </span>
        </nav>
    )
}