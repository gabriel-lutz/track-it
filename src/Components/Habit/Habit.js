import styled from "styled-components"
import { CheckmarkOutline } from 'react-ionicons'
import { useContext} from "react"
import axios from "axios"

import UserContext from '../../contexts/UserContext';

export default function Habit({habit, refresh, setRefresh}){
    const {data} = useContext(UserContext)

    function marcarEDesmarcar(){
        if(habit.done){
            const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, {headers: {"Authorization": `Bearer ${data.token}`}})
            response.then(()=>{
                setRefresh(refresh + 1)
            })
            response.catch(()=>{
                alert("Oops, parece que algo deu errado, tente novamente")
            })
        }else{
            const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, {headers: {"Authorization": `Bearer ${data.token}`}})
            response.then(()=>{
                setRefresh(refresh + 1)
            })
            response.catch(()=>{
                alert("Oops, parece que algo deu errado, tente novamente")
            })
        }
    }


    return(
        <Conteiner>
            <Description>
                <h1>{habit.name}</h1>
                <p>Sequencia atual: <Sequence done={habit.done}>{habit.currentSequence} dias</Sequence></p>
                <p>Seu recorde: 
                    <Sequence done={habit.currentSequence===habit.highestSequence && habit.highestSequence !== 0}>
                              {habit.highestSequence} dias
                    </Sequence>
                </p>
            </Description>
            <Check done={habit.done} onClick={marcarEDesmarcar}>
                <CheckmarkOutline color={'#ffffff'} title={'Check'} height="40px" width="40px" />
            </Check>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background:white;
    height:auto;
    padding:13px;
    margin-bottom:10px;
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Description = styled.div`
    width:210px;
    color:#666;
    h1{
        font-size:20px;
        margin-top:5px;
        margin-bottom:10px;
    }
    p{
        margin-bottom:3px;
        font-size:13px;
    }
`

const Check = styled.div`
    width:69px;
    height:69px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: ${props => props.done ? "#8FC549" : "#e7e7e7"} ;
`

const Sequence = styled.span`
    color:  ${props => props.done ? "#8FC549" : "#666"} ;
`