import React, {Component} from 'react';

class MySecondComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            year: parseInt(this.props.year)
        }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }
    
    add(){
        this.setState({
            year: this.state.year + 1
        })
    }
    sub(){
        this.setState({
            year: this.state.year - 1
        })
    }

    
    state= { }
    render() { 
        return ( <div>
            Name : {this.props.sname}
            <br></br>
            Location : {this.props.slocation}
            <br></br>
            Age : {this.state.year}
            <br></br>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
            <hr></hr>
            </div> );
    }
}
 
export default MySecondComponent;
