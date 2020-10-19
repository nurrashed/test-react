import React, {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function HelloFunctionalComponent (props){

    
    const [number, setNumber] = useState(0);
    
    function increment(){
        setNumber(number+1);
    };

    function decrement(){
        if(number > 0){
            setNumber(number-1);
        }
    };

    function alertClick(a){
        alert(a);
    };
    return (
        <>  
            <h3>Hello, I am from functional component. My name is: {props.name} and I am {props.age} years old.</h3>
            <div>
                <button onClick = {increment}>Increment</button>
                <p>Incremented and decremented by 1: {number}</p>
            </div>
            <div>
                <button onClick = {decrement}>Decrement</button>
            </div>
            <div>
                <button onClick= {alertClick.bind(this,'Hello, I am from bind!!')}>Click me Please</button>
            </div>
            <div>
                <button className='btn btn-primary m-5'>Button primary</button>
            </div>
        </>
    );
};

export default HelloFunctionalComponent;