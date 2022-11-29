import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./Pages/Home/App"
import GlobalStyle from './GlobalStyle'
import { CreateValidationContext } from "./Common/Validation"

function Router() {
    return(
    <CreateValidationContext>
        <BrowserRouter>
         <GlobalStyle/>
            <Routes>
                <Route path="/" element={<App/>} />
            </Routes>
        </BrowserRouter>
    </CreateValidationContext>
    )
}

export default Router