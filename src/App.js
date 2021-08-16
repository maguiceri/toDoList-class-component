import React from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      tasks:[]
    }
  }

  handleCallBack(inputValue) {
    const {tasks} = this.state
    this.setState({
      tasks: [...tasks, inputValue] //spred operator
    })
  }
  render(){
    return(
      <>
      <AddTask propDePrueba={(inputValue) => this.handleCallBack(inputValue)}/>
      <Tasks tasks={this.state.tasks}/>
      </>
    )
  }
}

export default App;
