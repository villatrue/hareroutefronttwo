import React from 'react'
// import { ReactComponent } from '*.svg';
import Address from '../components/Address'
import {DragDropContext} from 'react-beautiful-dnd'

import Column from "../components/column"

class RouteContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tasks: [],
            route: {},
            columns:{"colum-1" :{
                id: "",
                title: "",
                taskIds: []
            },},
            columnOrder: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/routes/4')
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
        // to do
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