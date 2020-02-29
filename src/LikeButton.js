import React, { Component } from 'react'

export default class LikeButton extends Component {
    componentWillUnmount(){
        console.log("LikeButton : componentWillUnmount")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Like</button>
            </div>
        )
    }
    handleClick = () =>{
        this.props.onClickLike()
    }
}
