import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import UserContext from "../contexts/UserContext"
import Signin from "./Signin"
import Signup from "./Signup"
import Today from "./Today"
import Habits from "./Habits"
import History from "./History"

export default function App(){
	const [userData, setUserData] = useState({})
    
	return(
		<UserContext.Provider value={{data: userData, setData: setUserData }}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Signin}/>
					<Route path="/cadastro" exact component={Signup}/>
					<Route path="/hoje" exact component={Today}/>
					<Route path="/habitos" exact component={Habits}/>
					<Route path="/historico" exact component={History}/>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	)
}



