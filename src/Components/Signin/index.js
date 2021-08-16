import img from "../../images/Logo.png"
import styled from "styled-components"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import { useState, useContext } from "react"
import Loader from "react-loader-spinner"

import UserContext from "../../contexts/UserContext"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


export default function Signin() {
	const { data, setData } = useContext(UserContext)
	const [bodyData, setBodyData] = useState({email: "", password: ""})
	const [disabled, setDisabled] = useState(false)
	const history = useHistory()

	function signin(event){
		event.preventDefault()
		setDisabled(true)
		const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", bodyData)
		promisse.then((data)=>{
			setData({...data.data, todayHabits: [],habitsDone:0, allHabits:[] })
			history.push("/hoje")
		})
		promisse.catch(error => {
			if (error.response.status === 401) {
				setDisabled(false)
				return alert("Email ou senha incorretos.")
			}
			alert("Oops!! Algo deu errado. Tente novamente")
			setDisabled(false)
		})
	}

	return(
		<Conteiner>
			<img src={img} alt="logo"/>
			<div>
				<Form onSubmit={signin}>
					<Input
						placeholder="email"
						disabled={disabled}
						type="email"
						required
						onChange={(e) => setBodyData({ ...bodyData, email: e.target.value })}
						value={data.email} >
					</Input>
					<Input
						placeholder="senha"
						disabled={disabled}
						type="password"
						required
						onChange={(e) => setBodyData({ ...bodyData, password: e.target.value })}
						value={data.password} >
					</Input>
					<Button type="submit" disabled={disabled} > 
						{!disabled
							? "Logar" 
							: <Loader type="ThreeDots" color="#ffffff" height={13} timeout={0} />}
					</Button>
				</Form>
			</div>
			<Link to="/cadastro">
				<Div >Não tem uma conta? Cadastre-se!</Div>
			</Link>
		</Conteiner>
	)
}

const Conteiner = styled.div`
    height:100vh;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        margin: 50px 0;
        width:200px;
    }
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom:6px; 
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    padding: 0 10px;
    font-size:20px;
    outline:none;
	color: #AFAFAF;
    &::placeholder{
        color:#DBDBDB; 
    }
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background: #52B6FF;
    border:none;
    outline:none;
    font-size:21px;
    color: white;
`

const Div = styled.div`
    margin-top: 25px;
    font-size: 14px;
    color:#52b6ff;
    text-decoration-line: underline;
`

const Form = styled.form`
	width: 303px;
`