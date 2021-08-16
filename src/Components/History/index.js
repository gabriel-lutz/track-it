import Header from "../Header"
import Navbar from "../Navbar"
import styled from "styled-components"

export default function History(){
	return(
		<>
			<Header></Header>
			<Conteiner>
				<h1>Histórico</h1>
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</Conteiner>
			<Navbar></Navbar>
		</>
	)
}

const Conteiner = styled.div`
    margin-top: 98px;
    display:flex;
    flex-direction:column;
    align-items:left;
    padding: 0 18px;
    font-family: 'Lexend Deca', sans-serif;
    h1{
        font-size:23px;
        color:#126BA5;
    }
    p{
        color:#666;
        font-size: 18px;
        margin-top:20px;
    }
`
