import React, {Component} from 'react';
import Header from './Header'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            likeme : 1
        }
    }
    handleClick = (name) =>{
        alert(this.state.likeme + " " + name)
    }
    render(){
        return ( 
            <div>
                <Header title="Hello, Poom Warawat"></Header>
                <button onClick={() => this.handleClick("Hello Penguin")}>Click me</button>
            </div>
        );
    }
}

export default App;