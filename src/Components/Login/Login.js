import img from "../../images/Logo.png"
import styled from "styled-components"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Login(){
    const [data, setData] = useState({email: "", password: ""})
    const [disabled, setDisabled] = useState(false)
    const history = useHistory()

    console.log(data)
    function logar(){
        setDisabled(true)
        const response = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data)
        response.then((data)=>{
            console.log(data)
            history.push("/hoje")
        })
        response.catch(()=>{
            alert("Oops!! Algo deu errado. Tente novamente")
            setDisabled(false)
        })
    }


    return(
            <Conteiner>
                <img src={img}/>
                <Input placeholder="email" disabled={disabled} onChange={(e)=> setData({...data, email: e.target.value})} value={data.email} ></Input>
                <Input placeholder="senha" disabled={disabled} type="password" onChange={(e)=> setData({...data, password: e.target.value})} value={data.password} ></Input>
                <Button onClick={logar} disabled={disabled} > 
                    {!disabled? "Logar" : <Loader type="ThreeDots" color="#ffffff" height={13} timeout={0}/> }
                 </Button>
                <Link to="/cadastro">
                    <Div >Não tem uma conta? Cadastre-se!</Div>
                </Link>
            </Conteiner>
    )
}

const Conteiner = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
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