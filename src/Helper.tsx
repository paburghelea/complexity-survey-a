import React, { useState } from 'react'

export default function Helper(props:any) {


  const[isActive, setIsActive] = useState(false);

  const container = {
    position: "relative",
    width: props.size ? props.size : "22px",
    height: props.size ? props.size : "22px",
    color: "var(--color-contrast-lowest)",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--color-contrast-high)",
    opacity: isActive ? "1.0" : "0.6",
    transition: "0.2s ease-in-out",
    cursor: "help"
  } as React.CSSProperties;

  const info = {
    position: "absolute",
    width: "200px",
    height: "auto",
    minHeight: "40px",
    top: "0px",
    right: "-210px",
    padding: "4px 4px 4px 4px",
    fontSize: "12px",
    backgroundColor: "var(--color-contrast-high)",
    zIndex: 90,
    color: "var(--color-text-lowest)"
  } as React.CSSProperties;

  return (
    <div style={container} onMouseOver={()=> setIsActive(true)} onMouseLeave={()=> setIsActive(false)}>
      ?
      {isActive ? <div style={info}>{props.text}</div> : null}
    </div>
  )
}
