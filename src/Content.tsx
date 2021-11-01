/* eslint-disable prettier/prettier */
import React from 'react'

export default function Content(props:any) {

  const container = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--color-contrast-low)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // justifyContent: "center"
  } as React.CSSProperties;

  const wrapper = {
    width: "calc(100vw - 36px)",
    height: "calc(100vh - 118px)",
    position: "absolute",
    top: "18px",
    bottom: "18px",
    left: "18px",
    backgroundColor: "var(--color-contrast-lowest)",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties;

  return (
    <div style={container}>
      <div style={wrapper}>
        {props.children}
      </div>
    </div>
  )
}
