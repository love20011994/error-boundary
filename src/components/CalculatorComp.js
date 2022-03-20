import React from 'react';

function CalculatorComp() {
    const handelClick = ( n1, n2) => {
        //const sum=add(n1,n2)
        console.log('sum', sum);

        //dynamic import
        //code splitting
        import('../utils/Calculator.js').then((calci) => {
            const sum = calci.add(n1,n2)
        console.log('sum',sum);
        })
        
    }
  return <div>
      <button
      onClick={() => {
          handelClick(10,20)
      }}>ADD</button>
  </div>;
}

export default CalculatorComp;
