import React, { useState, useReducer } from 'react';

const App = () => {
   useReducer(reducer, { myname: '', age: '' });
   //    const [person, setPerson] = useState({ myname: '', age: '' });
   //    const { myname, age } = person;
   //    const onChange = (e) => {
   //       const { name, value } = e.target;
   //       setPerson((prevState) => ({
   //          ...prevState,
   //          [name]: value,
   //       }));
   //    };
   return (
      <div>
         myname:{myname}, age:{age}
         <br />
         <input
            type="text"
            name="name"
            placeholder="myname"
            onChange={onChange}
         />
         <input type="text" name="age" placeholder="age" onChange={onChange} />
      </div>
   );
};

export default App;
