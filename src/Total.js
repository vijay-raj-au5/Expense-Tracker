import React from 'react'



export const Total = (props) => {
  
    const amounts = props.users.map( user => user.amount);
    console.log(amounts)
    let amt = amounts.map(function(v){
        return parseInt(v,10);
    })
  
    const total = amt.reduce((acc, item) => (acc += item), 0);
  
    return (
      <>
        <h4>Total | {total}</h4>
      
      </>
    )
  }





