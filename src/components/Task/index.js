import React from 'react'

class Task extends React.Component{
    render(){
        return(
            <>
            <li>{this.props.name} </li>
            </>
        )
    }
}

export default Task