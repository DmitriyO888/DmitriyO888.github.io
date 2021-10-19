
import "./app-filter.css"


 const AppFilter = (props) =>{

        let buttonsData = [
                {name: 'all', label: "Все сотрудники"},
                {name: 'liked', label:"На повышение"},
                {name: "moreThan1000", label: "З/П больше 1000$"}
        ]

        const buttons = buttonsData.map(({name, label}) => {
                const active = props.filter === name;
                const clazz = active ? "btn-light" : "btn-outline-light"
                return (
                        <button type="button"
                                className={`btn ${clazz}`}
                                onClick = {()=> props.onFilterChange(name)}>
                                {label}
                        </button>
                )
        })

                return(
                        <div className="btn-group">
                        {buttons}
                        </div>
                )
        }
        
    


export default AppFilter; 