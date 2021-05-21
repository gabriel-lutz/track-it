import styled from "styled-components"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

import CheckBox from "./CheckBox/CheckBox"

export default function CreateHabit({postHabit, disabled, newHabit, setNewHabit, displayNewHabit}){
    const days = ["D","S","T","Q","Q","S","S"]

    return(
        <NewHabit>
                    <form onSubmit={postHabit}>
                        <Input placeholder="Nome do Hábito" 
                               disabled={disabled} 
                               onChange={(e)=> setNewHabit({...newHabit, name: e.target.value})}
                               value={newHabit.name}>
                        </Input>
                        <Box>
                            {days.map((day, i)=>(
                                <CheckBox key={i} 
                                          day={day} 
                                          i={i} 
                                          disabled={disabled} 
                                          newHabit={newHabit} 
                                          setNewHabit={setNewHabit}/>
                            ))}
                        </Box>
                        <Save type="submit" disabled={disabled}> 
                            {!disabled? "Salvar" : <Loader type="ThreeDots" color="#ffffff" height={13} timeout={0}/> }
                        </Save>
                    </form>
                    <Cancel onClick={()=> {
                        displayNewHabit()}
                        }>Cancelar</Cancel>
                </NewHabit>
    )
}

const NewHabit = styled.div`
    position:relative;
    margin:20px 0;
    height:180px;
    background: #fff;
    border-radius:5px;
    padding:18px;
`
const Input = styled.input`
width:100%;
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