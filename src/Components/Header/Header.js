import styled from "styled-components"
import UserContext from '../../contexts/UserContext';

import { useContext } from "react";

export default function Header(){
    const {data} = useContext(UserContext)
    
    return(
        <Conteiner>
            <h1>TrackIt</h1>
            <img src={data.image} alt="user"></img>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    height:70px;
    background: #126bA5;
    position:fixed;
    top:0;
    right:0;
    left:0;
    z-index:1;
    padding: 0 18px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        font-family: 'Playball', cursive;
        color:white;
        font-size:39px;
    }
    img{
        margin: 50px 0;
        width:50px;
        height:50px;
        border-radius:50px;
    }
`

