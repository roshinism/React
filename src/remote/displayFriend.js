import React from 'react';

class DisplayFriend extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               {this.props.name} is from {this.props.location} and is {this.props.age} years old
            </div>
         );
    }
}
 
export default DisplayFriend;