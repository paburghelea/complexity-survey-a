import React from 'react'

export default function Label(props:any) {

  const label = {
    position: "relative",
    width: "100%",
    height: "32px",
    color: "var(--color-contrast-lowest)",
    fontSize: "12px",
    fontWeight: "bolder",
    textTransform: "uppercase",
    borderBottom: "1px solid var(--color-contrast-lower)"

  } as React.CSSProperties;

  const graphic_01 = {
    position: "absolute",
    top: "0",
    left: "0",
    fill: "var(--color-contrast-lower)"
  } as React.CSSProperties;

  const graphic_02 = {
    position: "absolute",
    top: "0",
    left: "160px",
    fill: "var(--color-contrast-lower)"
  } as React.CSSProperties;

  const graphic_03 = {
    position: "absolute",
    top: "0",
    display:"flex",
    alignItems: "center",
    left: "300px",
    height: "32px",
    width: "793px",
    paddingLeft: "32px",
    backgroundColor: "var(--color-contrast-lower)"
  } as React.CSSProperties;



  return (
    <div style={label}>
      <svg width="200" height="32" style={graphic_01}> <polygon points="0,0 0,32 100,32 200,0"/></svg>
      <svg width="140" height="32" style={graphic_02}> <polygon points="100,0 0,32 200,32 200,0"/></svg>
      <div style={graphic_03}>
        {props.label}
      </div>

      {/* <svg width="120" height="32" style={graphic_end}> <polygon points="120,32 120,0 56,0 0,16 56,32"/></svg> */}
    </div>
  )
}
