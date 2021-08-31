import React from 'react'
import "./styles.scss"

class Task extends React.Component{
    render(){
        return(
            <>
            <li className="list">{this.props.name} </li>
            </>
        )
    }
}

export default Task