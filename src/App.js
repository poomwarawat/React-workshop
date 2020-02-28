import React, {Component} from 'react';

class App extends Component {
    
    state = {
        likeme : 0
    }
    render(){
        
        return ( 
            <div className="App">
                <h1>{this.state.likeme}</h1>
                <button onClick={this.handleClick}>Like</button>
            </div>
        );
    }

    handleClick = () =>{
        //แบบนี้ดี
        this.setState((prevState, props) => {
            return{
                likeme : prevState.likeme + 1
            }
        })

        //this.state.likeme = 5 // Error

        // this.setState({
        //     likeme : this.state.likeme + 1 // เกือบถูก
        // })
    }
}

export default App;