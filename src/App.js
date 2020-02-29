import React, {Component} from 'react';
import LikeButton from './LikeButton'
import Profile from './Profile'

class App extends Component {
    constructor(){
        super()
        this.state = {
            Like : 0,
            showButton : true
        }
        console.log("App : constructor")
    }
    componentDidMount(){
        console.log("App : componentDidMount")
    }
    render(){
        console.log("App : Render")
        return ( 
            <div className="App">
                <h1>React L ifecycle</h1>
                <Profile like={this.state.Like} hideBtn={this.setHidden}></Profile>
                {this.state.showButton && <LikeButton onClickLike={this.handleClick}></LikeButton>}
            </div>
        );
    }
    handleClick = () =>{
        this.setState((ps) =>{
            return{
                Like : ps.Like + 1
            }
        })
    }
    setHidden = () =>{
        this.setState((ps) =>{
            return{
                showButton : false
            }
        })
    }
}

export default App;