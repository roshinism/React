import React from 'react';

class LifeCycle extends React.Component {

    constructor(props){
        super(props)
        this.state={
            check:10
        }
        this.changeCheck = this.changeCheck.bind(this)
    }

    componentWillMount(){
        console.log("Component will mount now")
    }

    componentDidMount(){
        console.log("Component is mounted in browser")
    }

    componentWillUpdate(){
        console.log("Component will update")
    }

    componentDidUpdate(){
        console.log("Component has updated")
    }

    changeCheck(){
        this.setState({
            check: this.state.check - 1
        })
    }
 
    render() { 
        return ( 
            <div>
                Exploring Component LifeCycle
                <h1>{this.state.check}</h1>
                &nbsp;
                <button onClick={this.changeCheck}>CHANGE</button>
            </div>
         );
    }
}
 
export default LifeCycle;