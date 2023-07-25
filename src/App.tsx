import React, {createElement as e} from 'react';


function App() {
  // return (
   
  // );
return e ('div',{className:'container'},[
  e('h1',{className:'font-bold',key:1},'Test'),
  e('button',{
    className:'py-2 px-4 border',
    key:2,
    onClick:()=>console.log('clicked')
  },'Click me')
])
}


export default App;
