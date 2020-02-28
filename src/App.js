import React, {Component} from 'react';
import Header from './Header'

class App extends Component {
    handleClick = (name, ...other) =>{
        console.log("name => " ,name , "other => ", other)
    }
    render(){
            
        //Spread Operator
        let obj1 = { a:1, b:2}
        let obj2 = { c:3, d:4}
        let Result = {...obj1, ...obj2}
        let arr1 = [1,2]
        let arr2 = [3,4]
        console.log(...arr1, ...arr2)
        console.log(Result)
        //Rest Parameter


        //Destructuring
        const order = {
            id : '1',
            name : 'poom',
            product : {
                name1 : "Notebook",
                price : "25,000"
            }
        }
        const {name ,id, product:{name1, price }} = order
        console.log(name, id) // เท่ากัน console.log(order.name, order.id)
        console.log(name, id, name1, price)
        return ( 
            <div className="App">
                <button onClick={() => this.handleClick("Warawat", "kmutt", "20y.", "ayw")}>Click me</button>
            </div>
        );
    }
}

export default App;