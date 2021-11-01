import React from 'react'

export default function Row(props:any) {

  const row = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: props.padding ? props.padding : "4px 12px 4px 12px",
    margin: props.margin ? props.margin : "0px"
  } as React.CSSProperties;

  return (
    <div style={row}>
      {props.children}
    </div>
  )
}
