import React, {Component} from 'react';
import MySecondComponent from './SecondComponent';

class MyFirstComponent extends Component {
    
        render() { //contains the view
        return ( <div>
            Hello, {this.props.children}
            <MySecondComponent
                sname={this.props.name}
                slocation = {this.props.location}
                year = {this.props.children}>
                </MySecondComponent>  
           
        </div> );//should not return more then one.. if so wrap them
    }
}
 
export default MyFirstComponent;

