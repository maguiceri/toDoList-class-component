import React from 'react'
import Task from '../Task'
import "./styles.scss"

class Tasks extends React.Component{
    render(){
        return(
            <>
                
                <ul>
                    {this.props.tasks.map((name,key) => {
                        return <Task name={name} key={key} />
                    })}
                </ul>
            </>

        )
    }
}

export default Tasks