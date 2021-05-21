import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from '../contexts/UserContext';
import Login from "./Login/Login"
import Cadastro from "./Cadastro/Cadastro"
import Hoje from "./Hoje/Hoje"
import Habitos from "./Habitos/Habitos"
import Historico from "./Historico/Historico"

export default function App(){
    const [userData, setUserData] = useState({})
    
    return(
        <UserContext.Provider value={{data: userData, setData: setUserData }}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login userData={userData} setUserData={setUserData} />
                    </Route>
                    <Route path="/cadastro" exact>
                        <Cadastro />
                    </Route>
                    <Route path="/hoje" exact>
                        <Hoje />
                    </Route>
                    <Route path="/habitos" exact>
                        <Habitos />
                    </Route>
                    <Route path="/historico" exact>
                        <Historico />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}



