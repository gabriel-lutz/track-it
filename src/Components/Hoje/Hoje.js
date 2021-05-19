import styled from "styled-components"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
export default function Hoje(){
    return(
        <>
            <Header/>
            <Conteiner>
                olaa
            </Conteiner>
            <Navbar/>
        </>
    )
}

const Conteiner = styled.div`
    margin-top: 98px;
    display:flex;
    flex-direction:column;
    align-items:center;
`