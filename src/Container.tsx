import React from 'react'

export default function Container(props:any){

  const container={
      width:"100vw",
      height:"100vh",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px"
  } as React.CSSProperties;

  return(
      <div style={container}>
          {props.children}
      </div>
  )
}
