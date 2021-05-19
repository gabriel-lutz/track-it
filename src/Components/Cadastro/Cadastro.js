import img from "../../images/Logo.png"
import styled from "styled-components"
import {Link, useHistory} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Cadastro(){
    const [data, setData] = useState({email: "", password: "", name: "", image:"" })
    const [disabled, setDisabled] = useState(false)
    const history = useHistory()


    function Cadastrar(){
        setDisabled(true)
        const response = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data)
        response.then(()=>{
            history.push("/")
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
            <Input placeholder="senha" disabled={disabled} onChange={(e)=> setData({...data, password: e.target.value})} value={data.password}></Input>
            <Input placeholder="nome" disabled={disabled} onChange={(e)=> setData({...data, name: e.target.value})} value={data.name}></Input>
            <Input placeholder="foto" disabled={disabled} onChange={(e)=> setData({...data, image: e.target.value})} value={data.image}></Input>
            <Button onClick={Cadastrar} disabled={disabled} > 
                {!disabled? "Cadastrar" : <Loader type="ThreeDots" color="#ffffff" height={13} timeout={0}/> }
             </Button>
            <Link to="/">
                <Div >Já tem uma conta? Faça login!</Div>
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
    display:flex;
    justify-content:center;
    align-items:center;
    text-indent: -1px;
`

const Div = styled.div`
    margin-top: 25px;
    font-size: 14px;
    color:#52b6ff;
    text-decoration-line: underline;
`