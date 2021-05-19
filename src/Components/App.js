import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components"

import Login from "./Login/Login"
import Cadastro from "./Cadastro/Cadastro"
import Hoje from "./Hoje/Hoje"
export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/cadastro" exact>
                    <Cadastro />
                </Route>
                <Route path="/hoje" exact>
                    <Hoje />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}



