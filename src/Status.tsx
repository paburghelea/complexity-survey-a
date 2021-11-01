import React from 'react'

export default function Status(props:any) {


  const container = {
    width: props.width ? props.width : "44px",
    height: props.height ? props.height : "44px",
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } as React.CSSProperties;

  const status = {
    width: "100px",
    height: "32px",
    backgroundColor: props.isValid ? "rgb(11, 102, 35)" : "rgb(237, 41, 57)",
    color: "var(--color-contrast-lowest)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",

  } as React.CSSProperties;

  return (
    <div style={container}>
      <div style={status}>
        {props.isValid ? "VALID" : "INVALID"}
      </div>
    </div>
  )
}
