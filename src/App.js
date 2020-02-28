import React, {Component} from 'react';
import LikeBtn  from './LikeBtn'

class App extends Component {
    
    state = {
        likeme : 0,
        disLike :0
    }
    render(){
        return ( 
            <div className="App">
                <h1>Like : {this.state.likeme}</h1>
                <h1>Dislike : {this.state.disLike}</h1>
                <LikeBtn onclickLike={this.handleClick} like={true}></LikeBtn>
                <LikeBtn onclickLike={this.handleClick}></LikeBtn>
            </div>
        );
    }

    handleClick = (like) =>{
        if(like){
            this.setState((prevState, props) => {
                return{
                    likeme : prevState.likeme + 1
                }
            })
        }else{
            this.setState((prevState, props) => {
                return{
                    disLike : prevState.disLike + 1
                }
            })
        }
        
    }
}

export default App;