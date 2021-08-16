import React from 'react'

class AddTask extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            inputValue:""
        }
    }

    handleChange(e) {
        const {value} = e.target;
        this.setState({
            inputValue:value
        })
    }
    handleClick() {
        const {inputValue} = this.state
        if(inputValue !== "") {
            this.props.propDePrueba(inputValue)
            this.setState({
                inputValue: ""
            })
        }
    }

    render(){
        return(
            <>
            <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.inputValue}></input>
            <button onClick={() => this.handleClick()}>Agregar</button>
            </>
        )
    }
}

export default AddTask;