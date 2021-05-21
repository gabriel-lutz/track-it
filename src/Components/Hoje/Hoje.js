import styled from "styled-components"
import { useContext, useEffect,useState } from "react";
import axios from "axios"
import dayjs from 'dayjs'

import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Habit from "../Habit/Habit"
import UserContext from '../../contexts/UserContext';

require('dayjs/locale/pt-br')

export default function Hoje(){
    const {data,setData} = useContext(UserContext)
    const [refresh, setRefresh] = useState(0)
    const day = dayjs().locale("pt-br").format('dddd[,] DD/MM')
    const done = (100*data.habitsDone) /data.totalHabits

    useEffect(()=>{
        const response = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
                        {headers: {"Authorization": `Bearer ${data.token}`}})
        response.then((responseData)=>{
            setData({...data, 
                todayHabits: responseData.data, 
                totalHabits: responseData.data.length, 
                habitsDone: countHabitsDone(responseData.data) 
            })
    })},[refresh, data, setData ])

    function countHabitsDone(data){
        let total = 0;
        data.forEach(habit => {
            if(habit.done){
                total++
            }
        })
        return total
    }
    
    return(
        <>
            <Header/>
            <Conteiner>
                <Day>
                    {day}
                </Day>
                <HabitsDone done={done}>
                    {done>0? `${done.toFixed()}% dos hábitos concluídos` : "Nenhum hábito concluido ainda" }
                </HabitsDone>
                {data.todayHabits.map(habit=>{
                    return <Habit key={habit.id} habit={habit}  setRefresh={setRefresh} refresh={refresh}/>
                })} 
            </Conteiner>
            <Navbar/>
        </>
    )
}

const Conteiner = styled.div`
    margin-top: 98px;
    margin-bottom: 100px;
    display:flex;
    flex-direction:column;
    align-items:left;
    padding: 0 18px;
    font-family: 'Lexend Deca', sans-serif;
`

const Day = styled.h1`
    font-size: 23px;
    color: #126ba5;
`

const HabitsDone = styled.p`
    color: ${props => props.done>0 ? "#8FC549" : "#BABABA"};
    font-size: 18px;
    margin:8px 0;
    margin-bottom:20px;
`
