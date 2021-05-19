import styled from "styled-components"
import {Link} from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Navbar(){
    return(
        <Conteiner>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to="/hoje">
                <Progress>
                    <CircularProgressbar background={true} backgroundPadding={6}strokeWidth={8} value={66} text={`Hoje`}
                    styles={buildStyles({
                        pathTransitionDuration: 1,
                        textSize: '18px',
                        textColor: '#fff',
                        pathColor: '#fff',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                        })}
                    />
                </Progress>
            </Link>
            <Link to="/historico">
                <h1>Histórico</h1>
            </Link>          
        </Conteiner>
    )
}

const Conteiner = styled.div`
    height:70px;
    background: white;
    position:fixed;
    bottom:0;
    right:0;
    left:0;
    z-index:1;
    padding:0 10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    h1{
        color:#52B6FF ;
        font-size:18px;
        font-family: 'Lexend Deca', sans-serif;
    }
    img{
        margin: 50px 0;
        width:50px;
        height:50px;
        border-radius:50px;
    }
`
const Progress = styled.div`
    width:91px;
    height:91px;
    border-radius:50px;
    margin-bottom:40px;
`