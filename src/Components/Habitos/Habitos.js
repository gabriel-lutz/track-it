import styled from "styled-components"
import axios from "axios"
import { useState, useContext,useEffect } from "react"

import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import CreateHabit from "./CreateHabit/CreateHabit"
import SingleHabit from "./SingleHabit/SingleHabit"
import UserContext from '../../contexts/UserContext';

export default function Habitos(){
    const {data,setData} = useContext(UserContext)
    const [newHabit, setNewHabit] = useState({name:"", days:[]})
    const [showHabit, setShowHabit] = useState(false)
    const [refresh, setRefresh] = useState(0)
    const [disabled, setDisabled] = useState(false)
    
    useEffect(()=>{
        const response = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {"Authorization": `Bearer ${data.token}`}})
        response.then((responseData)=>{
            setData({...data, allHabits: [...responseData.data] })
        })
    }, [refresh, data, setData])

    function postHabit(event){
        event.preventDefault();
        setDisabled(true)
        if(newHabit.name.length < 1 || newHabit.days.length < 1 ){
            alert("Preencha o campo de nome e escolha ao menos um dia para repetir o hábito")
            setDisabled(false)
            return
        }
        const response = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, {headers: {"Authorization": `Bearer ${data.token}`}} )
        response.then(()=>{
            setDisabled(false)
            displayNewHabit()
            setRefresh(refresh + 1)
            setNewHabit({name:"", days:[]})
        })
        response.catch(()=>{
            alert("Oops, algo deu errado, tente novamente")
            setDisabled(false)
        })
    }

    function displayNewHabit(){
        showHabit? setShowHabit(false) : setShowHabit(true)
    }

    return(
        <> 
        <Header/>
        <Conteiner>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <Add onClick={displayNewHabit}>+</Add>
            </MyHabits>
            {showHabit &&
                <CreateHabit postHabit={postHabit} 
                             disabled={disabled} 
                             newHabit={newHabit} 
                             setNewHabit={setNewHabit} 
                             displayNewHabit={displayNewHabit} >
                </CreateHabit>
            }
            <AllHabits>
                {!data.allHabits.length ? 
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                     data.allHabits.map((habit)=>{
                       return <SingleHabit key={habit.id} habit={habit} setRefresh={setRefresh} refresh={refresh}/>
                    })
                }
            </AllHabits>
        </Conteiner>
        <Navbar/>
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
`

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h1{
        font-size:23px;
        color:#126BA5;
    }
`
const Add = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:26px;
`

const AllHabits = styled.div`
    margin-top: 30px;
    margin-bottom:100px;
    p{
        color:#666;
        font-size: 18px;
    }
`
