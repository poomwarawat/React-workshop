import React, { Component } from 'react'

export default class LikeBtn extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.like ? 'Like me' : 'Dislike me'}</button>
            </div>
        )
    }
    handleClick = () =>{
        this.props.onclickLike(this.props.like) 
    }
}
