import React from 'react'

export default function Bar(props:any) {

  const container =  {
    width: "100%",
    height: "32px",
    position: "relative",
    bottom:"0px ",
    color: "var(--color-text-low)",
    display: "flex",
    alignItems: "center",
    padding: "0px 18px 0px 18px",
    fontSize: "12px",
    justifyContent: "space-between",
    backgroundColor: "var(--color-contrast-lowest)"
  } as React.CSSProperties;

  return (
    <div style={container}>
      <div>©Qualutia 2021 - Redistribution is strictly prohibited.</div>
      <div>Version: 0.002 Alpha</div>
    </div>
  )
}
