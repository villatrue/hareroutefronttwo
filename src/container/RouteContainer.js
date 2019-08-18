import React from 'react'
// import { ReactComponent } from '*.svg';

import {DragDropContext} from 'react-beautiful-dnd'
 

import Column from "../components/column"
// import { tsThisType } from '@babel/types';

class RouteContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // numbers: [0,1,2,3,4,5,6,7,8,9],
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
        let routeId = (this.props.match.url.split("/").pop()        )
        // debugger
        fetch(`http://localhost:3000/routes/${routeId}`)
            .then(response => response.json())
            .then(data => {
                let tasks = data.addresses.map((address)=>{
                   return address.optimal_index})
                this.setState({
                    route: data.name,
                    tasks: data.addresses,
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
        console.log(this.state.columns["column-1"].taskIds)

        this.setState(newstate)


        this.patchOptimalIds(newstate)
    }



    patchOptimalIds =(newState)=>{
        console.log(newState.columns["column-1"].taskIds)
        let array = newState.columns["column-1"].taskIds
        this.state.tasks.map((task)=>{
            // debugger
            ///if array[0] is an integer than run function else parseInt then run function
            this.patchData(task, array.shift())
            
        })
    }

    patchData=(task, index)=>{
        // debugger
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
        // debugger
        
        fetch(`http://localhost:3000/addresses/${task.id}`, configObject)
            .then(response => {
                console.log(response)
                debugger
                response.json()})
            
            .then(object => {
                console.log(object)
                debugger
                console.log(object)
            })
            .catch(error => {
                window.alert(error.message);
            });
    }



    render(){ 
        return(
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
        )}
}

export default RouteContainer;