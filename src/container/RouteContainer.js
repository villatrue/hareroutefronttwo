import React from 'react'
import Map from '../components/Map'
import {DragDropContext} from 'react-beautiful-dnd'
import Switch from '@material-ui/core/Switch';
import sortBy from 'lodash/sortBy'
 

import Column from "../components/column"
// import { tsThisType } from '@babel/types';

class RouteContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sort: "Sort by Custom",
            sortBy: "optimal_index",
            tasks: [],
            route: {},
            columns:{"column-1" :{
                id: "",
                title: "",
                taskIds: []
            },},
            columnOrder: []
        }
    }

    componentDidMount(){
        console.log(this.props)
        let routeId = (this.props.match.url.split("/").pop())
        fetch(`http://localhost:3000/routes/${routeId}`)
            .then(response => response.json())
            .then(data => {
                // sortBy(users, ['user', 'age']);
                let addresses = sortBy(data.addresses, ['add', 'optimal_index'])

                // debugger
                let tasks = addresses.map((address)=>{
                    // debugger
                   return address[`${this.state.sortBy}`]})
                this.setState({
                    route: data.name,
                    
                    tasks: addresses,
                    columns:{"column-1" :{
                        id: "column-1",
                        title: data.name,
                        taskIds: tasks
                    },},
                    columnOrder: ["column-1"]
                })
            });
    }
    
    onDragEnd = result =>{
        const { destination, source, draggableId } = result
        if (!destination){
            return;
        }
        //Describing what will happen if it isn't dropped anywhere
        if (
            destination.draggableId === source.droppapleId &&
            destination.index === source.index
            //describing what will happen if it is dropped on the same spot
        ){
            return;
        }
        //the code below describes what happens if the draggable item is moved
        const column = this.state.columns["column-1"];
        const newTaskIds = Array.from(column.taskIds)

        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)
///could make fevrything below its own function for asynchonisity 
        const newColumn ={
            ...column,
            taskIds: newTaskIds,
        }


        const newstate = {
            ...this.state,
            columns:{
                ...this.state.columns,
                [newColumn.id]: newColumn,

            },
        }
        this.setState(newstate)
        this.patchOptimalIds(newstate)
    }



    patchOptimalIds =(newState)=>{
        let arrayOg = newState.columns["column-1"].taskIds
        let array = [...newState.columns["column-1"].taskIds]
        
        this.state.tasks.map((task)=>this.patchData(task, array.shift()))
  
        this.setState({ 
            tasks: newState.tasks,
            columns:{"column-1" :{
                id: "column-1",
                title: this.state.route,
                taskIds: arrayOg
            },},
            columnOrder: ["column-1"]
        })
    }

    patchData=(task, index)=>{
        let updateData = {
            name: task.name,
            address: task.address,
            zipcode: task.zipcode,
            latitude: task.latitude,
            longitude: task.longitude,
            sorted_index: index,
            optimal_index: task.optimal_index,
            first: task.first,
            last: task.last,
            route_id: task.route_id
        };
        
        let configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updateData)
        };

        fetch(`http://localhost:3000/addresses/${task.id}`, configObject)
            .then(response => {
                console.log(response)
                response.json()})
            .then(object => {
                console.log(object)
            })
            .catch(error => {
                window.alert(error.message);
            });
            this.setState({
                sort: "Sort by Optimal",
                sortBy: "sorted_index"
            })
    }

    handleChange = (event)=>{
        console.log(this.state)
        let array = []
        // debugger
        this.state.tasks.map((address)=>array.push(address.optimal_index))
        const column = this.state.columns["column-1"];
        const newColumn ={
            column,
            taskIds: array.sort(),
        }

        const newstate = {
            ...this.state,
            columns:{
                ...this.state.columns,
                [newColumn.id]: newColumn,

            },
        }

        this.setState(newstate)
        

        console.log(array.sort())
        ///very close to having the handlechange working next step is to set state of task id's to sorted
    }

    render(){ 
        return(
        <div>
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
            { this.state.columnOrder.map((columnId) =>{
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId=>{
                        
                    return  this.state.tasks[taskId]})  
                    return <Column key={column.id} column={column} tasks={tasks}/>
                })}
            </DragDropContext>
            <button onClick={()=>this.patchOptimalIds(this.state)}> Save Order</button>
                <Switch
                color="primary"
                onClick={(event)=>this.handleChange(event)}
                />
           <button onClick={(event)=>this.handleChange(event)}>{this.state.sort}</button>
           <Map waypoints={this.state.tasks}/>
         </div>
        )}
}

export default RouteContainer;