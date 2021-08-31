import React from 'react'
import "./styles.scss"

class AddTask extends React.Component{
    constructor(props){    //INICIALIZACION
        super(props)

        this.state= {
            inputValue:""
        }
    }

    handleChange(e) {
        const {value} = e.target;
        this.setState({
            inputValue:value             //ACTUALIZACION
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
            <div className="add">
                <input className="input" type="text" onChange={(e) => this.handleChange(e)} value={this.state.inputValue}></input>
                <button className="button"onClick={() => this.handleClick()}>Agregar</button>
            </div>
        )
    }
}

export default AddTask;