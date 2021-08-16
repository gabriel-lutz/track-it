import styled from "styled-components"
import { useState } from "react"
export default function CheckBox({day, i, newHabit, setNewHabit, disabled}){
	const [selected,setSelected] = useState(false)

	function setDay(){
		if(!selected){
			setSelected(true)
			const array = [...newHabit.days]
			array.push(i)
			setNewHabit({...newHabit, days: [...array] })
		} else{
			setSelected(false)
			const array = newHabit.days.filter((day)=>(
				day === i ? false : true
			))
			setNewHabit({...newHabit, days: [...array] })
            
		}
       

	}
	return(
		<Checkbox type="button" onClick={setDay} disabled={disabled} selected={selected}> {day} </Checkbox>
	)
    
}
const Checkbox = styled.button`
     width:30px;
     height:30px;
     border-radius:5px;
     border:1px solid #CFCFCF;
     display:flex;
     justify-content: center;
     align-items: center;
     margin-right: 4px;
     outline:none;
     color: ${props => props.selected>0 ? "#FFF" : "#CFCFCF"};
     background: ${props => props.selected > 0 ? "#BABABA" : "#FFF"};
	 transition: 0.2s;
`