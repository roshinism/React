import React from 'react';
import axios from "axios";
import DisplayFriend from './displayFriend';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }

    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData(){
        axios.get("http://localhost:1234/all").then((response)=>{
            console.log(response.data)
            this.setState({friends: response.data})
            console.log("Display Friends")
            console.log(this.state.friends)
        })
    }

    displayRemoteData(){
        console.log("Use diaplayFriend component to render remote data")
        //loop through state and work with one JSON objects at a time
        return this.state.friends.map((friend)=>{
            console.log(friend);
            return (<DisplayFriend
            key={friend.id}
            name={friend.name}
           location={friend.location}
            age={friend.age}></DisplayFriend>)
        })
        //map will iterate thru array.. friend - one json object in iteration
    }

    state = {  }
    render() { 
        return ( 
            <div>
                Getting Remote data..
                <br></br>
                {this.displayRemoteData()}
            </div>
         );
    }
}
 
export default RemoteData;