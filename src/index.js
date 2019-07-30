import React from 'react';
import ReactDOM from "react-dom";
import MyFirstComponent from './AppComponent';
import Counter from './Counter/Counter'
import LifeCycle from './lifecycle';
import RemoteData from './remote/remote';

var position = document.getElementById("rootcontainer")

ReactDOM.render(<span>
    <div>
    <MyFirstComponent name="Sybil" location="Chennai">12</MyFirstComponent>
    <MyFirstComponent name="Roshini" location="Mumbai">13</MyFirstComponent>
    <MyFirstComponent name="Seline" location="Delhi">14</MyFirstComponent>
    
    </div>
    <Counter></Counter>
    <br></br>
    
    <LifeCycle></LifeCycle>
    <br></br>
    <RemoteData></RemoteData>
    <br></br>
    </span>
    , position)

