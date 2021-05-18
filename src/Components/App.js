import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components"
import Login from "./Login/Login"
import Cadastro from "./Cadastro/Cadastro"
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
            </Switch>

        </BrowserRouter>
    )
}



