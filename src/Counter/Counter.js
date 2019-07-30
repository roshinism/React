/*import React from 'react';

class Counter extends React.Component {
    
    
    constructor(){
        super()
        this.state = {
            "name": "Roshini"
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName()
    {
        console.log(this.state.name)
        this.setState({name:"Shiny Rose"})
    }

    render() { 
        return ( 
            <div>
                Counter: {this.state.name}
                <br></br>
                <button onClick={this.changeName}>CHANGE</button>
            </div>
         );
    }
}
 
export default Counter;
*/
import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name: "Shiva",
            score: 8,
            friends: ["Obb","Bnp"]//json objects cannot be displayed
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        this.setState({
            name: "BNP",
            score: this.state.score +2
        })
    }
    
    render() { 
        return ( 
            <div>
                Name: {this.state.name}
                <br></br>
                Score: {this.state.score}
                <br></br>
                Friends: {this.state.friends}
                <br></br>
                <button onClick={this.changeName}>CHANGE</button>
            </div>
         );
    }
}
 
export default Counter;