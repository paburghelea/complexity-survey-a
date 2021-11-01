import React, { useState } from 'react'

export default function Action(props:any) {

  const[isOver, setIsOver] = useState(false);


  const button = {
    width: props.width ? props.width : "100px",
    height: "32px",
    backgroundColor: props.isActive ? "var(--color-accent)" : "var(--color-contrast-low)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    cursor: props.isActive ? "pointer" : "not-allowed",
    borderRadius: "16px",
    opacity: props.isActive && isOver ? "0.8" : "1.0",
    transition: "0.2s ease-in-out",
    fontSize: "16px",
    margin: props.margin
  } as React.CSSProperties;

  return (
    <div style={button} onMouseOver={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)} onClick={()=> props.isActive ? props.onClick() : null}>
      {props.label}
    </div>
  )
}
