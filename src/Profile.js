import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            alert : false
        }
    }
    componentDidMount(){
        console.log("Profile : componentDidMount")
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.like === 2 && this.props.like < 2){
            this.props.hideBtn()
        }
        console.log("Profile : componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.like === 2 && this.props.like < 2){
            this.setState((ps) =>{
                return{
                    alert : true
                }
            })
        }
        console.log("Profile : shouldComponentUpdate")
        return true
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Profile : componentWillUpdate")   
    }
    componentDidUpdate(nextProps, nextState){
        console.log("Profile : componentDidUpdate")
    }
    render() {
        
        return (
            <div>
                <h1>{this.props.like}</h1>
                {this.state.alert && <h2>Like OverLoad</h2>}
            </div>
        )
    }
}
