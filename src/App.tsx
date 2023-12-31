import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {NavigationComponent} from "./components/NavigationComponent";
import {AuthContextProvider} from "./context/AuthContext";

// const AuthContext = useAuthContext();
// const AuthContext = createContext(AuthStore)

function App() {
    return (
        <AuthContextProvider>
            <NavigationComponent/>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </AuthContextProvider>
    )
}

// export const useAuthStore = () => {
//     const context = useContext(AuthContext)
//     if (context === undefined) {
//         console.log("ERROR auth store")
//         // return
//     }
//
//     return context
// }

export default App;
