import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 0 auto;
    border: 1px solid lightgrey;
    max-width: 800px;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: grey;
`

const Button = styled.button`
    float: right;
    border: 1px solid lightgrey;
    border-radius: 2px;
    align-right: 1px;
   
   
`

export default class Task extends  React.Component {
    
    render(){
        const wow = this.props.task.optimal_index.toString()
      
        return( 
            <Draggable draggableId={wow} index={this.props.index}>
                {(provided)=>(
                    
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {this.props.task.address}
                    <Button>delete</Button>
                </Container>
                )}
            </Draggable>
        )
    }
}

