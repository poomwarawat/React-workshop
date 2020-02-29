import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : null,
            err : null 
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts?userId/1")
        .then(result =>{
            if(result.ok){
                return result
            }else throw Error(result.status)
        })
        .then(result => result.json())
        .then(result => this.setState((ps) => {return { data: result }}))
        .catch(e => this.setState({ err : e.message }))
    }
    render(){
        const {data , err } = this.state
        let list = <h1>Loading...</h1>
        if (data) {
            list = data.map((datas) =>{
                return(
                    <div key={datas.id}>
                        <h3>{datas.title}</h3>
                        <h2>{datas.body}</h2>
                    </div>
                )
            })
        }else{
            list = <h1>No Data</h1>
        }
        if(err){
            list = <h1>{err}</h1>
        }
        return ( 
            <div className="App">
                <h1>Load Data</h1>
                {list}
            </div>
        );
    }
}

export default App;