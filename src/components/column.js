import React from 'react'
import styled from 'styled-components'
import Task from '../components/Task'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border0radius:2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const Tasklist = styled.div`
    padding: 8px;
`;

export default class Column extends React.Component{
    render(){
        return(
            
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.title}>
                    {(provided)=>(
                    <Tasklist ref={provided.innerRef} {...provided.droppableProps}>
                        {this.props.tasks.map((task, index)=> {
                        
                        return <Task key={task.optimal_index} index={index} task={task}/>})}
                        {/* revert task to optimal index */}
                        {provided.placeholder} 
                       
                    </Tasklist>
                    )}
                </Droppable> 
            </Container>
        
        )
    }
}