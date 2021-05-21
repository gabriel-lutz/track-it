import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import CheckBox from "./CheckBox/CheckBox"
import SingleHabit from "./SingleHabit/SingleHabit"
import styled from "styled-components"
import { useState, useContext,useEffect } from "react"
import axios from "axios"
import UserContext from '../../contexts/UserContext';
export default function Habitos(){
    const days = ["D","S","T","Q","Q","S","S"]
    const {data,setData} = useContext(UserContext)
    const [newHabit, setNewHabit] = useState({name:"", days:[]})
    const [showHabit, setShowHabit] = useState(false)
    const [refresh, setRefresh] = useState(0)
    const config = {
        headers: {
            "Authorization": `Bearer ${data.token}`
        }
    }
    
    useEffect(()=>{
        const response = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        response.then((responseData)=>{
            setData({...data, allHabits: responseData.data })
        })
    }, [refresh])

    function postHabit(event){
        event.preventDefault();
        if(newHabit.name.length < 1 || newHabit.days.length < 1 ){
            alert("Preencha o campo de nome e escolha ao menos um dia para repetir o hábito")
            return
        }
        const response = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, config )
        response.then(()=>{
            displayNewHabit()
            setRefresh(refresh + 1)
            setNewHabit({name:"", days:[]})
        })
        response.catch(()=>alert("Oops, algo deu errado, tente novamente"))
    }

    function displayNewHabit(){
        showHabit? setShowHabit(false):setShowHabit(true)
    }

    console.log(data)

    return(
        <> 
        <Header/>
        <Conteiner>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <Add onClick={displayNewHabit}>+</Add>
            </MyHabits>
            {showHabit &&
                <NewHabit>
                    <form onSubmit={postHabit}>
                        <Input placeholder="Nome do Hábito" onChange={(e)=> setNewHabit({...newHabit, name: e.target.value})} value={newHabit.name}></Input>
                        <Box>
                            {days.map((day, i)=>(
                                <CheckBox day={day} i={i} newHabit={newHabit} setNewHabit={setNewHabit}/>
                            ))}
                        </Box>
                        <Save type="submit"> Salvar</Save>
                    </form>
                    <Cancel onClick={()=> {
                        displayNewHabit()
                        setNewHabit({name:"", days:[]})}
                        }>Cancelar</Cancel>
                </NewHabit>
            }
            <AllHabits>
                {!data.allHabits ? 
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                     data.allHabits.map((habit)=>{
                       return <SingleHabit habit={habit} setRefresh={setRefresh} refresh={refresh}/>
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
const NewHabit = styled.div`
    position:relative;
    margin:20px 0;
    height:180px;
    background: #fff;
    border-radius:5px;
    padding:18px;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom:6px; 
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    padding: 0 10px;
    font-size:20px;
    outline:none;
    &::placeholder{
        color:#DBDBDB; 
    }
`
const Box = styled.div`
    display:flex;
`

const Save = styled.button`
    position:absolute;
    bottom:15px;
    right:15px;
    width:84px;
    height:35px;
    background: #52b6ff;
    color:white;
    border-radius:5px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:none;
    outline:none;
`
const Cancel = styled.button`
    position:absolute;
    bottom:15px;
    right:115px;
    width:84px;
    height:35px;
    background: white;
    color:#52b6ff;
    border-radius:5px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:none;
    outline:none;
`

const AllHabits = styled.div`
    margin-top: 30px;
    margin-bottom:100px;
    p{
        color:#666;
        font-size: 18px;
    }
`
