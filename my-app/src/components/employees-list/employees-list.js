
import "./employees-list.css"
import EmployeesListItem from "../employees-list-item/employees-list-item"


const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) =>{

    let elements = data.map(item =>{
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem onToggleLike={()=>onToggleLike(id)}
                               onToggleIncrease={()=>onToggleIncrease(id)} 
                               onDelete={()=>onDelete(id)} 
                               key={id} {...itemProps}/>
            )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}



export default EmployeesList;