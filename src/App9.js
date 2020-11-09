import React, { useContext, createContext, useReducer } from 'react';

const CounterContext = createContext();

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const reducer = (prevState, action) => {
   const { type } = action;
   if (type === INCREMENT) {
      return prevState + 1;
   } else if (type === DECREMENT) {
      return prevState - 1;
   }
   return prevState;
};

const actionIncrement = () => ({ type: INCREMENT });
const actionDecrement = () => ({ type: DECREMENT });

const App = () => {
   const [state, dispatch] = useReducer(reducer, 0);

   return (
      <div>
         <h1 onClick={() => dispatch(actionDecrement())}>App9 : {state}</h1>
         <CounterContext.Provider value={{ state, dispatch }}>
            <GameBox />
         </CounterContext.Provider>
      </div>
   );
};

const GameBox = () => {
   const { state: countValue, dispatch } = useContext(CounterContext);
   const onClick = () => {
      dispatch(actionIncrement());
   };
   return (
      <div>
         <h2>GmaeBox</h2>
         <button onClick={onClick}>{countValue}</button>
      </div>
   );
};

export default App;
