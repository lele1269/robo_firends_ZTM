import React from 'react'

const Scroll = (props) => { //con props si ricevono le info definite dei children
  console.log('scroll function props',props) //lancoare app per vedere il risultato delle props => riceve l'oggetto children
  return(
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}><div>{/*il css all'interno di jsx si dichiara all'interno di {{}} doppia parentesi graffa*/}</div>
        {props.children} <div>{/*in questo modo vengono manipolati i children*/}</div>
                          <div>{/*sintassi corretta per commentare all'interno di JSX*/}</div>
                          <div>{console.log('props children manipulation',props.children)}</div>
      </div>
  );}

export default Scroll

//Componente di tipo parent che può manipolare i Children gerarchicamente al di sotto di esso.
