
import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'John' , salary: 800, increase: true, liked: false, id: 1},
                {name: 'Dmitriy' , salary: 1000, increase: true, liked: false, id: 2},
                {name: 'Julia' , salary: 800, increase: false, liked: false, id: 3},
            ],
            filter: "",
            term: ""
        }
        this.maxId = 4;

    }

    onDelete = (id) =>{
        console.log(`delete ${id}`)
        this.setState(({data}) =>({
            data: data.filter(item => item.id !== id)
        }))
    }

    onAdd = (name, salary) =>{
        const newElement = {
            name,
            salary,
            increase: false,
            liked: false,
            id: this.maxId++
        }
            
        this.setState(({data})=>{
            const newArr = [...data, newElement]
            return{
                data: newArr
            }
        })
    }

//some comment
    onToggleIncrease = (id) =>{
        console.log(`increase${id}`)
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleLike = (id) =>{
        console.log(`like ${id}`)
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, liked: !item.liked}
                }
                return item
            })
        }))
    }

    FilterPost = (items, filter) =>{
        switch(filter){
            case "liked": 
                return items.filter(item => item.liked )
            case "moreThan1000":
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterChange = (filter) =>{
        this.setState({filter})
    }

    searchEmp = (data, term) =>{
                                    
        if(term.length === 0){
            return data; 

        }

        return data.filter(Dataitem => {
            return Dataitem.name.indexOf(term) > -1;
        })

    }

    onUpdateSearch = (term) =>{
        this.setState({term})
    }
    
    render(){

        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.FilterPost(this.searchEmp(data, term), filter);
        
        return(
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
    
                <EmployeesList data={visibleData}
                                onDelete={this.onDelete}
                                onToggleIncrease={this.onToggleIncrease}
                                onToggleLike={this.onToggleLike} />
                <EmployeesAddForm onAdd={this.onAdd}/>
    
            </div>
        )
    }
}


export default App;