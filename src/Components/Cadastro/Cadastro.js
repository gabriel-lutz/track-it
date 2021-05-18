import img from "../../images/Logo.png"
import styled from "styled-components"
import {Link} from "react-router-dom"
export default function Cadastro(){
    return(
        <Conteiner>
            <img src={img}/>
            <Input placeholder="email" ></Input>
            <Input placeholder="senha" ></Input>
            <Input placeholder="nome" ></Input>
            <Input placeholder="foto" ></Input>
            <Button> Cadastrar </Button>
            <Link to="/">
                <Div >Já tem uma conta? Faça login!</Div>
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
    
`