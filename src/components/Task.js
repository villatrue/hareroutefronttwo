import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`

export default class Task extends  React.Component {
    render(){
        return( 
            // <Draggable draggableId={this.props.tasks.id} index={this.props.index}>
                <Container>
                    {this.props.task.id}
                </Container>
            // </Draggable>
        )
    }
}

