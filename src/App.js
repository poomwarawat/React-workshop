import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            lastname : "",
            catagory : "",
            status : true
        }
    }
    handleChange = (e) =>{
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Sample Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>name</p>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Please enter your name" 
                        value={this.state.name}
                        onChange={this.handleChange}>
                    </input><br></br>
                    <p>lastname</p>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Please enter lastname"
                        onChange={this.handleChange}>
                    </input><br></br>
                    <p>Product</p>
                    <select name="catagory" onChange={this.handleChange} value={this.state.catagory}>
                        <option value="0">...</option>
                        <option value="1">iphone</option>
                        <option value="2">macbook</option>
                        <option value="3">camera</option>
                    </select>
                    <p>Status</p>
                    <input 
                        type="checkbox"
                        checked={this.state.status}
                        onChange={this.handleChange}
                        name="status"
                    ></input>
                    <button type="submit">Click me</button>
                </form>  
            </div>
        )
    }
}
