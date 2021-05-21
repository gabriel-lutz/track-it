import styled from "styled-components"
import axios from "axios"
import { TrashOutline } from 'react-ionicons'
import { useContext } from "react"

import UserContext from '../../../contexts/UserContext';

export default function SingleHabit({habit, setRefresh, refresh}){
    const {data} = useContext(UserContext)
    const config = {headers: {"Authorization": `Bearer ${data.token}`}}

    function Delete(){
        if(window.confirm("Você tem certeza que quer deletar esse habito?")){
            const response = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config)
            response.then(()=> setRefresh(refresh+1))
            response.catch(()=> alert("Oops, parece que deu algo errado, tente novamente"))
        }
    }

    return(
        <Conteiner>
            <h1>{habit.name}</h1>
            <Box>
                <Checkbox selected={habit.days.some((i)=> i === 0? true : false)}>D</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 1? true : false)}>S</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 2? true : false)}>T</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 3? true : false)}>Q</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 4? true : false)}>Q</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 5? true : false)}>S</Checkbox>
                <Checkbox selected={habit.days.some((i)=> i === 6? true : false)}>S</Checkbox>
            </Box>
            <Trash onClick={Delete}>
                <TrashOutline
                    color={'#00000'} 
                    title={"Delete"}
                    height="15px"
                    width="13px"
                />
            </Trash>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    width:340px;
    height:91px;
    padding:15px;
    background: white;
    position:relative;
    margin-bottom:10px;
    border-radius:5px;
    h1{
        font-size:20px;
        color:#666;
    }
`
const Box = styled.div`
    display:flex;
`
const Checkbox = styled.button`
     width:30px;
     height:30px;
     border-radius:5px;
     border:1px solid #CFCFCF;
     display:flex;
     justify-content: center;
     align-items: center;
     margin-right: 4px;
     margin-top:8px;
     color: ${props => props.selected>0 ? "#FFF" : "#CFCFCF"};
     background: ${props => props.selected>0 ? "#BABABA" : "#FFF"};
`
const Trash = styled.div`
    position:absolute;
    top:13px;
    right:13px;
`