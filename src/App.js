import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import PersonDetail from './components/PersonDetail';
import Err1 from './error-boundary/Err1';
import CalculatorComp from './components/CalculatorComp';
import React,{Suspense, useState} from 'react';

//react componebts are lazy loading
const lazyComp =  React.lazy( () => {
    return import('./components/ComponentA')
  })

function App() {

  const [showComponents, setshowComponents] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary>
        <PersonList />
      </ErrorBoundary>
      <hr />
    {/*   <Err1>
        <PersonDetail />
      </Err1> */}
      <br/>
      <br/>
      <hr/>
      {/* <CalculatorComp/> */}
      <button
      onClick={ () => {
        setshowComponents(!showComponents)
      }}>{showComponents ? 'hide' : 'show'}</button>

      {showComponents && 
      <Suspense fallback={<div>Loading....</div>}><lazyComp/></Suspense>}

    </div>
  );
}

export default App;
